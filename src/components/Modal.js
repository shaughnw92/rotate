/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import useOutsideClick from '../hooks/useOutsideClick'
import classnames from 'classnames'

const Modal = ({ modal, unsetModal }) => {
	const modalContainerRef = useRef()
	const modalRef = useRef()
	const [animation, setAnimation] = useState('slide-in')
	const [noBackground, setNoBackground] = useState(true)

	const closeModal = useCallback(() => {
		setTimeout(() => setNoBackground(true), 250)
		setAnimation('slide-out')
	}, [])

	useEffect(() => {
		const bind = e => {
			if (e.keyCode !== 27) return
			if (
				document.activeElement &&
				['INPUT', 'SELECT'].includes(document.activeElement.tagName)
			)
				return
			closeModal()
		}

		document.addEventListener('keyup', bind)
		return () => document.removeEventListener('keyup', bind)
	}, [modal, closeModal])

	useEffect(() => {
		let interval
		if (animation === 'slide-out')
			interval = setInterval(() => unsetModal(), 1500)

		return () => clearInterval(interval)
	}, [animation, unsetModal])

	useEffect(() => {
		let timeout

		if (noBackground) timeout = setTimeout(() => setNoBackground(false), 500)
		return () => clearTimeout(timeout)
	}, [])

	useOutsideClick(modalContainerRef, closeModal)

	return (
		<div
			className={classnames(
				'modal',
				`modal--${noBackground ? 'no-background' : 'background'}`
			)}
			ref={modalRef}
		>
			<div
				className={classnames(
					'modal__container',
					'modal__animation',
					`modal__animation--${animation}`
				)}
				ref={modalContainerRef}
			>
				<Button
					className='button button--rotate button--modal modal__close'
					onClick={closeModal}
					naked={true}
					textAlign='right'
					fullWidth={false}
				>
					<FontAwesomeIcon icon={faPlus} />
				</Button>
				<div className='modal__content'>{modal}</div>
			</div>
		</div>
	)
}

Modal.propTypes = {
	modal: PropTypes.object,
	unsetModal: PropTypes.func,
}

export default Modal
