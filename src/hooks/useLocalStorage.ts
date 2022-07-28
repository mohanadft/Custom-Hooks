import { useState, useEffect } from 'react'

const useLocalStorage = <T>(
	key: string,
	defaultValue: T
): [T, (newValue: T) => void] => {
	const [storderValue, setStorderValue] = useState<T>(() => {
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key)!)
		}
		return defaultValue
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storderValue))
	}, [storderValue])

	const setValue = (newValue: T) => {
		if (newValue) {
			setStorderValue(newValue)
		}
	}
	return [storderValue, setValue]
}

export default useLocalStorage
