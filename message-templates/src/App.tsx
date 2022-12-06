import React from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { MessageTemplateView } from "./views"
import { Box, ThemeProvider, CssBaseline } from "@mui/material"
import { appTheme } from "./themes/theme"
import { NavigationBar } from "./components"
import "./App.css"

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <CssBaseline enableColorScheme />
        <BrowserRouter>
          <NavigationBar />
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "15%",
                height: "100vh",
                backgroundColor: "#F5F7FF",
              }}
            ></Box>

            <Box>
              <Routes>
                <Route path="/message-template/*" element={<MessageTemplateView />} />
                <Route path="*" element={<Navigate to="/message-template" replace />} />
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
