import { Box, Stack, Typography, IconButton } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledTemplateBox = styled(Box)(() => ({
  border: 2,
  backgroundColor: "gray",
  // boxShadow: "3px",
  borderColor: "yellow",
  display: "flex",
  alignItems: "center",
  height: "80px",
  width: "auto",
  padding: 5,
}))

export const StyledImageBox = styled(Box)(() => ({
  // width: "20%",
  height: "100%",
  borderRadius: "10%",
}))

export const StyledInfoText = styled(Box)(() => ({
  fontSize: "12px",
  fontWeight: "bold",
}))

export const StyledStatsBox = styled(Box)(() => ({
  borderRadius: 1,
  backgroundColor: "#F2F2F2",
  display: "flex",
  alignItems: "left",
  width: "auto",
  padding: "10px",
}))

export const StyledStatsLabelText = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: "bold",
}))

export const StyledStatsText = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: "bold",
}))

export const StyledSectionText = styled(Typography)(() => ({
  maxWidth: "100%",
}))

export const StyledProfileStack = styled(Stack)(() => ({
  alignItems: "center",
}))

export const StyledInfoStack = styled(Stack)(() => ({
  width: "100%",
  justifyContent: "center",
}))

export const StyledMoreIconButton = styled(IconButton)(() => ({
  "&:hover": {
    backgroundColor: "#ffe367",
  },
}))
