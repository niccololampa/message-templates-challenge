import React from "react"
import { BonjoroLogo } from "../../components"
import { useTheme } from "@mui/material/styles"
import { Box, Toolbar, Container } from "@mui/material"
import { StyledAppBar, StyledLogoContainer } from "./NavigationBarStyled"

const NavigationBar = () => {
  const theme = useTheme()

  return (
    <>
      <StyledAppBar position="static">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Box
              sx={{
                padding: theme?.navigationBar?.boxPadding,
                display: { xs: "none", md: "flex" },
              }}
            >
              <BonjoroLogo
                width={theme?.navigationBar?.logo?.width}
                height={theme?.navigationBar?.logo?.height}
              />
            </Box>

            <StyledLogoContainer
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <Box
                sx={{
                  padding: theme?.navigationBar?.boxPadding,
                }}
              >
                <BonjoroLogo
                  width={theme?.navigationBar?.logo?.width}
                  height={theme?.navigationBar?.logo?.height}
                />
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
