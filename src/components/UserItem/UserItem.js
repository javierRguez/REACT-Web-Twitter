import React from 'react'
import { Grid, ListItem, Avatar, Typography, Divider } from '@material-ui/core'
import PropTypes from 'prop-types'
import PersonIcon from '@material-ui/icons/Person'

const UserItem = ({ userName }) => {
  return (
    <>
      <ListItem button key={userName} onClick={() => console.log('test')}>
        <Grid container justify="center" alignItems="center">
          <Grid item md={3} xs={12}>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </Grid>
          <Grid item md={9} xs={12}>
            <Typography display="inline" variant="h6">
              {userName}
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
      <Divider component="li" />
    </>
  )
}

UserItem.propTypes = {
  userName: PropTypes.string.isRequired,
}

export default UserItem
