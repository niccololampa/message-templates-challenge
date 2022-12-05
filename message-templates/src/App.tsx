import React from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { MessageTemplateView } from "./views"
import { Box } from "@mui/material"
import { NavigationBar } from "./components"
import "./App.css"

function App() {
  return (
    <div className="App">
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
  )
}

export default App
