/* Light Theme           */

const lightGreen = '#14C267'
const lighterGreen = '#00FF7A'
const darkGreen = '#09271F'
const darkerGreen = '#011B14'
const darkererGreen = '#00140E'
const darkerGreenHover = '#011f17'
const darkestGreen = '#001F17'
const grayishGreen = '#BBCEC4'
const gray = '#707070'
const error = '#D03333'
const success = lightGreen
const primary = '#FFE2AE'
const primaryDark = '#A29237'
const primaryDarker = '#A09246'
const secondary = '#E56399'
const tertiary = '#A6CFD5'
const textColor = primary
const textColorLight = '#9D9460'
const textColorDark = primaryDark
const borderColor = 'rgba(250,250,250,0.2)'
const darkGray = 'rgb(10, 25, 50)'
const darkBlue = 'rgb(6, 75, 141)'
const componentBackgroundColor = 'rgba(13, 2, 2, 0.85)'

export const lightTheme = {
  body: {
    backgroundImage: 'none',
  },
  card: {
    borderColor: 'transparent',
  },
  colors: {
    borderColor: borderColor,
    componentBackgroundColor: componentBackgroundColor,
    danger: error,
    darkBlue: darkBlue,
    darkGray: darkGray,
    darkGreen: darkGreen,
    darkerGreen: darkerGreen,
    darkerGreenHover: darkerGreenHover,
    darkererGreen: darkererGreen,
    darkestGreen: darkestGreen,
    error: error,
    gray: gray,
    grayishGreen: grayishGreen,
    lightGreen: lightGreen,
    lighterGreen: lighterGreen,
    ok: lightGreen,
    primary: primary,
    primaryDark: primaryDark,
    primaryDarker: primaryDarker,
    secondary: secondary,
    success: success,
    tertiary: tertiary,
    textColor: textColor,
    textColorDark: textColorDark,
    textColorLight: textColorLight,
  },
}
