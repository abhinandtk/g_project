"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rootSaga;

var _effects = require("redux-saga/effects");

var _action = require("./action");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(switchDemoPanel),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function switchDemoPanel(_ref) {
  var payload;
  return regeneratorRuntime.wrap(function switchDemoPanel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _ref.payload;
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.put)((0, _action.switchDemoPanelSuccess)(payload));

        case 4:
          _context.next = 8;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](1);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 6]]);
}

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.all)([(0, _effects.takeEvery)(_action.actionTypes.SWITCH_DEMO_PANEL, switchDemoPanel)]);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}