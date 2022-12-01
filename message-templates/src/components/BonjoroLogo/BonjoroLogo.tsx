import React from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import bonjoroLogo from "../../bonjoro-logo.png"

const BonjoroLogo = ({ width, height }: { width: string | number; height: string | number }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Box
      component="img"
      alt="Bonjoro Logo"
      src={bonjoroLogo}
      width={width}
      height={height}
      onClick={handleClick}
      sx={{ cursor: "pointer" }}
    />
  )
}

export default BonjoroLogo
