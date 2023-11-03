"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rootSaga;

var _effects = require("redux-saga/effects");

var _antd = require("antd");

var _action = require("./action");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(loginSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(logOutSaga),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

var modalSuccess = function modalSuccess(type) {
  _antd.notification[type]({
    message: 'Wellcome back',
    description: 'You are login successful!'
  });
};

var modalWarning = function modalWarning(type) {
  _antd.notification[type]({
    message: 'Good bye!',
    description: 'Your account has been logged out!'
  });
};

function loginSaga() {
  return regeneratorRuntime.wrap(function loginSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)((0, _action.loginSuccess)());

        case 3:
          modalSuccess('success');
          _context.next = 8;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 6]]);
}

function logOutSaga() {
  return regeneratorRuntime.wrap(function logOutSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.put)((0, _action.logOutSuccess)());

        case 3:
          modalWarning('warning');
          _context2.next = 8;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 6]]);
}

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.all)([(0, _effects.takeEvery)(_action.actionTypes.LOGIN_REQUEST, loginSaga)]);

        case 2:
          _context3.next = 4;
          return (0, _effects.all)([(0, _effects.takeEvery)(_action.actionTypes.LOGOUT, logOutSaga)]);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}