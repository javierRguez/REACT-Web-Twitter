import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { ArrowBackIos as ArrowBackIosIcon, Home as HomeIcon } from '@material-ui/icons'

const Header = () => {
  const history = useHistory()
  const { userId } = useParams()

  const onClickIcon = () => {
    history.push('/')
  }
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={() => onClickIcon()}>
          {userId ? <ArrowBackIosIcon /> : <HomeIcon />}
        </IconButton>
        <Typography variant="h6" noWrap>
          Home
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
