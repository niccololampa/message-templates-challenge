import React from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import sampleLogo from "../../sample-logo.png"

const CompanyLogo = ({ width, height }: { width?: string | number; height?: string | number }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Box
      component="img"
      alt="Company Logo"
      src={sampleLogo}
      width={width}
      height={height}
      onClick={handleClick}
      sx={{ cursor: "pointer" }}
    />
  )
}

export default CompanyLogo
