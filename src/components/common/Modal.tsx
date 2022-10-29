import { HTMLAttributes } from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'

import { Close as BaseClose } from '@/src/components/assets/Close'
import { BaseCard } from '@/src/components/common/BaseCard'

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.modal.overlayColor};
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  overflow: auto;
`

const Card = styled(BaseCard)<{ size?: modalSize }>`
  border: none;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 100%;
  padding: 15px 20px 22px;
  position: relative;
  width: ${({ size }) =>
    size === 'sm' ? '290px' : size === 'md' ? '500px' : size === 'lg' ? '685px' : `${size}`};
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 15px;
  text-align: left;
  width: 100%;
`

const Close = styled(BaseClose)`
  cursor: pointer;
  position: absolute;
  right: 13px;
  top: 14px;
  z-index: 10;

  &:active {
    opacity: 0.7;
  }
`

const Contents = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const ModalTextCSS = css`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 25px;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ModalText = styled.p`
  ${ModalTextCSS}
`

export const ModalSubtitleCSS = css`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 15px;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ModalSubtitle = styled.h2`
  ${ModalSubtitleCSS}
`

export const ModalLine = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: 1px;
  margin: 0 auto 20px;
  width: 180px;
`

export type modalSize = 'sm' | 'md' | 'lg' | string

interface Props extends HTMLAttributes<HTMLDivElement> {
  closeOnBackgroundClick?: boolean
  onClose?: () => void
  size?: modalSize
  title?: string
}

export const Modal: React.FC<Props> = ({
  children,
  closeOnBackgroundClick = true,
  onClose,
  size = 'sm',
  title,
  ...restProps
}: Props) => {
  const portal = document.getElementById('modals') as HTMLElement
  const validOnClose = onClose && typeof onClose === 'function'

  const close = () => {
    if (validOnClose) {
      onClose()
    }
  }

  return (
    portal &&
    ReactDOM.createPortal(
      <Wrapper
        className="modal"
        onClick={closeOnBackgroundClick ? close : undefined}
        {...restProps}
      >
        <Card
          className="modalCard"
          onClick={(e) => {
            e.stopPropagation()
          }}
          size={size}
        >
          {title && <Title>{title}</Title>}
          <Close onClick={close} />
          <Contents>{children}</Contents>
        </Card>
      </Wrapper>,
      portal,
    )
  )
}
