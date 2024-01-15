import React from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { MessageTemplateView } from "./views"
import { Box, ThemeProvider, CssBaseline } from "@mui/material"
import { appTheme } from "./themes/theme"
import { NavigationBar } from "./components"

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div>
        <CssBaseline enableColorScheme />
        <BrowserRouter>
          <NavigationBar />
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: appTheme?.sideDrawer?.width,
                height: appTheme?.sideDrawer?.height,
                backgroundColor: appTheme?.sideDrawer?.backColor,
              }}
            ></Box>

            <Box sx={{ flexGrow: 2 }}>
              <Routes>
                <Route path="/message-templates/*" element={<MessageTemplateView />} />
                <Route path="*" element={<Navigate to="/message-templates" replace />} />
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
