import { useState, useEffect } from 'react'

const useLocalStorage = <T>(
	key: string,
	defaultValue: T
): [T, (newValue: T) => void] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key)!)
		}
		return defaultValue
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storedValue))
	}, [storedValue])

	const setValue = (newValue: T) => {
		if (newValue) {
			setStoredValue(newValue)
		}
	}
	return [storedValue, setValue]
}

export default useLocalStorage
