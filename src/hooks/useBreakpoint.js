import { useEffect, useState } from 'react'
import { BREAKPOINTS } from '../consts'

const getWidth = width => {
	if (width < 768) return BREAKPOINTS.MOBILE
	return BREAKPOINTS.DESKTOP
}

const getCustomWidth = (width, min, max) => {
	if (width < max && width >= min) return BREAKPOINTS.CUSTOM
	return BREAKPOINTS.NONE
}

const useBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState(getWidth(window.innerWidth))

	useEffect(() => {
		const handleResize = () => setBreakpoint(() => getWidth(window.innerWidth))
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [breakpoint])

	return {
		isMobile: breakpoint === BREAKPOINTS.MOBILE,
		isDesktop: breakpoint === BREAKPOINTS.DESKTOP,
	}
}

export const useCustomBreakpoint = ({ min = 0, max = Infinity }) => {
	const [breakpoint, setBreakpoint] = useState(
		getCustomWidth(window.innerWidth, min, max)
	)

	useEffect(() => {
		const handleResize = () =>
			setBreakpoint(() => getCustomWidth(window.innerWidth, min, max))
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [breakpoint, min, max])

	return {
		isCustom: breakpoint === BREAKPOINTS.CUSTOM,
		isNone: breakpoint === BREAKPOINTS.NONE,
	}
}

export default useBreakpoint
