/* Properties common to any themes                     */
import { defaultTheme as theBadgeTheme } from 'thebadge-ui-library'

export const commonTheme = {
  layout: {
    horizontalPaddingDesktopStart: '20px',
    horizontalPaddingDesktopWideStart: '20px',
    horizontalPaddingMobile: '10px',
    horizontalPaddingTabletLandscapeStart: '15px',
    horizontalPaddingTabletPortraitStart: '15px',
    maxWidth: '790px',
  },
  ...theBadgeTheme,
}
