import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import Follow from '../components/Follow'
import Following from '../components/Following'
import Post from '../components/Post'
import Wall from '../components/Wall'

const Home = () => {
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Following />
          </Grid>
          <Grid item md={9} xs={12}>
            <Wall />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Follow />
          </Grid>
          <Grid item xs={6} md={9}>
            <Post />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default connect()(Home)
