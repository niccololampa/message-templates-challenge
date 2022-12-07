import { createTheme } from "@mui/material/styles"

export const appTheme = createTheme({
  navigationBar: {
    logo: {
      width: "186px",
      height: "48px",
    },
    boxPadding: 2,
    backColor: "#2e2e36",
  },
  buttons: {
    coloredDefault: {
      backColor: "#ffd000",
      backColorHover: "#ffe367",
      textColor: "#000000",
      borderColor: "initial",
      borderStyle: "none",
      borderWidth: "iniital",
    },
    cancel: {
      backColor: "#ffffff",
      backColorHover: "#ffd000",
    },
    delete: {
      backColor: "#cc3341",
      backColorHover: "#990131",
      textColor: "#ffffff",
    },
  },
  sideDrawer: {
    width: "15%",
    height: "100vh",
    backColor: "#f5f7ff",
  },

  pageDescText: {
    fontSize: "15px",
  },
  templateCard: {
    svgIcons: {
      statIcons: {
        fontSize: "15px",
      },
      moreIcons: {
        fontSize: "20px",
      },
    },
    infoStack: {
      margin: 1,
    },
    statStack: {
      // spacing: 2,
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
      coloredDefault?: {
        backColor?: string
        backColorHover?: string
        textColor?: string
        borderColor?: string
        borderStyle?: string
        borderWidth?: string
      }
      cancel?: {
        backColor?: string
        backColorHover?: string
        textColor?: string
        borderColor?: string
        borderStyle?: string
        borderWidth?: string
      }
      delete?: {
        backColor?: string
        backColorHover?: string
        textColor?: string
        borderColor?: string
        borderStyle?: string
        borderWidth?: string
      }
    }
    sideDrawer?: {
      width?: string | number
      height?: string | number
      backColor?: string
    }
    pageDescText?: {
      fontSize?: string | number
    }
    templateCard?: {
      svgIcons?: {
        statIcons?: {
          fontSize?: string | number
        }
        moreIcons?: {
          fontSize?: string | number
        }
      }
      infoStack?: {
        margin?: string | number
        spacing?: string | number
      }
      statStack?: {
        margin?: string | number
        spacing?: string | number
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
      coloredDefault?: {
        backColor?: string
        backColorHover?: string
        textColor?: string
        borderColor?: string
        borderStyle?: string
        borderWidth?: string
      }
      cancel?: {
        backColor?: string
        backColorHover?: string
        textColor?: string
        borderColor?: string
        borderStyle?: string
        borderWidth?: string
      }
      delete?: {
        backColor?: string
        backColorHover?: string
        textColor?: string
        borderColor?: string
        borderStyle?: string
        borderWidth?: string
      }
    }
    sideDrawer?: {
      width?: string | number
      height?: string | number
      backColor?: string
    }
    pageDescText?: {
      fontSize?: string | number
    }
    templateCard?: {
      svgIcons?: {
        statIcons?: {
          fontSize?: string | number
        }
        moreIcons?: {
          fontSize?: string | number
        }
      }
      infoStack?: {
        margin?: string | number
        spacing?: string | number
      }
      statStack?: {
        margin?: string | number
        spacing?: string | number
      }
    }
  }
}
