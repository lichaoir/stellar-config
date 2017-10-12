const {createStore, applyMiddleware} = require('redux');
const {combineReducers} = require('redux-immutable');
const thunk = require('redux-thunk').default;

module.exports = createStore(
  combineReducers({
    ui: require('./reducers/ui'),
    graphSchema: require('./reducers/graph-schema'),
    ingestionProfile: require('./reducers/ingestion-profile'),
  }),
  applyMiddleware(thunk)
);
