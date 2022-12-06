import React, { useState } from "react"
import { useTheme } from "@mui/material/styles"
import { ModalStyle } from "./TemplateModalStyled"
import { Backdrop, Box, Modal, Fade, TextField } from "@mui/material"
import { ColoredButton, ModalHeader } from "../../components"
import { ModalTypes } from "../../types"

const titleText = {
  new: "Create new template for me",
  rename: "Rename this template",
  delete: "Do you want to delete this template?",
}

const TemplateModal = ({
  visible,
  modalType,
  handleClose,
  handleNew,
  handleDelete,
  handleRename,
}: {
  visible: boolean
  modalType: ModalTypes
  handleClose: () => void
  handleNew: (name: string) => void
  handleDelete: () => void
  handleRename: (name: string) => void
}) => {
  if (!visible) {
    return <></>
  }

  const theme = useTheme()

  const [modalInput, setModalInput] = useState<string>("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalInput(event.target.value)
  }

  return (
    <Modal
      open={visible}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={visible}>
        <Box sx={ModalStyle}>
          <ModalHeader title={modalType ? titleText[modalType] : ""}></ModalHeader>
          {(modalType === "new" || modalType === "rename") && (
            <TextField
              label="Template Name"
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
              sx={{ marginBottom: "20px" }}
            />
          )}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <ColoredButton
              text="Cancel"
              width="fit-content"
              handleClick={handleClose}
              backColor={theme?.buttons?.cancel?.backColor}
              backColorHover={theme?.buttons?.cancel?.backColorHover}
              margin="0 10px 0 0"
            />

            {modalType === "new" && (
              <ColoredButton
                text="Create new template"
                width="fit-content"
                handleClick={() => handleNew(modalInput)}
              />
            )}

            {modalType === "rename" && (
              <ColoredButton
                text="Rename"
                width="fit-content"
                handleClick={() => handleRename(modalInput)}
              />
            )}

            {modalType === "delete" && (
              <ColoredButton
                text="Delete"
                width="fit-content"
                handleClick={handleDelete}
                backColor={theme?.buttons?.delete?.backColor}
                backColorHover={theme?.buttons?.delete?.backColorHover}
                textColor={theme?.buttons?.delete?.textColor}
              />
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default TemplateModal
