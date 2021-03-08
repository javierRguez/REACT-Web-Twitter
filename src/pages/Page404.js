import React from 'react'
import { Grid } from '@material-ui/core'
import Image from '../images/not-found.png'

const Page404 = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <img src={Image} style={{ height: '100%', width: '100%' }}></img>
      </Grid>
    </Grid>
  )
}

export default Page404
