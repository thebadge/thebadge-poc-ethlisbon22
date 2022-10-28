import { css } from 'styled-components'

export const onBoardCSS = css`
  :root {
    // font families
    --onboard-font-family-normal: ${({ theme }) => theme.typography.fontFamily};
    --onboard-font-family-semibold: ${({ theme }) => theme.typography.fontFamily};
    --onboard-font-family-light: ${({ theme }) => theme.typography.fontFamily};
    --account-select-modal-font-family-normal: ${({ theme }) => theme.typography.fontFamily};
    --account-select-modal-font-family-light: ${({ theme }) => theme.typography.fontFamily};

    // font sizes
    --font-size-xl: 1.6rem;
    --font-size-lg: 1.4rem;
    --font-size-md: 1.2rem;

    --onboard-font-size-3: var(--font-size-xl);
    --onboard-font-size-5: var(--font-size-xl);
    --account-select-modal-font-size-5: var(--font-size-xl);
    --onboard-font-size-6: var(--font-size-lg);
    --account-select-modal-font-size-7: var(--font-size-md);
    --account-select-modal-font-line-height-1: 1.4;

    // modal overlay
    --onboard-modal-backdrop: ${({ theme: { modal } }) => modal.overlayColor};

    // modal main
    --onboard-modal-border-radius: ${({ theme: { onBoard } }) => onBoard.borderRadius};
    --onboard-connect-sidebar-background: ${({ theme: { onBoard } }) =>
      onBoard.sidebarBackgroundColor};
    --onboard-main-scroll-container-background: ${({ theme: { onBoard } }) =>
      onBoard.backgroundColor};
    --onboard-connect-sidebar-color: ${({ theme: { onBoard } }) => onBoard.color};

    // modal header
    --onboard-connect-header-background: transparent;
    --onboard-connect-header-color: ${({ theme: { onBoard } }) => onBoard.color};
    --onboard-close-button-background: ${({ theme: { onBoard } }) => onBoard.color};

    // buttons
    --onboard-wallet-button-border-radius: 4px;
    --onboard-wallet-button-background: ${({ theme: { onBoard } }) =>
      onBoard.buttonBackgroundColor};
    --onboard-wallet-button-background-hover: ${({ theme: { onBoard } }) =>
      onBoard.buttonBackgroundColorHover};
    --onboard-wallet-button-border-color: ${({ theme: { onBoard } }) => onBoard.borderColor};
    --onboard-wallet-button-color: ${({ theme: { onBoard } }) => onBoard.color};
    --onboard-wallet-button-color-hover: ${({ theme: { onBoard } }) => onBoard.color};
    --onboard-wallet-app-icon-border-color: ${({ theme: { onBoard } }) => onBoard.borderColor};
  }
`
