import { useState } from 'react'

const useToggle = (
	defaultValue: boolean
): [boolean, (value: boolean) => void] => {
	const [value, setValue] = useState(defaultValue)

	const toggleValue = (value: boolean) => {
		setValue(!value)
	}

	return [value, toggleValue]
}

export default useToggle
