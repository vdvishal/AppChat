const express = require('express');
const router = express.Router();
const roomController = require("./../../app/controllers/chatRoomController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')


module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/chat`;

    app.post(`${baseUrl}/newroom`,auth.isAuthorized,roomController.createNewChatRoom);

    /**
     * @apiGroup Chatroom
     * @apiVersion  1.0.0
     * @api {post} /api/v1/chat/newroom api for create room.
     * 
     * @apiParam {string} Authorization Authorization token in headers. (Authorization headers) (required)
     * @apiParam {string} title title of the room. (body) (required)
     * @apiParam {string} about about the room. (body) (required)
     * @apiParam {boolean} isActive Active/inactivity of the room. (body) (required)
     *
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
    "error": false,
    "message": "Room created",
    "status": 200,
    "data": {
        "__v": 0,
        "_id": "5b6b25036fc5f733646712b9",
        "isActive": false,
        "createdOn": "2018-08-08T17:14:43.000Z",
        "about": "",
        "title": "123456",
        "roomId": "jS5SUVW6D"
    }

    }
    */

    app.post(`${baseUrl}/edit/:roomId`,auth.isAuthorized, roomController.editRoomInfo);

        /**
     * @apiGroup Chatroom
     * @apiVersion  1.0.0
     * @api {post} /api/v1/chat/edit/:roomId api for edit room.
     * 
     * @apiParam {string} Authorization Authorization token in headers. (Authorization headers) (required)
     * @apiParam {string} roomId roomId of the room. (params) (required)
     * @apiParam {string} title title of the room. (body) (required)
     * @apiParam {string} about about the room. (body) (required)
     * @apiParam {boolean} isActive Active/inactivity of the room. (body) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
    "error": false,
    "message": "Room successfully updated",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
    }
    */

    

    app.get(`${baseUrl}/allchatrooms`,auth.isAuthorized,roomController.getAllRooms);

/**
     * @apiGroup Chatroom
     * @apiVersion  1.0.0
     * @api {get} /api/v1/chat/allchatrooms api for view all chatrooms.
     *
     * @apiParam {string} Authorization Authorization token in headers. (Authorization headers) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
    "error": false,
    "message": "All Chat Rooms",
    "status": 200,
    "data": [
        {
            "isActive": boolean,
            "createdOn": date,
            "about": string,
            "title": string,
            "roomId": string
        },
        ....
*/

    app.get(`${baseUrl}/allchatrooms/:roomId`,auth.isAuthorized,roomController.getRoomInfo);

    /**
     * @apiGroup Chatroom
     * @apiVersion  1.0.0
     * @api {get} /api/v1/chat/allchatrooms/ api for info of the room.
     *
     * @apiParam {string} Authorization Authorization token in headers. (Authorization headers) (required)
     * @apiParam {string} roomId roomid of the room. (params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Chat Room Info",
            "status": 200,
            "data": {
                "isActive": boolean,
                "createdOn": date,
                "about": string,
                "title": string,
                "roomId": string
            }
        }
    */

    app.get(`${baseUrl}/allchatrooms/messages/:roomId`,auth.isAuthorized,roomController.getAllChats);

            /**
     * @apiGroup Chatroom
     * @apiVersion  1.0.0
     * @api {get} /api/v1/chat/allchatrooms/messages/:roomId api for all messages of the room.
     *
     * @apiParam {string} Authorization Authorization token in headers. (Authorization headers) (required)
     * 
     * @apiParam {string} roomId roomid of the room. (params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "All Chat messages",
    "status": 200,
    "data": [
        {
            "chatId": "pv3Jia25O",
            "createdOn": "2018-08-08T11:58:12.454Z",
            "seen": false,
            "roomId": "vTzDpVr3Y",
            "message": "asdad",
            "senderName": "sender"
        },
    */
    
    app.post(`${baseUrl}/deleteroom/:roomId`,auth.isAuthorized, roomController.deleteChatRoom);

                /**
     * @apiGroup Chatroom
     * @apiVersion  1.0.0
     * @api {post} /api/v1/chat/deleteroom/:roomId api for delete room.
     *
     * @apiParam {string} Authorization Authorization token in headers. (Authorization headers) (required)
     * 
     * @apiParam {string} roomId roomid of the room. (params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Room deleted",
    "status": 200,
        "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
    */
}