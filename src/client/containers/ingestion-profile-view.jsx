const React = require('react');
const {connect} = require('react-redux');

const View = require('../components/ingestion-profile-view.jsx');
const SourceView = require('./ingestion-profile-source-view.jsx');

const {activeTabSelector} = require('../selectors/ui/ingestion-profile');
const {nameSelector} = require('../selectors/ingestion-profile');

function mapStateToProps(state) {
  return {
    name: nameSelector(state),
    activeTab: activeTabSelector(state),
  };
}

module.exports = connect(mapStateToProps)(
  (props) => <View SourceView={SourceView} {...props} />
);
