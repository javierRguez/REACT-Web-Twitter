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
    async getAllUsers() {
      const response = users
      usersModel.editProp({ newValue: response, key: 'users' })
      return response
    },
  }),
}
