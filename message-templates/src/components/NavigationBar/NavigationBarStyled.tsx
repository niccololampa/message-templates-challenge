import { styled } from "@mui/material/styles"
import { AppBar } from "@mui/material"

export const StyledAppBar = styled(AppBar)(({ backcolor }: { backcolor?: string }) => ({
  backgroundColor: backcolor,
  minWidth: "1000px",
  boxShadow: "none",
}))
