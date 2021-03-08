import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TextField, InputAdornment, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import SectionContainer from '../SectionContainer'
import UserItem from '../UserItem'
import { ScrollableItem, ListWithoutPadding } from '../Templates'

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

  useEffect(() => {
    onChangeSearchField(searchValue)
  }, [users])

  return (
    <SectionContainer sectionTitle="Following">
      <Grid container>
        <Grid item xs={12} style={{ padding: '12px' }}>
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
        <ScrollableItem item xs={12} style={{ maxHeight: '25vh' }}>
          <ListWithoutPadding>{filteredUsers && filteredUsers.map((user) => <UserItem key={user.id} userInfo={user} />)}</ListWithoutPadding>
        </ScrollableItem>
      </Grid>
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
