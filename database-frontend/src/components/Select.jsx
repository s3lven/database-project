import { useState, useEffect, useRef } from "react"

// April 9-10 - I learned how to create a dropdown select menu with single and multi-select features.
// In terms of CSS, I conditionally rendered styles using literals, discovered child selectors,
// learned about modifiers for states of components, and learned certain standards for designing components
// In terms of React, I learned that props can be standalone (no value assigned). I still need to review useRef hook.
// I learned about keyboard accessability and how to make that possible for users.
// In terms of Javascript, I learned about more event parameters (stopPropagation, tabIndex, and onBlur).
// I should continue to look into more of these.

function Select({ multiple, value, onChange, options }) {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const containerRef = useRef(null)

    function clearOptions() {
        multiple? onChange([]) : onChange(undefined)
    }

    function selectOption(option) {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter(o => o !== option))
            } else {
                onChange([...value, option])
            }
        } else {
        if (option !== value) onChange(option)
        }
    }

    function isOptionSelected(option) {
        return multiple? value.includes(option): option === value
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen])

    useEffect(() => {
        const handler = (e) => {
            if(e.target != containerRef.current) return

            switch(e.code) {
                case "Enter":
                case "Space" :
                    setIsOpen(prev => !prev)
                    if (isOpen) selectOption(options[highlightedIndex])
                    break
                case "ArrowUp":
                case "ArrowDown":
                    if(!isOpen) {
                        setIsOpen(true)
                        break
                    }
                    const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
                    if (newValue >= 0 && newValue < options.length) {
                        setHighlightedIndex(newValue)
                    }
                    break
                case "Escape":
                    setIsOpen(false)
                    break
            }

        }
        containerRef.current?.addEventListener("keydown", handler)

        return () => {
            containerRef.current?.removeEventListener("keydown", handler)

        }
    }, [isOpen, highlightedIndex, options])

    
    return (
        // Container 
        <div className="relative w-80 min-h-6
            border border-solid border-gray-700 rounded
            flex items-center gap-2 p-2 outline-none
            focus:border-cyan-500"
            tabIndex={0}
            onClick={() => setIsOpen(prev => !prev)}
            onBlur={() => setIsOpen(false)}
            ref={containerRef}>
            {/* Value */}
            <span className="flex-1 flex flex-wrap gap-2">{multiple? value.map(v => (
                <button key={v.value}
                    onClick={e => {
                        e.stopPropagation()
                        selectOption(v)
                    }}
                    className="flex items-center gap-2
                        border border-solid border-gray-700 rounded py-0.5 px-1
                        cursor-pointer bg-none outline-none group
                        focus:bg-red-300 focus:border-red-600 
                        hover:bg-red-300 hover:border-red-600">
                    {v.label}
                    <span className="group-hover:text-red-600 group-focus:text-red-600 text-gray-700 text-sm">
                        &times;
                    </span>
                </button>
            )) : value?.label}
            </span>
            {/* Clear Button */}
            <button onClick={e => {
                e.stopPropagation()
                clearOptions()
            }} 
                className="bg-transparent text-gray-700
                border-none outline-none cursor-pointer p-0 text-xl
                focus:text-gray-800 hover:text-gray-800">
                &times;</button>
            {/* Divider */}
            <div className="bg-gray-700 self-stretch w-[.05em]"></div>
            {/* Caret */}
            <div className="border-[.25em] border-solid border-transparent border-t-gray-700
                translate-x-0 translate-y-1/2"></div>
            {/* Options */}
            {isOpen &&
                <ul className="absolute m-0 p-0 list-none max-h-60
                    border border-solid border-gray-700 rounded w-full
                    left-0 top-[calc(100%_+_.25em)]
                    bg-white z-100">
                    {/* Option */}
                    {
                    options.map((option, index) => (
                        <li key={option.value}
                        onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                        onMouseEnter={() => {
                            setHighlightedIndex(index)
                        }}
                            className={`py-1 px-2 cursor-pointer
                                ${isOptionSelected(option) ? 'bg-cyan-500 ' : ''}
                                ${index === highlightedIndex ? 'bg-cyan-700 text-white ' : ''} `}>
                            {option.label}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Select