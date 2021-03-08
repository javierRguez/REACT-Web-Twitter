import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Grid, CircularProgress } from '@material-ui/core'
import styled from 'styled-components'
import SectionContainer from '../SectionContainer'
import MessageItem from '../MessageItem'

import { ScrollableItem } from '../Templates'

const GeneralContainer = styled(Grid)`
  height: 55vh;
`

const NoMessagesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wall = ({ dispatch, messages }) => {
  const { messagesModel } = dispatch
  const userId = parseInt(useParams().userId)
  const [isLoading, setIsLoading] = useState(true)
  const [messagesToShow, setMessagesToShow] = useState([])

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)

  useEffect(() => {
    const getMessagesToShow = async () => {
      let auxMessages = []
      if (userId) {
        auxMessages = await messagesModel.getMessagesByUserId(userId)
      } else {
        auxMessages = await messagesModel.getAllMessages()
      }
      setMessagesToShow(auxMessages)
    }
    getMessagesToShow()
  }, [userId, messages])

  return (
    <SectionContainer sectionTitle="Wall">
      <GeneralContainer container justify="center" alignItems="center">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <ScrollableItem item xs={12}>
            {messagesToShow?.length > 0 ? (
              messagesToShow.map((message) => <MessageItem key={message.id} message={message} />)
            ) : (
              <NoMessagesContainer>No messages</NoMessagesContainer>
            )}
          </ScrollableItem>
        )}
      </GeneralContainer>
    </SectionContainer>
  )
}

Wall.propTypes = {
  dispatch: PropTypes.func,
  messages: PropTypes.array,
}

const mapStateToProps = (state) => ({
  messages: state.messagesModel.messages,
})

export default connect(mapStateToProps)(Wall)
