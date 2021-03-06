/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import AppFrame from '../components/AppFrame'
import Follow from '../components/Follow'
import Following from '../components/Following'
import { phone } from '../utils/media'
import Post from '../components/Post'
import Wall from '../components/Wall'

const DesktopWrapper = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  ${phone(css`
    display: none;
  `)};
`

const MobileWrapper = styled.div`
  display: none;
  ${phone(css`
    display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  `)};
`

const Home = ({ dispatch }) => {
  const { messagesModel, usersModel } = dispatch
  const loadInitialData = async () => {
    await messagesModel.getAllMessages()
    await usersModel.getAllUsers()
  }

  useEffect(() => {
    loadInitialData()
  }, [])

  return (
    <AppFrame>
      <DesktopWrapper>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Following />
              </Grid>
              <Grid item xs={9}>
                <Wall />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Follow />
              </Grid>
              <Grid item xs={9}>
                <Post />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DesktopWrapper>
      <MobileWrapper>
        <Grid item xs={12}>
          <Wall />
        </Grid>
      </MobileWrapper>
    </AppFrame>
  )
}

export default connect()(Home)
