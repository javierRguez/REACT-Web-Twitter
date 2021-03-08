import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Header from '../Header'

const AppFrame = ({ children }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={11} md={10} lg={10}>
        <Header />
      </Grid>
      <Grid item xs={12} sm={11} md={10} lg={10}>
        {children}
      </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {
  children: PropTypes.node,
}

export default AppFrame
