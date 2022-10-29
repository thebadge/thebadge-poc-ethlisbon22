/* Light Theme           */

const lightGreen = '#62CBA5'
const grayishGreen = '#BBCEC4'
const gray = '#b2b2b2'
const error = '#D03333'
const success = lightGreen
const primary = '#2D64F1'
const primaryLight = '#7491FF'
const primaryDark = '#003BBD'
const secondary = '#252C3C'
const tertiary = '#A6CFD5'
const textColor = '#FFFFFF'
const textColorLight = '#000000'
const textColorDark = primaryDark
const borderColor = 'rgba(250,250,250,0.2)'
const darkGray = 'rgb(10, 25, 50)'
const darkBlue = 'rgb(6, 75, 141)'
const componentBackgroundColor = 'rgba(12, 12, 12, 0.85)'
const darkGreen = '#5BBCAD'

export const lightTheme = {
  body: {
    backgroundImage: 'none',
  },
  card: {
    backgroundColor: gray,
  },
  colors: {
    borderColor: borderColor,
    componentBackgroundColor: componentBackgroundColor,
    danger: error,
    darkBlue: darkBlue,
    darkGray: darkGray,
    error: error,
    gray: gray,
    grayishGreen: grayishGreen,
    lightGreen: lightGreen,
    ok: lightGreen,
    primary: primary,
    primaryDark: primaryDark,
    primaryLight: primaryLight,
    secondary: secondary,
    success: success,
    tertiary: tertiary,
    textColor: textColor,
    textColorDark: textColorDark,
    textColorLight: textColorLight,
  },
  onBoard: {
    backgroundColor: primary,
    color: tertiary,
    borderRadius: '5px',
    borderColor: primaryDark,
    sidebarBackgroundColor: 'rgb(255, 255, 255, 0.08)',
    buttonBackgroundColor: primaryLight,
    buttonBackgroundColorHover: 'rgb(32, 64, 194, 0.12)',
  },
  textField: {
    backgroundColor: 'transparent',
    borderColor: darkGreen,
    color: textColor,
    errorColor: error,
    successColor: success,
    active: {
      backgroundColor: 'transparent',
      borderColor: darkGreen,
      color: textColor,
    },
    placeholder: {
      color: textColor,
    },
  },
}
