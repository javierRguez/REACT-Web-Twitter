import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TextField, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'
import SectionContainer from '../SectionContainer'

const GeneralContainer = styled.div`
  display: flex;
  padding: 12px;
`
const TextFieldContainer = styled.div`
  flex: 0 0 95%;
`
const SendIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 5%;
`

const Post = ({ dispatch }) => {
  const { messagesModel } = dispatch
  const [messageValue, setMessageValue] = useState('')

  const onChangeHandler = (value) => {
    setMessageValue(value)
  }

  const sendMessage = () => {
    messagesModel.sendMessage(messageValue)
    setMessageValue('')
  }

  return (
    <SectionContainer sectionTitle="Post">
      <GeneralContainer>
        <TextFieldContainer>
          <TextField
            value={messageValue}
            onChange={(e) => onChangeHandler(e.target.value)}
            fullWidth
            id="outlined-textarea"
            placeholder="what's going on?"
            multiline
            variant="outlined"
          />
        </TextFieldContainer>
        <SendIconContainer>
          <IconButton edge="end" aria-label="send-buttom" onClick={() => sendMessage()}>
            <SendIcon />
          </IconButton>
        </SendIconContainer>
      </GeneralContainer>
    </SectionContainer>
  )
}

Post.propTypes = {
  dispatch: PropTypes.func,
}

export default connect()(Post)
