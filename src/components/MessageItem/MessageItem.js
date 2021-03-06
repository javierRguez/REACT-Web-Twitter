import React from 'react'
import { connect } from 'react-redux'
import { Grid, ListItem, Avatar, ListItemText, Paper, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import PersonIcon from '@material-ui/icons/Person'
import _ from 'lodash'

const MessageItem = ({ users, message }) => {
  const user = _.find(users, { id: message.userId })
  return (
    <ListItem style={{ padding: '24px 16px' }} onClick={() => console.log('test')}>
      <Grid container alignItems="center" style={{ flexFlow: 'nowrap' }}>
        <Grid item style={{ paddingRight: '12px' }}>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </Grid>
        <Grid item style={{ width: 'auto' }}>
          <Paper style={{ padding: '12px', backgroundColor: '#fafff8' }}>
            <Grid container>
              <Grid item xs={12}>
                <ListItemText align="left">
                  <Typography variant="subtitle1" align="left" style={{ fontWeight: 500 }}>
                    {user && user.userName}
                  </Typography>
                </ListItemText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText align="left" primary={message.message} />
              </Grid>
              <Grid item xs={12}>
                <ListItemText align="left" secondary={message.date} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </ListItem>
  )
}

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  users: PropTypes.array,
}

const mapStateToProps = (state) => ({
  users: state.usersModel.users,
})

export default connect(mapStateToProps)(MessageItem)
