/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import SectionContainer from '../SectionContainer'
import UserItem from '../UserItem'
import { ScrollableItem, ListWithoutPadding } from '../Templates'

const GeneralContainer = styled(Grid)`
  height: 60vh;
`

const Following = ({ users }) => {
  const [followingUsers, setFollowingUsers] = useState([])
  useEffect(() => {
    setFollowingUsers(users.filter((user) => user.following))
  }, [users])
  return (
    <SectionContainer sectionTitle="Following">
      <GeneralContainer container>
        <ScrollableItem item xs={12}>
          <ListWithoutPadding>
            {followingUsers && followingUsers.map((user) => <UserItem key={user.id} userName={user.userName} />)}
          </ListWithoutPadding>
        </ScrollableItem>
      </GeneralContainer>
    </SectionContainer>
  )
}

Following.propTypes = {}

const mapStateToProps = (state) => ({
  users: state.usersModel.users,
})

export default connect(mapStateToProps)(Following)
