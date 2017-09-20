const {connect} = require('react-redux');
const P = require('bluebird');

const {
  hideNewConfig,
  loadEditConfig,
  setNewConfigName,
  setNewConfigType,
  saveEditConfigAsync,
} = require('../action-creators/edit');

const NewConfig = require('../components/new-config.jsx');

function mapStateToProps(state) {
  const configType = state.getIn(['ui', 'newConfigType']);
  const searchConfigTypes = state.getIn(['search', 'types']);
  const configName = state.getIn(['ui', 'newConfigName']);

  const selectedConfigType = searchConfigTypes.indexOf(configType) >= 0
                           ? configType
                           : searchConfigTypes.first() || '';

  return {
    configTypes: searchConfigTypes,
    selectedConfigType,
    configName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleConfigTypeChange: (event) =>
      dispatch(setNewConfigType(event.target.value)),
    handleConfigNameChange: (event) =>
      dispatch(setNewConfigName(event.target.value)),
    handleCancelButtonClick: () =>
      dispatch(hideNewConfig()),
    handleAddButtonClick: (configType, configName) =>
      P.resolve(dispatch(loadEditConfig(configType, configName, '')))
       .then(() => dispatch(saveEditConfigAsync(configType, configName, '')))
       .then(() => dispatch(setNewConfigName('')))
       .then(() => dispatch(hideNewConfig())),
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(NewConfig);
