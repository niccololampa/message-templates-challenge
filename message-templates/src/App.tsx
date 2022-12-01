import React from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { MessageTemplate } from "./views"
import { NavigationBar } from "./components"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/message-template/*" element={<MessageTemplate />} />
          <Route path="*" element={<Navigate to="/message-template" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
