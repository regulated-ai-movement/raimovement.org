import { useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: unknown): [T, (value: T) => void] => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window?.localStorage?.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window?.localStorage?.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

export { useLocalStorage }