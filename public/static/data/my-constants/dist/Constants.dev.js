"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var session_id;
var userName, language, rewardPoint, email, productVariantId, quantity;

if (typeof window !== 'undefined') {
  if (localStorage.getItem("language") === null) {
    language = "english";
  }

  if (localStorage.getItem("language") !== null) {
    language = localStorage.getItem("language");
  }

  session_id = localStorage.getItem("session_id");
  userName = localStorage.getItem("name");
  rewardPoint = localStorage.getItem("rewardPoint");
  email = localStorage.getItem("email");
  productVariantId = JSON.parse(localStorage.getItem('productVariantId'));
  quantity = JSON.parse(localStorage.getItem('quantity'));
} else {
  session_id = null;
  userName = null;
  language = "english";
  rewardPoint = null;
  email = null;
  productVariantId = null;
  quantity = null;
}

var constants = {
  port: "http://192.168.1.17:3000",
  // 'port':"http://139.59.46.10",
  // port:"https://devapp.zainbay.com",
  // port:"https://zainbay.9pc.in",  
  // 'port':"http://ec2-13-126-159-163.ap-south-1.compute.amazonaws.com",
  // 'port':"https://beautydev.9pc.in",
  'ZAINBAY': 'ZAINBAY',
  'sessionId': session_id,
  'userName': userName,
  'email': email,
  "English": "english",
  "Arabic": "arabic",
  "primaryColor": '#00438b',
  "secondaryColor": '#ef2c1e',
  'language': "english",
  'rewardPoint': rewardPoint,
  "productVariantId": productVariantId,
  "quantity": quantity,
  "oops something went wrong": "oops something went wrong",
  "Error": "Error",
  "Success": "Success",
  "Sorry": "Sorry",
  "Info": "Info"
};
var _default = constants;
exports["default"] = _default;