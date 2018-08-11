const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('../libs/checkLib')
const mail = require('../libs/emailLib')
var events = require('events')

var eventEmitter = new events.EventEmitter();



const ChatModel = mongoose.model('Chat')
const ChatmsgModel = mongoose.model('Chatmessage');

let createNewChatRoom = (req,res) => {
    let newRoom = () => {
        return new Promise ((resolve,reject) => {
            let room = new ChatModel ({
                roomId: shortid.generate(),
                title: req.body.title,
                about:req.body.about,
                createdOn: time.now(),
                isActive: req.body.isActive,
                creatorId: req.body.creatorId,
                creator: req.body.creator,
                modifiedBy: req.body.modifiedBy
                
            })

            room.save((err,result) => {
                if(err) {
                    logger.error(err.message, 'chatRoomController: createNewChatRoom', 10)
                    let apiResponse = response.generate(true, 'Failed to create new room', 500, null)
                    reject(apiResponse)
                }
                else {
                    resolve(result)
                    
                }
            })
        })
    }

    newRoom(req,res)
    .then((resolve) => {
        let apiResponse = response.generate(false, 'Room created', 200, resolve)
        res.send(apiResponse);
    })
    .catch((err) => {

        res.send(err);
    })
}

let editRoomInfo = (req,res) => {
    let data = req.body;
    ChatModel.update({ 'roomId': req.params.roomId || req.query.roomId }, data, { multi: true })
        .exec((err, result) => {
            if (err) {
                logger.error(`${err}`, 'chatRoomController: editRoomInfo', 10)
                let apiResponse = response.generate(true, 'Failed To Find Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No chat room Found', 'chatRoomController: editRoomInfo')
                let apiResponse = response.generate(true, 'Not Found ', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Room successfully updated', 200, result)
                res.send(apiResponse)
            }
        })
}

let getAllRooms = (req,res) => {
    ChatModel.find()
        .select('-__v -_id')
        .lean()
        .limit()
        .sort({createdOn: -1})
        .exec((err, result) => {
            if (err) {
                logger.error(`${err}`, 'chatRoomController: getAllRooms', 10)
                let apiResponse = response.generate(true, 'Failed To Find Chat Rooms', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Chat Room Found', 'chatRoomController: getAllRooms')
                let apiResponse = response.generate(true, 'No room Found ', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Chat Rooms', 200, result)
                res.send(apiResponse)
                // eventEmitter.emit('list',result)
            }
        })
}

let getRoomInfo = (req,res) => {
    ChatModel.findOne({roomId:req.params.roomId })
    .exec((err,result)=>{
        if (err) {
            logger.error(`${err}`, 'chatRoomController: getRoomInfo', 10)
            let apiResponse = response.generate(true, 'Failed To Find Chat Room', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Chat Room Found', 'chatRoomController: getRoomInfo')
            let apiResponse = response.generate(true, 'No room Found ', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Chat Room Info', 200, result)
            res.send(apiResponse)
        }
    })
}


let deleteChatRoom = (req,res) => {
   
        ChatModel.findOne({roomId:req.params.roomId}).exec((err,result)=>{            
            if(err) {
                logger.error(`${err}`, 'chatRoomController: deleteChatRoom', 10)
                let apiResponse = response.generate(true, 'Failed To Find Chat Rooms', 500, null)
                res.send(apiResponse)
            }
            else if(result.creatorId === req.body.userId){
                ChatModel.remove({roomId:req.params.roomId})
                .exec((err, result) => {
                    if (err) {
                        logger.error(`${err}`, 'chatRoomController: deleteChatRoom', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Chat Rooms', 500, null)
                        res.send(apiResponse)
                    } else if (check.isEmpty(result)) {
                        logger.info('No Chat Room Found', 'chatRoomController: gdeleteChatRoom')
                        let apiResponse = response.generate(true, 'No room Found ', 404, null)
                        res.send(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Chat room deleted', 200, result)
                        res.send(apiResponse)
                    }
                })
            }
            else {
                
                let apiResponse = response.generate(true, 'Not authorized to delete the room', 500, null)
                res.send(apiResponse)
                
            }
        })
    }
    

    let getAllChats = (req,res) => {
        ChatmsgModel.find({ 'roomId': req.params.roomId || req.query.roomId || req.body.roomId })
        .sort({createdOn: -1})
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(`${err}`, 'chatRoomController: getAllChats', 10)
                let apiResponse = response.generate(true, 'Failed To Find Chats', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Chat  Found', 'chatRoomController: getAllChats')
                let apiResponse = response.generate(true, 'No messages Found ', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Chat messages', 200, result)
                res.send(apiResponse)
                // eventEmitter.emit('list',result)
            }
        })
    }

module.exports = {
    createNewChatRoom: createNewChatRoom,
    editRoomInfo : editRoomInfo,
    getAllRooms: getAllRooms,
    deleteChatRoom:deleteChatRoom,
    getRoomInfo:getRoomInfo,
    getAllChats:getAllChats

}