import React, { useState } from "react"
import { useTheme } from "@mui/material/styles"
import { ReactComponent as ClickedIcon } from "../../svg/clicked_2.svg"
import { ReactComponent as LikedIcon } from "../../svg/liked_2.svg"
import { ReactComponent as OpenedIcon } from "../../svg/opened_2.svg"
import { ReactComponent as RepliedIcon } from "../../svg/replied_2.svg"
import { ReactComponent as SentIcon } from "../../svg/sent_2.svg"
import { ReactComponent as ViewedIcon } from "../../svg/viewed.svg"
import { ReactComponent as TextIcon } from "../../svg/text.svg"
import { ReactComponent as TrashIcon } from "../../svg/trash.svg"
import { Box, SvgIcon } from "@mui/material"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import moment from "moment"
import { MessageTemplate, ModalTypes } from "../../types"
import {
  StyledTemplateBox,
  StyledImageBox,
  StyledInfoText,
  StyledSectionText,
  StyledProfileStack,
  StyledInfoStack,
  StyledStatsText,
  StyledStatsLabelText,
  StyledMoreIconButton,
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

  const [showMore, setShowMore] = useState(false)

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
      icon: TextIcon,
      color: "#16171B",
    },
    {
      name: "Delete",
      icon: TrashIcon,
      color: "#993101",
    },
  ]

  const handleMore = () => {
    setShowMore(!showMore)
  }

  return (
    <StyledTemplateBox>
      <StyledImageBox>
        <Box component="img" alt="coverPhoto" src={thumbnail} width={"100%"} height={"80%"} />
      </StyledImageBox>
      <div>
        <StyledSectionText>{name}</StyledSectionText>
        <StyledInfoText>Created by: {createdBy}</StyledInfoText>
      </div>
      <div>
        <StyledSectionText>CREATED</StyledSectionText>
        <StyledInfoText>{moment(date, "MM/DD/YYYY").format("DD MMMM YYYY")}</StyledInfoText>
      </div>
      <StyledStatsBox>
        <StyledProfileStack direction="row" spacing={theme?.templateCard?.profileStack?.spacing}>
          {statsSpecs.map((stat) => (
            <StyledInfoStack
              key={stat.name}
              direction="column"
              spacing={theme?.templateCard?.infoStack?.spacing}
              marginLeft={theme?.templateCard?.infoStack?.margin}
            >
              <StyledStatsLabelText>
                <SvgIcon
                  component={stat.icon}
                  sx={{
                    color: stat.color,
                    fontSize: theme?.templateCard?.svgIcons?.statIcons?.fontSize,
                  }}
                />
                {stat.name}
              </StyledStatsLabelText>
              <StyledStatsText>{stat.value}</StyledStatsText>
            </StyledInfoStack>
          ))}
        </StyledProfileStack>
      </StyledStatsBox>
      <div>
        <StyledMoreIconButton onClick={handleMore} size="small">
          <MoreHorizIcon fontSize="small" />
        </StyledMoreIconButton>
        {showMore && (
          <Box>
            {moreOptionsSpecs.map((option) => (
              <div
                key={option.name}
                onClick={() =>
                  handleOpenModal({ modalType: option.name.toLowerCase() as ModalTypes, id })
                }
              >
                <SvgIcon
                  component={option.icon}
                  sx={{
                    color: option.color,
                    fontSize: theme?.templateCard?.svgIcons?.moreIcons?.fontSize,
                  }}
                />
                {option.name}
              </div>
            ))}
          </Box>
        )}
      </div>
    </StyledTemplateBox>
  )
}

export default TemplateCard
