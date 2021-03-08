import Moment from 'moment'
import _ from 'lodash'
import { messages } from '../mock/mockData'
import moment from 'moment'
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
    async getMessagesByUserId(userId, state) {
      const { messages } = state.messagesModel
      return messages.filter((message) => message.userId === userId)
    },
    async loadMockData() {
      messagesModel.editProp({ newValue: messages, key: 'messages' })
    },
    async getAllMessages(payload, state) {
      const { messages } = state.messagesModel
      const response = _.orderBy(
        messages,
        (mss) => {
          return Moment(mss.date, 'DD/MM/YYYY')
        },
        ['desc']
      )
      return response
    },
    async sendMessage(messageValue, state) {
      const { messages } = state.messagesModel
      const newMessages = [...messages]
      const idMessage = Math.floor(new Date() / 1000).toString(16)
      const newMessage = { id: idMessage, userId: 99, message: messageValue, date: moment().format('DD/MM/YYYY') }
      newMessages.unshift(newMessage)
      messagesModel.editProp({ newValue: newMessages, key: 'messages' })
    },
  }),
}
