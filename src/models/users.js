import { users } from '../mock/mockData'
export default {
  state: {
    users: [],
    selectedUser: {},
  },
  reducers: {
    editProp(state, payload) {
      return {
        ...state,
        [payload.key]: payload.newValue,
      }
    },
  },
  effects: ({ usersModel }) => ({
    editProperty(prop) {
      usersModel.editProp({ newValue: prop.value, key: prop.key })
    },
    async loadMockData() {
      usersModel.editProp({ newValue: users, key: 'users' })
    },
    async getAllUsers(payload, state) {
      const { users } = state.usersModel
      return users
    },
    async getFollowedUsers(payload, state) {
      const { users } = state.usersModel
      return users.filter((user) => user.isFollowing)
    },
    async changeIsFollowing(followUser, state) {
      const newUsers = [...state.usersModel.users]
      const userIndex = newUsers.findIndex((user) => user.id == followUser.id)
      newUsers[userIndex] = { ...newUsers[userIndex], isFollowing: !newUsers[userIndex].isFollowing }
      usersModel.editProp({ newValue: newUsers, key: 'users' })
    },
  }),
}
