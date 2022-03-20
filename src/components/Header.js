import React, { useEffect, useRef, useState } from 'react'
import Logo from '../img/aesop.svg'
import {
	MOBILE_NAVIGATION,
	MOBILE_SIDE_NAVIGATION,
	NAVIGATION,
	SIDE_NAVIGATION,
} from '../config'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faExclamation,
	faPlus,
	faSearch,
} from '@fortawesome/free-solid-svg-icons'
import useModal from '../hooks/useModal'
import HeaderModal from './ModalContent/HeaderModal'
import '../App.scss'
import classnames from 'classnames'
import { useCustomBreakpoint } from '../hooks/useBreakpoint'

const Header = ({ cartItems, itemAddedToCart, onClick }) => {
	const { setModal } = useModal()
	const [stickyHeader, setStickyHeader] = useState(false)
	const [hide, setHide] = useState(false)
	const [successPullout, setSuccessPullout] = useState(true)
	const [errorPullout, setErrorPullout] = useState(true)
	const [navigation, setNavigation] = useState([])
	const [sideNavigation, setSideNavigation] = useState([])
	const { isCustom: isUnder640 } = useCustomBreakpoint({ max: 640 })
	const { isCustom: isOver1024 } = useCustomBreakpoint({ min: 1024 })
	const headerRef = useRef()

	console.log(navigation, sideNavigation)

	useEffect(() => {
		if (isOver1024) setNavigation(NAVIGATION)
		else setNavigation(MOBILE_NAVIGATION)
	}, [isOver1024])

	useEffect(() => {
		if (isUnder640) setSideNavigation(MOBILE_SIDE_NAVIGATION)
		else setSideNavigation(SIDE_NAVIGATION)
	}, [isUnder640])

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 140 && itemAddedToCart === 'error')
				return setStickyHeader(true)
			if (window.scrollY > 120) return setStickyHeader(true)
			setStickyHeader(false)
		}
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [headerRef, itemAddedToCart])

	useEffect(() => {
		let interval
		if (itemAddedToCart === 'success')
			interval = setInterval(() => setSuccessPullout(false), 3000)

		return () => clearInterval(interval)
	}, [itemAddedToCart])

	return (
		<div
			className='header__container'
			ref={headerRef}
			style={{ position: stickyHeader && 'sticky', top: stickyHeader && 0 }}
		>
			{!stickyHeader && (
				<div
					className={classnames(
						'header__top',
						'flex',
						'flex__container',
						`flex--${isOver1024 && 'center'}`
					)}
				>
					<p
						className='header__text header__text--modal link'
						onClick={() => setModal(<HeaderModal />)}
					>
						{isOver1024 &&
							'Enjoy complimentary carbon neutral shipping on all orders.'}{' '}
						Express delivery now available{' '}
						<span
							className={classnames(
								'header__link',
								!isOver1024 && 'position--absolute',
								!isOver1024 && 'header__link--right'
							)}
						>
							<FontAwesomeIcon icon={faPlus} />
						</span>
						<span></span>
					</p>
				</div>
			)}
			{itemAddedToCart === 'success' && (
				<div
					className={classnames(
						'header__top',
						'header__animation',
						`header__animation--slide-${successPullout ? 'down' : 'up'}`
					)}
				>
					<div className='header__top flex flex__container flex--flex-end'>
						<p className='header__text header__text--right'>
							In Two Minds Facial Cleanser added to the cart
						</p>
					</div>
				</div>
			)}
			{itemAddedToCart === 'error' && (
				<div
					className={classnames(
						'header__top',
						'header--pullout',
						`header__animation--slide-${errorPullout ? 'down' : 'up'}`
					)}
					style={{ display: hide && 'none' }}
				>
					<div className='header__top flex flex__container flex--space-evenly'>
						<div className='flex--3 flex__body'>
							<span className='icon icon__span icon--circle opacity opacity--0-5 dark'>
								<FontAwesomeIcon icon={faExclamation} />
							</span>
						</div>
						<div className='flex--3 flex__body'>
							<h3 className='header__title title--h3 dark'>
								Maximum allowed quantity exceeded.
							</h3>
						</div>
						<div className='flex--3 flex__body text--right'>
							<span
								className='icon icon__span icon--rotated dark'
								onClick={() => {
									setHide(true)
									setErrorPullout(false)
								}}
							>
								<FontAwesomeIcon icon={faPlus} />
							</span>
						</div>
					</div>
					<div className='header__top flex flex__container flex--space-evenly'>
						<div className='flex--3 flex__body'>&nbsp;</div>
						<div className='flex--3 flex__body'>
							<p className='header__description dark opacity opacity--0-5'>
								Our apologies, You have exceeded the maximum allowed quantity of
								this item.
							</p>
						</div>
						<div className='flex--3 flex__body text--right'>
							<a href='_' className='header__link dark'>
								Need assistance?
							</a>
						</div>
					</div>
				</div>
			)}

			<div className='header__bottom flex flex__container flex--space-evenly'>
				<div className='flex--2-3 flex__body bottom bottom--left'>
					{navigation.length > 0 &&
						(!isUnder640 ? (
							navigation.map((nav, ix) => (
								<a
									href='_'
									className='header__link header__link--navigation'
									key={ix}
								>
									{nav === 'Search' ? <FontAwesomeIcon icon={faSearch} /> : nav}
								</a>
							))
						) : (
							<img
								src={Logo}
								alt='aesop logo'
								className='header__image header__logo'
							/>
						))}
				</div>
				<div className='flex--1-3 flex__body bottom bottom--right'>
					{sideNavigation.map((sideNav, ix) => (
						<a
							href='_'
							className={classnames(
								'header__link',
								'header__link--navigation',
								sideNav === 'Menu' && 'header__link--hide'
							)}
							onClick={e => {
								if (sideNav === 'Cart') onClick()
								e.preventDefault()
							}}
							key={ix}
						>
							{sideNav === 'Search' ? (
								<FontAwesomeIcon icon={faSearch} />
							) : (
								sideNav
							)}{' '}
							{sideNav === 'Cart' && cartItems !== 0 && (
								<span className='header__span'>{cartItems}</span>
							)}
							{sideNav === 'Menu' && (
								<div className='header__menu'>
									<span className='menu__bar menu__bar--top'></span>
									<span className='menu__bar menu__bar--bottom'></span>
								</div>
							)}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

Header.propTypes = {
	mainNavigation: PropTypes.array,
	sideNavigation: PropTypes.array,
	onClick: PropTypes.func,
}

Header.default = {
	mainNavigation: NAVIGATION,
	sideNavigation: SIDE_NAVIGATION,
}

export default Header
