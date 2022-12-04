import React from "react"
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
  return (
    <StyledButton
      variant="contained"
      onClick={handleClick}
      width={width}
      textcolor={textColor}
      backcolor={backColor}
      backcolorhover={backColorHover}
      bordercolor={borderColor}
      borderstyle={borderStyle}
      borderwidth={borderwidth}
    >
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  )
}

export default ColoredButton
