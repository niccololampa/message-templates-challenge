import { Box, Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledTemplateBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "80px",
  width: "auto",
  minWidth: "930px",
  padding: 5,
  boxShadow: "0 0 15px#E4E4E4",
  marginBottom: "20px",
}))

export const StyledImageBox = styled(Box)(() => ({
  width: "10%",
  borderRadius: 1,
  minWidth: "fit-content",
  height: "100%",
  display: "flex",
  alignItems: "center",
}))

export const StyledInfoBox = styled(Box)(() => ({
  width: "23%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
}))

export const StyledDateBox = styled(Box)(() => ({
  width: "12%",
  minWidth: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
}))

export const StyledStatsBox = styled(Box)(() => ({
  width: "45%",
  borderRadius: 1,
  minWidth: "fit-content",
  backgroundColor: "#F2F2F2",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
}))

export const StyledMoreBox = styled(Box)(() => ({
  width: "5%",
  minWidth: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
}))

export const StyledStatStack = styled(Stack)(() => ({
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "10px",
}))

export const StyledInfoStack = styled(Stack)(() => ({
  alignItems: "center",
  width: "100%",
}))

export const StyledStatLabelBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
}))

export const StyledNameText = styled(Typography)(
  ({
    color = "#6c7188",
    fontSize = "17px",
    fontWeight = "bold",
  }: {
    color?: string
    fontSize?: string
    fontWeight?: string
  }) => ({
    fontSize,
    maxWidth: "100%",
    overflow: "hidden",
    fontWeight,
    color,
  }),
)

export const StyledCreatedText = styled(Typography)(
  ({
    color = "#6c7188",
    fontSize = "14px",
    fontWeight = "bold",
  }: {
    color?: string
    fontSize?: string
    fontWeight?: string
  }) => ({
    fontSize,
    maxWidth: "100%",
    fontWeight,
    color,
  }),
)

export const StyledInfoText = styled(Typography)(
  ({
    color = "#aeb0be",
    fontSize = "12px",
    fontWeight = "normal",
  }: {
    color?: string
    fontSize?: string
    fontWeight?: string
  }) => ({
    fontSize,
    fontWeight,
    color,
  }),
)

export const StyledStatsLabelText = styled(Typography)(
  ({
    color = "#6c7188",
    fontSize = "12px",
    fontWeight = "normal",
  }: {
    color?: string
    fontSize?: string
    fontWeight?: string
  }) => ({
    fontSize,
    fontWeight,
    color,
  }),
)

export const StyledStatsText = styled(Typography)(
  ({
    color = "#000000",
    fontSize = "18px",
    fontWeight = "bold",
  }: {
    color?: string
    fontSize?: string
    fontWeight?: string
  }) => ({
    fontSize,
    fontWeight,
    color,
  }),
)
