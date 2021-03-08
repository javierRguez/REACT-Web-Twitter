/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { connect } from 'react-redux'

const DataChecker = ({ children, dispatch, users, messages }) => {
  const { messagesModel, usersModel } = dispatch
  const loadInitialData = async () => {
    if (messages.length <= 0) await messagesModel.loadMockData()
    if (users.length <= 0) await usersModel.loadMockData()
  }

  useEffect(() => {
    loadInitialData()
  }, [])
  return <div>{children}</div>
}

const mapStateToProps = (state) => ({
  users: state.usersModel.users,
  messages: state.messagesModel.messages,
})

export default connect(mapStateToProps)(DataChecker)
