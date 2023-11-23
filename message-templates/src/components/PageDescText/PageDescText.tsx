import React from "react"
import { StyledPageDescText } from "./PageDescTextStyled"

const PageDescText = ({
  description,
  fontSize = "12px",
}: {
  description: string
  fontSize?: string | number
}) => <StyledPageDescText fontSize={fontSize}>{description}</StyledPageDescText>

export default PageDescText
