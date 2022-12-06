import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Theme {
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
  }

  interface ThemeOptions {
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
  }
}

export const appTheme = createTheme({
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
})
