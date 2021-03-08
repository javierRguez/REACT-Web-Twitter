import React from 'react'
import { connect } from 'react-redux'
import { ListItemText, ListItem, Avatar, ListItemAvatar, Divider, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import PropTypes from 'prop-types'
import PersonIcon from '@material-ui/icons/Person'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'

const UserItem = ({ dispatch, userInfo, onClickUser }) => {
  const { usersModel } = dispatch
  const changeFollowStatus = () => {
    usersModel.changeIsFollowing(userInfo)
  }

  return (
    <>
      <ListItem button={onClickUser !== undefined} onClick={() => onClickUser && onClickUser(userInfo.id)}>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={userInfo?.userName} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="item-buttom" onClick={() => changeFollowStatus()}>
            {userInfo.isFollowing ? <RemoveCircleIcon style={{ color: '#db3a34' }} /> : <AddCircleIcon style={{ color: '#084c61' }} />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" />
    </>
  )
}

UserItem.propTypes = {
  userInfo: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  onClickUser: PropTypes.func,
}

export default connect()(UserItem)
