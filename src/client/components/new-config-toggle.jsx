const React = require('react');
const {connect} = require('react-redux');
const actions = require('../actions');

const Toggle = ({handleClick}) => {
  return (
    <button className="button is-white" onClick={() => handleClick()}>
      <span className="icon is-small">
        <i className="fa fa-plus"></i>
      </span>
    </button>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () =>
      dispatch(actions.revealNewConfig()),
  };
}

module.exports = connect(null, mapDispatchToProps)(Toggle);
