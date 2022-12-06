import { styled } from "@mui/material/styles"
import { AppBar, Container } from "@mui/material"

export const StyledAppBar = styled(AppBar)(({ backcolor }: { backcolor?: string }) => ({
  backgroundColor: backcolor,
  boxShadow: "none",
}))

export const StyledLogoContainer = styled(Container)({
  flexGrow: 1,
  justifyContent: "center",
})
