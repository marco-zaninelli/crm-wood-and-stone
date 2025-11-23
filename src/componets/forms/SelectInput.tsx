"use client";

import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { SelectHTMLAttributes } from 'react';

// Extend props to include the specific name property required by the parent form action
interface SelectInputProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'defaultValue'> {
    label: string;
    name: string; // Mandatory for form submissions
    options: { value: string; label: string }[];
    defaultValue?: string; // Optional default value
}

export function SelectInput({ label, options, defaultValue, name, ...props }: SelectInputProps) {
    const defaultOption = useMemo(() => options.find(opt => opt.value === defaultValue) || options[0], [options, defaultValue]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultOption);
    const containerRef = useRef<HTMLDivElement>(null);

    // Hook to handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = useCallback((option: { value: string; label: string }) => {
        setSelectedValue(option);
        setIsOpen(false);
    }, []);

    return (
        <div className="flex flex-col gap-2 relative" ref={containerRef}>
            <label
                className="text-sm font-medium text-secondary"
                // Associate label with the custom button for accessibility
                id={`${name}-label`}
            >
                {label}
            </label>

            {/* Hidden input field to hold the actual selected value for form submission */}
            <input type="hidden" name={name} value={selectedValue.value} {...props} />

            {/* Custom Dropdown Trigger Button */}
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-labelledby={`${name}-label`}
                onClick={() => setIsOpen(!isOpen)}
                className="
          w-full flex items-center justify-between h-[42px] px-4 py-2
          bg-transparent text-primary
          border border-secondary/30 rounded-lg
          focus:border-accent focus:outline-none
          transition-colors duration-200 cursor-pointer
        "
            >
                <span>{selectedValue.label}</span>
                <ChevronDown
                    size={18}
                    className={`
            text-secondary transition-transform duration-200
            ${isOpen ? 'rotate-180 text-accent' : 'rotate-0'}
          `}
                />
            </button>

            {/* Custom Dropdown List */}
            {isOpen && (
                <ul
                    role="listbox"
                    aria-labelledby={`${name}-label`}
                    tabIndex={-1}
                    className="
            absolute z-10 top-full mt-2 w-full max-h-60 overflow-y-auto
            bg-foreground shadow-xl rounded-lg border border-secondary/20
          "
                >
                    {options.map((option) => (
                        <li
                            key={option.value}
                            role="option"
                            aria-selected={option.value === selectedValue.value}
                            onClick={() => handleSelect(option)}
                            className={`
                flex items-center justify-between px-4 py-2 cursor-pointer
                text-primary hover:bg-color-accent/10
                transition-colors duration-150
                ${option.value === selectedValue.value ? 'bg-accent/20 font-semibold' : ''}
              `}
                        >
                            {option.label}
                            {option.value === selectedValue.value && (
                                <Check size={16} className="text-color-accent" />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}