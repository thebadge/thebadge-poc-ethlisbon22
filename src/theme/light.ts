/* Light Theme           */
import { darken } from 'polished'

const lightGreen = '#14C267'
const lighterGreen = '#00FF7A'
const darkGreen = '#5BBCAD'
const darkerGreen = '#011B14'
const darkererGreen = '#00140E'
const darkerGreenHover = '#011f17'
const darkestGreen = '#001F17'
const grayishGreen = '#BBCEC4'
const gray = '#707070'
const error = '#EF9A9A'
const success = lightGreen
const primary = '#FFE2AE'
const primaryDark = '#A29237'
const primaryDarker = '#A09246'
const secondary = '#E56399'
const tertiary = '#A6CFD5'
const textColor = '#FFF' //Text colot should be white as default, bc we have a very colorfull bg
const textColorLight = '#9D9460'
const textColorDark = primaryDark
const borderColor = 'rgba(250,250,250,0.2)'
const darkGray = 'rgb(10, 25, 50)'
const darkGrayDarkened = darken(0.1, 'rgb(10, 25, 50)')
const lightBlue = '#59BCF7'
const darkBlue = 'rgb(6, 75, 141)'
const componentBackgroundColor = 'rgba(13, 2, 2, 0.85)'

export const lightTheme = {
  body: {
    backgroundColor: darkGreen,
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
    lightBlue: lightBlue,
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
  onBoard: {
    backgroundColor: darkestGreen,
    color: primary,
    borderRadius: '5px',
    borderColor: primaryDarker,
    sidebarBackgroundColor: 'rgb(255, 255, 255, 0.08)',
    buttonBackgroundColor: '#143129',
    buttonBackgroundColorHover: 'rgb(255, 255, 255, 0.12)',
  },
  dropdown: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderColor: 'transparent',
    boxShadow: 'none',
    item: {
      backgroundColor: 'transparent',
      backgroundColorHover: '#fff',
      borderColor: 'rgba(112, 112, 112, 0.5)',
      color: darkestGreen,
      colorDanger: error,
      colorHover: lightGreen,
      colorOK: success,
    },
  },
  header: {
    backgroundColor: darkerGreen,
    color: textColor,
  },
  modal: {
    overlayColor: 'rgba(0, 0, 0, 0.5)',
  },
  mobileMenu: {
    color: textColor,
    backgroundColor: '#000',
    borderColor: borderColor,
  },
  buttonDropdown: {
    backgroundColor: darkGray,
    backgroundColorHover: darkGrayDarkened,
    borderColor: borderColor,
    borderColorHover: borderColor,
    color: textColor,
    colorHover: textColor,
  },
  buttonDanger: {
    backgroundColor: error,
    backgroundColorHover: '#dd4e4e',
    borderColor: error,
    borderColorHover: '#dd4e4e',
    color: '#fff',
    colorHover: '#fff',
  },
  buttonPrimary: {
    backgroundColor: lightGreen,
    backgroundColorHover: lighterGreen,
    borderColor: lightGreen,
    borderColorHover: lighterGreen,
    color: darkestGreen,
    colorHover: darkestGreen,
  },
  buttonLinePrimary: {
    backgroundColor: 'transparent',
    backgroundColorHover: 'transparent',
    borderColor: primary,
    borderColorHover: primaryDark,
    color: primary,
    colorHover: primaryDark,
  },
  buttonTab: {
    backgroundColor: 'transparent',
    backgroundColorHover: lightGreen,
    backgroundColorActive: lightGreen,
    borderColor: lightGreen,
    borderColorHover: lightGreen,
    borderColorActive: lightGreen,
    color: lightGreen,
    colorHover: darkestGreen,
    colorActive: darkestGreen,
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
