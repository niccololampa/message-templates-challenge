import React, { useState } from "react"
import { ModalTypes } from "../../types"
import {
  PageHeader1,
  ColoredButton,
  PageDescText,
  TemplateCard,
  TemplateModal,
} from "../../components"
import { Container } from "@mui/material"

const sampleData = [
  {
    id: "1",
    thumbnail: "/template-image.png",
    name: "Semptember greet template",
    createdBy: "Matt",
    date: "02/08/2022",
    sent: 23,
    opened: 0.5,
    viewed: 0.22,
    liked: 0.4,
    clicked: 0.1,
    replied: 0.05,
  },
]

const MessageTemplate = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalType, setModalType] = useState<ModalTypes>("")
  const pageDesc =
    "Customize how your videos look in the recepient's inbox, add personalization, add your own branding and call-to-actions to your video landing pages"
  const handleNewTemplate = () => {
    setModalType("new")
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
    setModalType("")
  }

  const handleOpenModal = (modalType: ModalTypes) => {
    setModalType(modalType)
    setModalVisible(true)
  }

  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: "80px" }}>
        <PageHeader1 title={"Message templates"} />
        <ColoredButton
          text="Create New Template"
          width="fit-content"
          handleClick={handleNewTemplate}
        />
        <PageDescText description={pageDesc} fontSize="12" />
        {sampleData.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            handleOpenModal={(modalType: ModalTypes) => {
              handleOpenModal(modalType)
            }}
          ></TemplateCard>
        ))}

        <TemplateModal
          visible={modalVisible}
          modalType={modalType}
          handleClose={handleCloseModal}
        />
      </Container>
    </div>
  )
}

export default MessageTemplate
