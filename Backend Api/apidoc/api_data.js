define({ "api": [
  {
    "group": "Chatroom",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/allchatrooms",
    "title": "api for view all chatrooms.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token in headers. (Authorization headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n\"error\": false,\n\"message\": \"All Chat Rooms\",\n\"status\": 200,\n\"data\": [\n    {\n        \"isActive\": boolean,\n        \"createdOn\": date,\n        \"about\": string,\n        \"title\": string,\n        \"roomId\": string\n    },\n    ....",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatRoom.js",
    "groupTitle": "Chatroom",
    "name": "GetApiV1ChatAllchatrooms"
  },
  {
    "group": "Chatroom",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/allchatrooms/",
    "title": "api for info of the room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token in headers. (Authorization headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>roomid of the room. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Chat Room Info\",\n    \"status\": 200,\n    \"data\": {\n        \"isActive\": boolean,\n        \"createdOn\": date,\n        \"about\": string,\n        \"title\": string,\n        \"roomId\": string\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatRoom.js",
    "groupTitle": "Chatroom",
    "name": "GetApiV1ChatAllchatrooms"
  },
  {
    "group": "Chatroom",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/allchatrooms/messages/:roomId",
    "title": "api for all messages of the room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token in headers. (Authorization headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>roomid of the room. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\"error\": false,\n\"message\": \"All Chat messages\",\n\"status\": 200,\n\"data\": [\n    {\n        \"chatId\": \"pv3Jia25O\",\n        \"createdOn\": \"2018-08-08T11:58:12.454Z\",\n        \"seen\": false,\n        \"roomId\": \"vTzDpVr3Y\",\n        \"message\": \"asdad\",\n        \"senderName\": \"sender\"\n    },",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatRoom.js",
    "groupTitle": "Chatroom",
    "name": "GetApiV1ChatAllchatroomsMessagesRoomid"
  },
  {
    "group": "Chatroom",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/chat/deleteroom/:roomId",
    "title": "api for delete room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token in headers. (Authorization headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>roomid of the room. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Room deleted\",\n    \"status\": 200,\n        \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatRoom.js",
    "groupTitle": "Chatroom",
    "name": "PostApiV1ChatDeleteroomRoomid"
  },
  {
    "group": "Chatroom",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/chat/edit/:roomId",
    "title": "api for edit room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token in headers. (Authorization headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>roomId of the room. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the room. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "about",
            "description": "<p>about the room. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Active/inactivity of the room. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n\"error\": false,\n\"message\": \"Room successfully updated\",\n\"status\": 200,\n\"data\": {\n    \"n\": 1,\n    \"nModified\": 1,\n    \"ok\": 1\n}\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatRoom.js",
    "groupTitle": "Chatroom",
    "name": "PostApiV1ChatEditRoomid"
  },
  {
    "group": "Chatroom",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/chat/newroom",
    "title": "api for create room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token in headers. (Authorization headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the room. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "about",
            "description": "<p>about the room. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Active/inactivity of the room. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n\"error\": false,\n\"message\": \"Room created\",\n\"status\": 200,\n\"data\": {\n    \"__v\": 0,\n    \"_id\": \"5b6b25036fc5f733646712b9\",\n    \"isActive\": false,\n    \"createdOn\": \"2018-08-08T17:14:43.000Z\",\n    \"about\": \"\",\n    \"title\": \"123456\",\n    \"roomId\": \"jS5SUVW6D\"\n}\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatRoom.js",
    "groupTitle": "Chatroom",
    "name": "PostApiV1ChatNewroom"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "to logout user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetpassword",
    "title": "to create token for password reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Enter token to change the password\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetpassword/:token",
    "title": "to reset password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>newpassword of the user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token emailed to the user. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"password successfully changed\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpasswordToken"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>first name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>last name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n        \"error\": false,\n        \"message\": \"User created\",\n        \"status\": 200,\n        \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5b6b218d6fc5f733646712b7\",\n        \"createdOn\": \"2018-08-08T16:59:57.000Z\",\n        \"mobileNumber\": 123123,\n        \"email\": \"q1234@g.com\",\n        \"lastName\": \"asd\",\n        \"firstName\": \"asd\",\n        \"userId\": \"QdUwmnFm0\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
