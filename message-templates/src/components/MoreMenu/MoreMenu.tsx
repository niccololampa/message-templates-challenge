import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { Box, SvgIcon } from "@mui/material"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { ModalTypes, MenuItemSpec } from "../../types"

const MoreMenu = ({
  menuItemSpecs,
  handleOpenModal,
}: {
  menuItemSpecs: MenuItemSpec[]
  handleOpenModal: ({ modalType }: { modalType: ModalTypes }) => void
}) => {
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="More">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              ml: 2,
              backgroundColor: open ? theme?.buttons?.coloredDefault?.backColorHover : "",
              "&:hover": {
                backgroundColor: theme?.buttons?.coloredDefault?.backColorHover,
              },
            }}
          >
            <MoreHorizIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: "''",
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuItemSpecs.map((item: MenuItemSpec) => (
          <MenuItem
            key={item.name}
            onClick={() => handleOpenModal({ modalType: item.name.toLowerCase() as ModalTypes })}
            sx={{
              "&:hover": {
                backgroundColor: item.hoverColor,
              },
            }}
          >
            <SvgIcon
              component={item.icon}
              sx={{
                color: item.color,
                fontSize: theme?.templateCard?.svgIcons?.moreIcons?.fontSize,
              }}
            />

            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default MoreMenu
