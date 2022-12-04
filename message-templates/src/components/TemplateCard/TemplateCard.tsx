import React, { createElement, useState } from "react"
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
// import { PlayCircle, Favorite, ChatBubble, MoreHoriz } from "@mui/icons-material/"
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

const iconsObject = {
  clicked: ClickedIcon,
  liked: LikedIcon,
  opened: OpenedIcon,
  replied: RepliedIcon,
  sent: SentIcon,
  viewed: ViewedIcon,
}

const percentageConverter = (stats: number) => {
  return (stats * 100).toFixed(0)
}

const TemplateCard = ({
  template,
  handleOpenModal,
}: {
  template: MessageTemplate
  handleOpenModal: (modalType: ModalTypes) => void
}) => {
  const { thumbnail, name, createdBy, date, sent, opened, viewed, liked, clicked, replied } =
    template

  const [showMore, setShowMore] = useState(false)

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
        <StyledInfoText>{moment(date).format("DD MMMM YYYY")}</StyledInfoText>
      </div>
      <StyledStatsBox>
        <StyledProfileStack direction="row" spacing={1}>
          <StyledInfoStack direction="column" spacing={1} marginLeft={2}>
            <StyledStatsLabelText>
              <SvgIcon component={SentIcon} sx={{ color: "#0033FF", fontSize: "15px" }} />
              Sent
            </StyledStatsLabelText>
            <StyledStatsText>{sent}</StyledStatsText>
          </StyledInfoStack>
          <StyledInfoStack direction="column" spacing={1} marginLeft={2}>
            <StyledStatsLabelText>
              <SvgIcon component={OpenedIcon} sx={{ color: "#6D9F00", fontSize: "15px" }} />
              Opened
            </StyledStatsLabelText>
            <StyledStatsText>{percentageConverter(opened)}%</StyledStatsText>
          </StyledInfoStack>
          <StyledInfoStack direction="column" spacing={1} marginLeft={2}>
            <StyledStatsLabelText>
              <SvgIcon component={ViewedIcon} sx={{ color: "#7D086A", fontSize: "15px" }} />
              Viewed
            </StyledStatsLabelText>
            <StyledStatsText>{percentageConverter(viewed)}%</StyledStatsText>
          </StyledInfoStack>
          <StyledInfoStack direction="column" spacing={1} marginLeft={2}>
            <StyledStatsLabelText>
              <SvgIcon component={LikedIcon} sx={{ color: "#D16DC1", fontSize: "15px" }} />
              Liked
            </StyledStatsLabelText>
            <StyledStatsText>{percentageConverter(liked)}%</StyledStatsText>
          </StyledInfoStack>
          <StyledInfoStack direction="column" spacing={1} marginLeft={2}>
            <StyledStatsLabelText>
              <SvgIcon component={ClickedIcon} sx={{ color: "#FFD000", fontSize: "15px" }} />
              Clicked
            </StyledStatsLabelText>
            <StyledStatsText>{percentageConverter(clicked)}%</StyledStatsText>
          </StyledInfoStack>
          <StyledInfoStack direction="column" spacing={1} marginLeft={2}>
            <SvgIcon component={RepliedIcon} sx={{ color: "#6783FF", fontSize: "15px" }} />
            <StyledStatsLabelText>Replied</StyledStatsLabelText>
            <StyledStatsText>{percentageConverter(replied)}%</StyledStatsText>
          </StyledInfoStack>
        </StyledProfileStack>
      </StyledStatsBox>
      <div>
        <StyledMoreIconButton onClick={handleMore} size="small">
          <MoreHorizIcon fontSize="small" />
        </StyledMoreIconButton>
        {showMore && (
          <Box>
            <div onClick={() => handleOpenModal("rename")}>
              <SvgIcon component={TextIcon} sx={{ color: "#16171B", fontSize: "11px" }} />
              Rename
            </div>
            <div onClick={() => handleOpenModal("delete")}>
              <SvgIcon component={TrashIcon} sx={{ color: "#993101", fontSize: "6px" }} />
              Delete
            </div>
          </Box>
        )}
      </div>
    </StyledTemplateBox>
  )
}

// <SentIcon fill={"#0033FF"} />
// <ViewedIcon fill={"#7D086A"} />
// <OpenedIcon fill={"#6D9F00"} />
// <LikedIcon fill={"#D16DC1"} />
// <ClickedIcon fill={"#FFD000"} />
// <RepliedIcon fill={"#6783FF"} fontSize={"small"} />
export default TemplateCard
