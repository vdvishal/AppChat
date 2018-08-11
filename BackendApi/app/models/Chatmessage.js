const mongoose = require('mongoose')

Schema = mongoose.Schema

let Chatmsg = new Schema({
  chatId: { type: String, unique: true, required: true },
  senderName: { type: String, default: '' },
  message: { type: String, default: '' },
  roomId: { type: String, default: '' },
  seen: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now }
})

mongoose.model('Chatmessage', Chatmsg)