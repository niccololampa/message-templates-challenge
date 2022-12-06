import React from "react"
import { useTheme } from "@mui/material/styles"
import { StyledButton, StyledButtonText } from "./ColoredButtonStyled"

const ColoredButton = ({
  text,
  handleClick,
  width,
  textColor,
  backColor,
  backColorHover,
  borderColor,
  borderStyle,
  borderwidth,
}: {
  text: string
  handleClick: () => void
  width?: string | number
  textColor?: string
  backColor?: string
  backColorHover?: string
  borderColor?: string
  borderStyle?: string
  borderwidth?: string
}) => {
  const theme = useTheme()

  return (
    <StyledButton
      variant="contained"
      onClick={handleClick}
      width={width}
      textcolor={textColor || theme?.buttons?.coloredDefault?.textColor}
      backcolor={backColor || theme?.buttons?.coloredDefault?.backColor}
      backcolorhover={backColorHover || theme?.buttons?.coloredDefault?.backColorHover}
      bordercolor={borderColor || theme?.buttons?.coloredDefault?.borderColor}
      borderstyle={borderStyle || theme?.buttons?.coloredDefault?.borderStyle}
      borderwidth={borderwidth || theme?.buttons?.coloredDefault?.borderWidth}
    >
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  )
}

export default ColoredButton
