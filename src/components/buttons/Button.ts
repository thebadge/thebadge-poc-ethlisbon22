import styled, { css } from 'styled-components'

import { ThemeType } from '@/src/constants/types'

export const DisabledButtonCSS = css`
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const ActiveButtonCSS = css`
  &:active {
    opacity: 0.7;
  }
`

export const ButtonCSS = css<{ size?: 'lg' | 'md' }>`
  align-items: center;
  border-radius: 2px;
  border-style: solid;
  border-width: 0;
  column-gap: 8px;
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ size }) => (size === 'lg' ? '1.3rem' : '1.1rem')};
  font-weight: 400;
  height: ${({ size }) => (size === 'lg' ? '28px' : '22px')};
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 0 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease-out;
  user-select: none;
  white-space: nowrap;

  ${ActiveButtonCSS}
`

const BaseButton = styled.button<{ size?: 'lg' | 'md' }>`
  ${ButtonCSS}
`

BaseButton.defaultProps = {
  size: 'md',
}

export const Button = styled(BaseButton)`
  ${DisabledButtonCSS}
`

export const ButtonPrimaryCSS = css`
  background-color: ${({ theme: { buttonPrimary } }) => buttonPrimary.backgroundColor};
  border-color: ${({ theme: { buttonPrimary } }) => buttonPrimary.borderColor};
  color: ${({ theme: { buttonPrimary } }) => buttonPrimary.color};

  &:hover {
    background-color: ${({ theme: { buttonPrimary } }) => buttonPrimary.backgroundColorHover};
    border-color: ${({ theme: { buttonPrimary } }) => buttonPrimary.borderColorHover};
    color: ${({ theme: { buttonPrimary } }) => buttonPrimary.colorHover};
  }

  ${DisabledButtonCSS}

  &[disabled],
  &[disabled]:hover {
    background-color: ${({ theme: { colors } }) => colors.grayishGreen};
    border-color: ${({ theme: { colors } }) => colors.grayishGreen};
    color: ${({ theme: { buttonPrimary } }) => buttonPrimary.color};
  }
`

export const ButtonDangerCSS = css`
  background-color: ${({ theme: { buttonDanger } }) => buttonDanger.backgroundColor};
  border-color: ${({ theme: { buttonDanger } }) => buttonDanger.borderColor};
  color: ${({ theme: { buttonDanger } }) => buttonDanger.color};

  &:hover {
    background-color: ${({ theme: { buttonDanger } }) => buttonDanger.backgroundColorHover};
    border-color: ${({ theme: { buttonDanger } }) => buttonDanger.borderColorHover};
    color: ${({ theme: { buttonDanger } }) => buttonDanger.colorHover};
  }

  ${DisabledButtonCSS}

  &[disabled],
  &[disabled]:hover {
    background-color: ${({ theme: { buttonDanger } }) => buttonDanger.backgroundColor};
    border-color: ${({ theme: { buttonDanger } }) => buttonDanger.borderColor};
    color: ${({ theme: { buttonDanger } }) => buttonDanger.color};
  }
`

export const ButtonDanger = styled(BaseButton)`
  ${ButtonDangerCSS}
`

export const ButtonDropdownIsOpenCSS = css`
  &::after {
    transform: rotate(180deg);
  }
`

export const ButtonDropdownCSS = css<{ currentThemeName?: ThemeType }>`
  background-color: ${({ theme: { buttonDropdown } }) => buttonDropdown.backgroundColor};
  border-color: ${({ theme: { buttonDropdown } }) => buttonDropdown.borderColor};
  color: ${({ theme: { buttonDropdown } }) => buttonDropdown.color};

  &:hover {
    background-color: ${({ theme: { buttonDropdown } }) => buttonDropdown.backgroundColorHover};
    border-color: ${({ theme: { buttonDropdown } }) => buttonDropdown.borderColorHover};
    color: ${({ theme: { buttonDropdown } }) => buttonDropdown.colorHover};
  }

  &::after {
    --dimensions: 8px;

    content: '';

    background-position: 50% 50%;
    background-repeat: no-repeat;
    gap: 10px;
    height: var(--dimensions);
    width: var(--dimensions);

    ${({ currentThemeName }) =>
      currentThemeName === 'dark'
        ? css`
            background-image: url('data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDZMLjUzNiAwaDYuOTI4TDQgNnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=');
          `
        : css`
            background-image: url('data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDZMLjUzNiAwaDYuOTI4TDQgNnoiIGZpbGw9IiM2NjYiLz48L3N2Zz4=');
          `}
  }

  .isOpen & {
    ${ButtonDropdownIsOpenCSS}
  }

  ${DisabledButtonCSS}

  &:active {
    opacity: 1;
  }

  &[disabled],
  &[disabled]:hover {
    background-color: ${({ theme: { buttonDropdown } }) => buttonDropdown.borderColor};
    border-color: ${({ theme: { buttonDropdown } }) => buttonDropdown.borderColor};
    color: ${({ theme: { buttonDropdown } }) => buttonDropdown.color};
  }
`

export const ButtonDropdown = styled(Button)<{ currentThemeName?: ThemeType }>`
  ${ButtonDropdownCSS}
`

export const ButtonTabCSS = css<{ isActive?: boolean }>`
  background-color: ${({ theme: { buttonTab } }) => buttonTab.backgroundColor};
  border-color: ${({ theme: { buttonTab } }) => buttonTab.borderColor};
  border-style: solid;
  border-width: 1px;
  color: ${({ theme: { buttonTab } }) => buttonTab.color};
  font-size: 1.1rem;
  height: 20px;
  line-height: 20px;

  &:hover {
    background-color: ${({ theme: { buttonTab } }) => buttonTab.backgroundColorHover};
    border-color: ${({ theme: { buttonTab } }) => buttonTab.borderColorHover};
    color: ${({ theme: { buttonTab } }) => buttonTab.colorHover};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &,
      &:hover {
        background-color: ${({ theme: { buttonTab } }) => buttonTab.backgroundColorActive};
        border-color: ${({ theme: { buttonTab } }) => buttonTab.borderColorActive};
        color: ${({ theme: { buttonTab } }) => buttonTab.colorActive};
        cursor: default;
        pointer-events: none;
      }
    `}
`

export const ButtonTab = styled(BaseButton)<{ isActive?: boolean }>`
  ${ButtonTabCSS}
`

export const ButtonLinePrimaryCSS = css`
  background-color: ${({ theme: { buttonLinePrimary } }) => buttonLinePrimary.backgroundColor};
  border-color: ${({ theme: { buttonLinePrimary } }) => buttonLinePrimary.borderColor};
  border-style: solid;
  border-width: 1px;
  color: ${({ theme: { buttonLinePrimary } }) => buttonLinePrimary.color};

  &:hover {
    background-color: ${({ theme: { buttonLinePrimary } }) =>
      buttonLinePrimary.backgroundColorHover};
    border-color: ${({ theme: { buttonLinePrimary } }) => buttonLinePrimary.borderColorHover};
    color: ${({ theme: { buttonLinePrimary } }) => buttonLinePrimary.colorHover};
  }

  ${DisabledButtonCSS}

  &[disabled],
  &[disabled]:hover {
    background-color: ${({ theme: { buttonLinePrimary } }) => buttonLinePrimary.backgroundColor};
    border-color: ${({ theme: { buttonLinePrimary } }) => buttonLinePrimary.borderColor};
    color: ${({ theme: { buttonLinePrimary } }) => buttonLinePrimary.color};
  }
`

export const ButtonLinePrimary = styled(BaseButton)`
  ${ButtonLinePrimaryCSS}
`
export const ButtonPrimary = styled(BaseButton)`
  ${ButtonPrimaryCSS}
`
