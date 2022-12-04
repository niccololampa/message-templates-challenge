import * as React from "react"
import { StyledTypography } from "./ModalHeaderStyled"

const ModalHeader = ({ title }: { title: string }) => {
  return <StyledTypography variant="h2">{title}</StyledTypography>
}

export default ModalHeader
