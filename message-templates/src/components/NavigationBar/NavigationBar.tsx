import React from "react"
import { BonjoroLogo } from "../../components"
import { useTheme } from "@mui/material/styles"
import { Box, Toolbar, Container } from "@mui/material"
import { StyledAppBar } from "./NavigationBarStyled"

const NavigationBar = () => {
  const theme = useTheme()

  return (
    <>
      <StyledAppBar position="static" backcolor={theme?.navigationBar?.backColor}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
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
          </Toolbar>
        </Container>
      </StyledAppBar>
    </>
  )
}
export default NavigationBar
