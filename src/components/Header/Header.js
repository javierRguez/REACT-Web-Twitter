import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { ArrowBackIos as ArrowBackIosIcon, Home as HomeIcon } from '@material-ui/icons'
import _ from 'lodash'

const Header = ({ users }) => {
  const history = useHistory()
  const { userId } = useParams()
  const user = _.find(users, { id: parseInt(userId) })

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
          {userId ? user?.userName : 'Home'}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  users: PropTypes.array,
}

const mapStateToProps = (state) => ({
  users: state.usersModel.users,
})

export default connect(mapStateToProps)(Header)
