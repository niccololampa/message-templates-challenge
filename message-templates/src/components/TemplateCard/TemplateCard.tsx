import React, { useState } from "react"
import { useTheme } from "@mui/material/styles"
import { ReactComponent as ClickedIcon } from "../../svg/clicked_2.svg"
import { ReactComponent as LikedIcon } from "../../svg/liked_2.svg"
import { ReactComponent as OpenedIcon } from "../../svg/opened_2.svg"
import { ReactComponent as RepliedIcon } from "../../svg/replied_2.svg"
import { ReactComponent as SentIcon } from "../../svg/sent_2.svg"
import { ReactComponent as ViewedIcon } from "../../svg/viewed.svg"
import TitleIcon from "@mui/icons-material/Title"
import DeleteIcon from "@mui/icons-material/Delete"
import { Box, SvgIcon } from "@mui/material"
import { MoreMenu } from "../../components"
import moment from "moment"
import { MessageTemplate, ModalTypes } from "../../types"
import {
  StyledTemplateBox,
  StyledImageBox,
  StyledInfoBox,
  StyledDateBox,
  StyledMoreBox,
  StyledStatLabelBox,
  StyledInfoText,
  StyledNameText,
  StyledCreatedText,
  StyledStatStack,
  StyledInfoStack,
  StyledStatsText,
  StyledStatsLabelText,
  StyledStatsBox,
} from "./TemplateCardStyled"

const percentageConverter = (stats: number) => {
  return (stats * 100).toFixed(0)
}

const TemplateCard = ({
  template,
  handleOpenModal,
}: {
  template: MessageTemplate
  handleOpenModal: ({ modalType, id }: { modalType: ModalTypes; id?: string }) => void
}) => {
  const { id, thumbnail, name, createdBy, date, sent, opened, viewed, liked, clicked, replied } =
    template

  const theme = useTheme()

  const [namePicHovered, setNamePicHovered] = useState<boolean>(false)

  const statsSpecs = [
    { name: "Sent", icon: SentIcon, color: "#0033FF", value: `${sent}` },
    {
      name: "Opened",
      icon: OpenedIcon,
      color: "#6D9F00",
      value: `${percentageConverter(opened)}%`,
    },
    {
      name: "Viewed",
      icon: ViewedIcon,
      color: "#7D086A",
      value: `${percentageConverter(viewed)}%`,
    },
    {
      name: "Liked",
      icon: LikedIcon,
      color: "#D16DC1",
      value: `${percentageConverter(liked)}%`,
    },
    {
      name: "Clicked",
      icon: ClickedIcon,
      color: "#FFD000",
      value: `${percentageConverter(clicked)}%`,
    },
    {
      name: "Replied",
      icon: RepliedIcon,
      color: "#6783FF",
      value: `${percentageConverter(replied)}%`,
    },
  ]

  const moreOptionsSpecs = [
    {
      name: "Rename",
      icon: TitleIcon,
      color: "#16171B",
      hoverColor: "#fff6ce",
    },
    {
      name: "Delete",
      icon: DeleteIcon,
      color: "#993101",
      hoverColor: "#fff9ff",
    },
  ]

  return (
    <StyledTemplateBox>
      <StyledImageBox
        onMouseOver={() => {
          setNamePicHovered(true)
        }}
        onMouseOut={() => {
          setNamePicHovered(false)
        }}
      >
        <Box
          component="img"
          alt="coverPhoto"
          src={thumbnail}
          width={"100px"}
          height={"auto"}
          sx={{
            border: namePicHovered ? "2px solid #fed20B" : "none",
          }}
        />
      </StyledImageBox>
      <StyledInfoBox
        onMouseOver={() => {
          setNamePicHovered(true)
        }}
        onMouseOut={() => {
          setNamePicHovered(false)
        }}
      >
        <StyledNameText
          color={
            namePicHovered
              ? theme?.templateCard?.text?.nameText?.hoverColor
              : theme?.templateCard?.text?.nameText?.color
          }
          fontSize={theme?.templateCard?.text?.nameText?.fontSize}
          fontWeight={theme?.templateCard?.text?.nameText?.fontWeight}
        >
          {name}
        </StyledNameText>
        <StyledInfoText
          color={theme?.templateCard?.text?.infoText?.color}
          fontSize={theme?.templateCard?.text?.infoText?.fontSize}
          fontWeight={theme?.templateCard?.text?.infoText?.fontWeight}
        >
          Created by: {createdBy}
        </StyledInfoText>
      </StyledInfoBox>
      <StyledDateBox>
        <StyledCreatedText
          color={theme?.templateCard?.text?.createdText?.color}
          fontSize={theme?.templateCard?.text?.createdText?.fontSize}
          fontWeight={theme?.templateCard?.text?.createdText?.fontWeight}
        >
          CREATED
        </StyledCreatedText>
        <StyledInfoText
          color={theme?.templateCard?.text?.infoText?.color}
          fontSize={theme?.templateCard?.text?.infoText?.fontSize}
          fontWeight={theme?.templateCard?.text?.infoText?.fontWeight}
        >
          {moment(date, "MM/DD/YYYY").format("DD/MM/YYYY")}
        </StyledInfoText>
      </StyledDateBox>
      <StyledStatsBox>
        <StyledStatStack direction="row" spacing={theme?.templateCard?.statStack?.spacing}>
          {statsSpecs.map((stat) => (
            <StyledInfoStack
              key={stat.name}
              direction="column"
              spacing={theme?.templateCard?.infoStack?.spacing}
              marginLeft={theme?.templateCard?.infoStack?.margin}
            >
              <StyledStatLabelBox>
                <SvgIcon
                  component={stat.icon}
                  sx={{
                    color: stat.color,
                    fontSize: theme?.templateCard?.svgIcons?.statIcons?.fontSize,
                  }}
                />
                <StyledStatsLabelText
                  color={theme?.templateCard?.text?.labelText?.color}
                  fontSize={theme?.templateCard?.text?.labelText?.fontSize}
                  fontWeight={theme?.templateCard?.text?.labelText?.fontWeight}
                >
                  {stat.name}
                </StyledStatsLabelText>
              </StyledStatLabelBox>
              <StyledStatsText
                color={theme?.templateCard?.text?.statsText?.color}
                fontSize={theme?.templateCard?.text?.statsText?.fontSize}
                fontWeight={theme?.templateCard?.text?.statsText?.fontWeight}
              >
                {stat.value}
              </StyledStatsText>
            </StyledInfoStack>
          ))}
        </StyledStatStack>
      </StyledStatsBox>
      <StyledMoreBox>
        <MoreMenu
          menuItemSpecs={moreOptionsSpecs}
          handleOpenModal={({ modalType }: { modalType: ModalTypes }) => {
            handleOpenModal({ modalType, id })
          }}
        />
      </StyledMoreBox>
    </StyledTemplateBox>
  )
}

export default TemplateCard
