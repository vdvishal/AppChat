const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const tokenLib = require("./tokenLib.js");
const check = require("./checkLib.js");
const response = require('./responseLib');
var Chatmessage = require('./../models/Chatmessage')
const ChatmsgModel = mongoose.model('Chatmessage');


const setServer = (server) => {

    let io = socketio.listen(server);

    let myIo = io.of('/')

    myIo.on('connection', (socket) => {



        socket.on('join-room', (data) => {
            socket.join(data.room, () => {
                console.log(data.userName + ' joined: ' + data.room);
            });
            socket.to(data.room).emit('notify', `${data.userName} has joined`);
        })

        /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @apiDescription  {Listen} join-room
     *
     * This event ("join-room") listen to users joining a room dynamically.
        */

                /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @apiDescription  {Emit} notify
     *
     * This event ("notify") emits to users if someone joins or leaves a room.
        */

        socket.on('leave-room', (data) => {
            socket.leave(data.roomId, () => {
                console.log(data.creator + ' left: ' + data.title);
            })
            socket.to(data.roomId).emit('notify', `${data.creator} has left`);
        })
             /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @apiDescription  {Listen} leave-room
     *
     * This event ("leave-room") listen to users leaving a room.
        */

        socket.on('chat-msg', (data) => {
            data['chatId'] = shortid.generate()
            setTimeout(function () {
                eventEmitter.emit('save-chat', data);
            }, 2000)
            io.in(data.roomId).emit('new-msg', data)
        });

             /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @apiDescription  {Listen} chat-msg
     *
     * This event ("chat-msg") listen to users sending chat messages to a room.
        */


    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @apiDescription  {Emit} new-msg
     *
     * This event ("new-msg") emits to new messages to users in a room.
     * Output:
     *                             {
                                chatId: 'unique chat id',
                                message: 'you message',
                                createdOn: date, 
                                senderName: 'first name of sender'
                                roomId: Id of the room
                            }
        */

        socket.on('typing', (data) => {
            socket.to(data.roomId).emit('typing-msg', `${data.senderName} is typing....`);
        });

        /**
        * @apiGroup users
        * @apiVersion  1.0.0
        * @apiDescription  {Listen} typing
        *
        * This event ("typing") listen to users typing a message
        */

            /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @apiDescription  {Emit} typing
     *
     * This event ("typing") emits to user in the room if some user is typing in a room.
        */
    })

}


eventEmitter.on('save-chat', (data) => {

    // let today = Date.now();

    let newChat = new ChatmsgModel({
        chatId: data.chatId,
        senderName: data.senderName,
        message: data.message,
        createdOn: data.createdOn,
        roomId: data.roomId
    });

    newChat.save((err, result) => {
        if (err) {
            console.log(`error occurred: ${err}`);
        }
        else if (result == undefined || result == null || result == "") {
            console.log("Chat Is Not Saved.");
        }
        else {
            console.log("Chat Saved.");
            console.log(result);
        }
    });

});



module.exports = {
    setServer: setServer
}