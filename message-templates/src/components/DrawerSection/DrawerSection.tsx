import React from "react"
import { StyledDrawerSection } from "./DrawerSectionStyled"

const DrawerSection = ({ width }: { width?: string | number }) => {
  return <StyledDrawerSection variant="permanent" width={width} />
}

export default DrawerSection
