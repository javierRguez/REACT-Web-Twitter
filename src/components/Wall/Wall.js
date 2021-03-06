/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import styled from 'styled-components'
import SectionContainer from '../SectionContainer'
import MessageItem from '../MessageItem'

import { ScrollableItem } from '../Templates'

const GeneralContainer = styled(Grid)`
  height: 60vh;
`

const Wall = ({ messages }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [messages])

  return (
    <SectionContainer sectionTitle="Wall">
      <GeneralContainer container justify="center" alignItems="center">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <ScrollableItem item xs={12}>
            {messages && messages.map((message) => <MessageItem key={message.id} message={message} />)}
          </ScrollableItem>
        )}
      </GeneralContainer>
    </SectionContainer>
  )
}

Wall.propTypes = {}

const mapStateToProps = (state) => ({
  messages: state.messagesModel.messages,
})

export default connect(mapStateToProps)(Wall)
