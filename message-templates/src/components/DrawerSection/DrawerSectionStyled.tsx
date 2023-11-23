import { styled } from "@mui/material/styles"
import { Drawer } from "@mui/material"

export const StyledDrawerSection = styled(Drawer)(
  ({ width = 240 }: { width?: string | number }) => ({
    width,
    flexShrink: 0,
    ["& .MuiDrawer-paper"]: { width, boxSizing: "border-box" },
  }),
)
