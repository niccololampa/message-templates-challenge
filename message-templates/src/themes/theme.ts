import { createTheme } from "@mui/material/styles"

// Update main theme colors here. For more specific customization update appTheme variables.
const colors = {
  focusPrimary: "#ffd000",
  focusHover: "#ffe367",
  neutralPrimary: "#ffffff",
  negPrimary: "#cc3341",
  negHover: "#990131",
  textPrimary: "#000000",
  textSecondary: "#aeb0be",
  labelTextPrimary: "#6c7188",
}

export const appTheme = createTheme({
  typography: {
    fontFamily: "CircularStd, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'CircularStd';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('CircularStd'), local('CircularStd-Black'), url("../fonts/CircularStd-Black.ttf") format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  navigationBar: {
    logo: {
      width: "70%",
      height: "70%",
    },
    boxPadding: 2,
    backColor: "#2e2e36",
  },
  buttons: {
    coloredDefault: {
      backColor: colors.focusPrimary,
      backColorHover: colors.focusHover,
      textColor: colors.textPrimary,
      borderColor: "initial",
      borderStyle: "none",
      borderWidth: "iniital",
    },
    cancel: {
      backColor: colors.neutralPrimary,
      backColorHover: colors.focusPrimary,
    },
    delete: {
      backColor: colors.negPrimary,
      backColorHover: colors.negHover,
      textColor: colors.neutralPrimary,
    },
  },
  sideDrawer: {
    width: "15%",
    height: "100vh",
    backColor: "#f5f7ff",
  },

  pageDescText: {
    fontSize: "17px",
  },
  templateCard: {
    svgIcons: {
      statIcons: {
        fontSize: "15px",
      },
      moreIcons: {
        fontSize: "25px",
      },
    },
    infoStack: {
      margin: 1,
    },
    text: {
      nameText: {
        color: colors.labelTextPrimary,
        fontSize: "17px",
        fontWeight: "bold",
        hoverColor: colors.textPrimary,
      },
      createdText: {
        color: colors.labelTextPrimary,
        fontSize: "14px",
        fontWeight: "bold",
      },
      infoText: {
        color: colors.textSecondary,
        fontSize: "12px",
      },
      labelText: {
        color: colors.labelTextPrimary,
        fontSize: "12px",
      },
      statsText: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    thumbnail: {
      borderHoverColor: colors.focusPrimary,
      borderType: "solid",
      borderWidth: "2px",
    },
  },
})

declare module "@mui/material/styles" {
  interface Theme {
    navigationBar?: {
      logo?: {
        width?: number | string
        height?: number | string
      }
      boxPadding?: number | string
      backColor: string
    }
    buttons?: {
      coloredDefault?: ButtonType
      cancel?: ButtonType
      delete?: ButtonType
    }
    sideDrawer?: {
      width?: string | number
      height?: string | number
      backColor?: string
    }
    pageDescText?: TextType
    templateCard?: {
      svgIcons?: {
        statIcons?: {
          fontSize?: string | number
        }
        moreIcons?: {
          fontSize?: string | number
        }
      }
      infoStack?: StackSpec
      statStack?: StackSpec
      text?: {
        nameText?: TextType & { hoverColor?: string }
        createdText?: TextType
        infoText?: TextType
        labelText?: TextType
        statsText?: TextType
      }
      thumbnail?: {
        borderHoverColor?: string
        borderType?: string
        borderWidth?: string | number
      }
    }
  }

  interface ThemeOptions {
    navigationBar?: {
      logo?: {
        width?: number | string
        height?: number | string
      }
      boxPadding?: number | string
      backColor: string
    }
    buttons?: {
      coloredDefault?: ButtonType
      cancel?: ButtonType
      delete?: ButtonType
    }
    sideDrawer?: {
      width?: string | number
      height?: string | number
      backColor?: string
    }
    pageDescText?: TextType
    templateCard?: {
      svgIcons?: {
        statIcons?: {
          fontSize?: string | number
        }
        moreIcons?: {
          fontSize?: string | number
        }
      }
      infoStack?: StackSpec
      statStack?: StackSpec
      text?: {
        nameText?: TextType & { hoverColor?: string }
        createdText?: TextType
        infoText?: TextType
        labelText?: TextType
        statsText?: TextType
      }
      thumbnail?: {
        borderHoverColor?: string
        borderType?: string
        borderWidth?: string | number
      }
    }
  }

  interface ButtonType {
    backColor?: string
    backColorHover?: string
    textColor?: string
    borderColor?: string
    borderStyle?: string
    borderWidth?: string
  }

  interface TextType {
    color?: string
    fontSize?: string
    fontWeight?: string
  }

  interface StackSpec {
    margin?: string | number
    spacing?: string | number
  }
}
