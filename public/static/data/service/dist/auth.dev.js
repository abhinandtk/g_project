"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _router = _interopRequireWildcard(require("next/router"));

var _commonHelpers = require("~/utilities/common-helpers");

var _firebaseConfig = _interopRequireDefault(require("../config/firebase-config"));

var _Api = _interopRequireDefault(require("../my-constants/Api"));

var _Constants = _interopRequireDefault(require("../my-constants/Constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Login = function Login(email, id, name) {
  _axios["default"].post(_Api["default"].socialRegistration, {
    language: "English",
    social_authId: id,
    name: name,
    email: email
  }).then(function (res) {
    if (res.data.status === 1) {
      localStorage.setItem("session_id", res.data.data.details.session_id);
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("refer-code", res.data.data.details.refercode);
      dispatch(updateNavbar(true));
      (0, _commonHelpers.showNotification)(_Constants["default"].Success, res.data.message);
      window.location.assign('/');
    } else {
      (0, _commonHelpers.showNotification)(_Constants["default"].Info, res.data.message);
    }
  })["catch"](function (err) {
    (0, _commonHelpers.showNotification)(_Constants["default"].Error);
  });
};

var socialMediaAuth = function socialMediaAuth(provider) {
  return _firebaseConfig["default"].auth().signInWithPopup(provider).then(function (res) {
    return res.user, Login(res.additionalUserInfo.profile.email, res.additionalUserInfo.profile.id, res.additionalUserInfo.profile.name);
  })["catch"](function (err) {
    return err;
  });
};

var _default = socialMediaAuth;
exports["default"] = _default;