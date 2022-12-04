import React from "react"
import { StyledPageDescText } from "./PageDescTextStyled"

const PageDescText = ({ description, fontSize }: { description: string; fontSize: string }) => (
  <StyledPageDescText fontSize={fontSize}>{description}</StyledPageDescText>
)

export default PageDescText
