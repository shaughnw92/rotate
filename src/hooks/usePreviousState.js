import { useEffect, useRef } from 'react'

const usePreviousState = state => {
	const previousStateRef = useRef()
	useEffect(() => {
		previousStateRef.current = state
	}, [state])

	return previousStateRef.current
}

export default usePreviousState
