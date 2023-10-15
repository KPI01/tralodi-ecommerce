'use client'
import { useEffect, useState } from "react";


export function useSessionStorage (key) {
    const [value, setValue] = useState('')

    useEffect(() => {
        if (window) {
            setValue(sessionStorage.getItem(key))
        }
    })

    return value
}

export function useSetSessionStorage (key, valueToStore) {
    const [storedValue, setStoredValue] = useState('')

    useEffect(() => {
        if (window) {
            setStoredValue(valueToStore)
            sessionStorage.setItem(key,storedValue)
        }

        return storedValue
    })
}