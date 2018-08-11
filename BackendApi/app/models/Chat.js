const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let chatSchema = new Schema({
    roomId: {
      type: String,
      default: '',
      unique:true
    },
    title: {
      type: String,
      default: ''
    },
    about:{
      type:String,
      default:''
    },
    createdOn :{
      type:Date,
      default:""
    },
    isActive: {
        type: Boolean,
        default: true
    },
    creator: {
      type:String
    },
    creatorId: {
      type:String
    },
    modifiedBy: {
      type:String
    }
  })
  
  
mongoose.model('Chat', chatSchema);