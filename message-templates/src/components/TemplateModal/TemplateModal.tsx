import React from "react"
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
}: {
  visible: boolean
  modalType: ModalTypes
  handleClose: () => void
}) => {
  if (!visible) {
    return <></>
  }

  const handleCreateNew = () => {
    console.log("works")
  }

  const handleRename = () => {
    console.log("works")
  }

  const handleDelete = () => {
    console.log("works")
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
            <TextField label="Template Name" variant="outlined" fullWidth />
          )}
          <ColoredButton
            text="Cancel"
            handleClick={handleClose}
            backColor="#ffffff"
            backColorHover="#ffd000"
          />

          {modalType === "new" && (
            <ColoredButton text="Create new template" handleClick={handleCreateNew} />
          )}

          {modalType === "rename" && <ColoredButton text="Rename" handleClick={handleRename} />}

          {modalType === "delete" && (
            <ColoredButton
              text="Delete"
              handleClick={handleDelete}
              backColor={"#CC3341"}
              backColorHover={"#990131"}
              textColor={"#ffffff"}
            />
          )}
        </Box>
      </Fade>
    </Modal>
  )
}

export default TemplateModal
