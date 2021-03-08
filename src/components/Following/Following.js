import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import SectionContainer from '../SectionContainer'
import UserItem from '../UserItem'
import { ScrollableItem, ListWithoutPadding } from '../Templates'

const GeneralContainer = styled(Grid)`
  height: 55vh;
`

const Following = ({ dispatch, users }) => {
  const history = useHistory()
  const { usersModel } = dispatch
  const [followingUsers, setFollowingUsers] = useState([])
  const getFollowedUsers = async () => {
    const users = await usersModel.getFollowedUsers()
    setFollowingUsers(users)
  }
  useEffect(() => {
    getFollowedUsers()
  }, [users])

  const navToTimeline = (id) => {
    history.push(`/timeline/${id}`)
  }

  return (
    <SectionContainer sectionTitle="Following">
      <GeneralContainer container>
        <ScrollableItem item xs={12}>
          <ListWithoutPadding>
            {followingUsers && followingUsers.map((user) => <UserItem key={user.id} userInfo={user} onClickUser={navToTimeline} />)}
          </ListWithoutPadding>
        </ScrollableItem>
      </GeneralContainer>
    </SectionContainer>
  )
}

Following.propTypes = {
  users: PropTypes.array,
  dispatch: PropTypes.func,
}

const mapStateToProps = (state) => ({
  users: state.usersModel.users,
})

export default connect(mapStateToProps)(Following)
