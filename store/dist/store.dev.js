"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _rootReducer = _interopRequireDefault(require("./rootReducer"));

var _rootSaga = _interopRequireDefault(require("./rootSaga"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var bindMiddleware = function bindMiddleware(middleware) {
  if (process.env.NODE_ENV !== 'production') {
    var _require = require('redux-devtools-extension'),
        composeWithDevTools = _require.composeWithDevTools;

    return composeWithDevTools(_redux.applyMiddleware.apply(void 0, _toConsumableArray(middleware)));
  }

  return _redux.applyMiddleware.apply(void 0, _toConsumableArray(middleware));
};

var persistConfig = {
  key: 'martfury',
  storage: _storage["default"],
  whitelist: ['cart', 'compare', 'auth', 'wishlist', 'abcd']
};
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, _rootReducer["default"]);

function configureStore(initialState) {
  var sagaMiddleware = (0, _reduxSaga["default"])();
  var store = (0, _redux.createStore)(persistedReducer, initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_rootSaga["default"]);
  return store;
}

var _default = configureStore;
exports["default"] = _default;