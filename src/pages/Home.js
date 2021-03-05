import React from 'react'
import styled, { css } from 'styled-components'
import { Grid } from '@material-ui/core'
import { phone } from '../utils/media'
import PostComponent from '../components/post'

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

const AppContainer = styled(Grid)`
  padding: 24px;
`

const Home = () => {
  return (
    <AppContainer container>
      <Grid item xs={12}>
        <DesktopWrapper>
          <Grid container>
            <Grid item xs={3}>
              <PostComponent />
            </Grid>
            <Grid item xs={9}>
              <PostComponent />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <PostComponent />
            </Grid>
            <Grid item xs={9}>
              <PostComponent />
            </Grid>
          </Grid>
        </DesktopWrapper>
        <MobileWrapper>
          <Grid item xs={12}>
            <PostComponent />
          </Grid>
        </MobileWrapper>
      </Grid>
    </AppContainer>
  )
}

export default Home
