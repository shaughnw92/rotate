import { useCallback, useEffect, useRef, useState } from 'react'
import Modal from '../components/Modal'
import ModalContext from '../context/ModalContext'
import useOutsideClick from '../hooks/useOutsideClick'
import isObjectEmpty from '../utils/isObjectEmpty'

const ModalProvider = props => {
	const { children } = props
	const outsideClickRef = useRef()
	const [modal, setModal] = useState()
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const unsetModal = useCallback(() => setModal(), [setModal])
	useOutsideClick(outsideClickRef, () => unsetModal())

	useEffect(() => {
		if (!isObjectEmpty(modal)) return setModalIsOpen(true)
		setModalIsOpen(false)
	}, [modal])

	return (
		<ModalContext.Provider
			ref={outsideClickRef}
			value={{ modalIsOpen, unsetModal, setModal }}
			{...props}
		>
			{modal && <Modal modal={modal} unsetModal={unsetModal} />}
			{children}
		</ModalContext.Provider>
	)
}

export default ModalProvider
