/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextField, InputAdornment, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import SectionContainer from '../SectionContainer'
import UserItem from '../UserItem'
import { ScrollableItem, ListWithoutPadding } from '../Templates'

const GeneralContainer = styled(Grid)`
  height: 30vh;
`

const Follow = ({ users }) => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const onChangeSearchField = (value) => {
    setSearchValue(value)
    if (value) {
      const filteredUsers = users.filter((user) => user.userName.toLowerCase().indexOf(value.toLowerCase()) !== -1)
      setFilteredUsers(filteredUsers)
    } else {
      setFilteredUsers([])
    }
  }
  return (
    <SectionContainer sectionTitle="Following">
      <GeneralContainer container>
        <Grid item xs={12}>
          <TextField
            value={searchValue}
            onChange={(e) => onChangeSearchField(e.target.value)}
            fullWidth
            placeholder="Search..."
            type="search"
            variant="outlined"
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <ScrollableItem item xs={12} style={{ height: 'calc(100% - 56px)' }}>
          <ListWithoutPadding>{filteredUsers && filteredUsers.map((user) => <UserItem key={user.id} userName={user.userName} />)}</ListWithoutPadding>
        </ScrollableItem>
      </GeneralContainer>
    </SectionContainer>
  )
}

Follow.propTypes = {
  users: PropTypes.array,
}

const mapStateToProps = (state) => ({
  users: state.usersModel.users,
})

export default connect(mapStateToProps)(Follow)
