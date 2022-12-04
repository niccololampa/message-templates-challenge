import { styled } from "@mui/material/styles"
import { Button, Typography } from "@mui/material/"

export const StyledButton = styled(Button)(
  ({
    width,
    backcolor = "#ffd000",
    backcolorhover = "#ffe367",
    textcolor = "#000000",
    bordercolor = "initial",
    borderstyle = "none",
    borderwidth = "initial",
  }: {
    width?: string | number
    textcolor?: string
    backcolor?: string
    backcolorhover?: string
    bordercolor?: string
    borderstyle?: string
    borderwidth?: string
  }) => ({
    backgroundColor: backcolor,
    "&:hover": {
      backgroundColor: backcolorhover,
    },
    color: textcolor,
    borderColor: bordercolor,
    borderStyle: borderstyle,
    borderWidth: borderwidth,
    width: width ? width : "100%",
    minWidth: "fit-content",
    height: "40px",
    fontWeight: "bold",
    fontSize: "16px",
    borderRadius: "0",
    textTransform: "none",
  }),
)

export const StyledButtonText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
})
