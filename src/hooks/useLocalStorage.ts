import { useState, useEffect } from 'react'

const useLocalStorage = <T>(
	key: string,
	defaultValue: T
): [T, (newValue: T) => void, () => void] => {
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

	const removeValue = () => {
		localStorage.removeItem(key)
		setStoredValue(undefined)
	}

	return [storedValue, setValue, removeValue]
}

export default useLocalStorage
