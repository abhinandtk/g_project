"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showNotification = exports.generateTempArray = exports.stickyHeader = void 0;

var _antd = require("antd");

var _reactRedux = require("react-redux");

var _Constants = _interopRequireDefault(require("~/public/static/data/my-constants/Constants"));

var _Labels = require("~/public/static/data/my-constants/Labels");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stickyHeader = function stickyHeader() {
  var number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var header = document.getElementById('headerSticky');

  if (header !== null) {
    if (number >= 300) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  }
};

exports.stickyHeader = stickyHeader;

var generateTempArray = function generateTempArray(maxItems) {
  var result = [];

  for (var i = 0; i < maxItems; i++) {
    result.push(i);
  }

  return result;
};

exports.generateTempArray = generateTempArray;
{}
/* <ConfigProvider direction="ltr"> */
// const language = useSelector((state) => state.datas.language);
// const labels = Labels(language);

var showNotification = function showNotification(language, messageType, description) {
  var labels = (0, _Labels.Labels)(language);

  _antd.notification.config({
    duration: 2
  });

  if (messageType === "Error") {
    return _antd.notification["error"]({
      message: labels['Error'],
      description: labels['Opps! Something Went Wrong'],
      className: 'notification__custom' // rtl: language === constants.Arabic ?true :false ,

    });
  }

  if (messageType === "Success") {
    return _antd.notification["success"]({
      message: labels['Success'],
      description: description // rtl: language === constants.Arabic ?true :false ,

    });
  }

  if (messageType === _Constants["default"].Sorry) {
    return _antd.notification["warning"]({
      message: labels['Sorry'],
      description: description // rtl: language === constants.Arabic ?true :false ,

    });
  }

  if (messageType === _Constants["default"].Info) {
    return _antd.notification["warning"]({
      message: labels['Sorry'],
      description: description // rtl: language === constants.Arabic ?true :false ,

    });
  }
};

exports.showNotification = showNotification;