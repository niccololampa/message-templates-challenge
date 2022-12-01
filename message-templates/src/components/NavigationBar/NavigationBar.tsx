import React from "react"
import { BonjoroLogo } from "../../components"
import { Box, Toolbar, Container } from "@mui/material"
import "./NavigationBar.css"
import { StyledAppBar, StyledLogoContainer } from "./NavigationBarStyled"

const NavigationBar = () => {
  const logoWidth = "186px"
  const logoHeight = "48px"
  const boxPadding = 2

  return (
    <>
      <StyledAppBar position="static" className="app-bar">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Box
              sx={{
                padding: { boxPadding },
                display: { xs: "none", md: "flex" },
              }}
            >
              <BonjoroLogo width={logoWidth} height={logoHeight} />
            </Box>

            <StyledLogoContainer
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <Box
                sx={{
                  padding: { boxPadding },
                }}
              >
                <BonjoroLogo width={logoWidth} height={logoHeight} />
              </Box>
            </StyledLogoContainer>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            ></Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </>
  )
}
export default NavigationBar
