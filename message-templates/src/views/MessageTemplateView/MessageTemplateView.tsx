import React, { useState } from "react"
import { useTheme } from "@mui/material/styles"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"
import { ModalTypes, MessageTemplate } from "../../types"
import jsonData from "../../sample-data.json"
import {
  PageHeader1,
  ColoredButton,
  PageDescText,
  TemplateCard,
  TemplateModal,
} from "../../components"
import { Container, Box } from "@mui/material"

const data: MessageTemplate[] = jsonData as MessageTemplate[]

const MessageTemplateView = () => {
  const theme = useTheme()
  const [sampleData, setSampleData] = useState<MessageTemplate[]>(data)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [idModal, setIdModal] = useState("")
  const [modalType, setModalType] = useState<ModalTypes>("")
  const pageDesc =
    "Customize how your videos look in the recepient's inbox, add personalization, add your own branding and call-to-actions to your video landing pages"
  const handleNewTemplateClick = () => {
    setModalType("new")
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
    setModalType("")
    setIdModal("")
  }

  const handleOpenModal = ({ modalType, id }: { modalType: ModalTypes; id?: string }) => {
    setModalType(modalType)
    setModalVisible(true)
    if (id) {
      setIdModal(id)
    }
  }

  const handleNew = (name: string) => {
    const updatedData: MessageTemplate[] = [...sampleData]

    const newTemplate: MessageTemplate = {
      id: uuidv4(),
      thumbnail: `${process.env.REACT_APP_BASE_URL}/template-image.png`,
      name,
      createdBy: "albert",
      date: moment().format("MM/DD/YYYY"),
      sent: 0,
      opened: 0,
      viewed: 0,
      liked: 0,
      clicked: 0,
      replied: 0,
    }

    updatedData.unshift(newTemplate)

    setSampleData(updatedData)
    handleCloseModal()
  }

  const handleRename = (name: string) => {
    const index: number = sampleData.findIndex(
      (template: MessageTemplate) => template.id === idModal,
    )

    const updatedData = [...sampleData]

    updatedData[index].name = name
    setSampleData(updatedData)
    handleCloseModal()
  }

  const handleDelete = () => {
    setSampleData(sampleData.filter((template: MessageTemplate) => template.id !== idModal))
    handleCloseModal()
  }

  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: "30px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: "row",
            marginBottom: "20px",
          }}
        >
          <PageHeader1 title={"Message templates"} />
          <ColoredButton
            text="Create New Template"
            width="fit-content"
            handleClick={handleNewTemplateClick}
          />
        </Box>
        <PageDescText description={pageDesc} fontSize={theme?.pageDescText?.fontSize} />
        {sampleData.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            handleOpenModal={({ modalType, id }: { modalType: ModalTypes; id?: string }) => {
              handleOpenModal({ modalType, id })
            }}
          ></TemplateCard>
        ))}

        <TemplateModal
          visible={modalVisible}
          modalType={modalType}
          handleClose={handleCloseModal}
          handleNew={handleNew}
          handleDelete={handleDelete}
          handleRename={handleRename}
        />
      </Container>
    </div>
  )
}

export default MessageTemplateView
