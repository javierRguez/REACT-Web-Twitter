import Moment from 'moment'
import _ from 'lodash'
import { messages } from '../mock/mockData'
export default {
  state: {
    messages: [],
    userMessages: [],
  },
  reducers: {
    editProp(state, payload) {
      return {
        ...state,
        [payload.key]: payload.newValue,
      }
    },
  },
  effects: ({ messagesModel }) => ({
    editProperty(prop) {
      messagesModel.editProp({ newValue: prop.value, key: prop.key })
    },
    async getAllMessages() {
      const response = _.orderBy(
        messages,
        (mss) => {
          return Moment(mss.date, 'DD/MM/YYYY')
        },
        ['desc']
      )
      messagesModel.editProp({ newValue: response, key: 'messages' })
      return response
    },
  }),
}
