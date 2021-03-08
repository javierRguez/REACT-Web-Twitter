import React from 'react'
import { Grid } from '@material-ui/core'
import Wall from '../components/Wall'

const UserTimeline = () => {
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Wall />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UserTimeline
