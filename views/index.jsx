var React = require('react');
var jsx = require('node-jsx');
var SearchBar = require('./searchbar')
var DefaultLayout = require('./layouts/default');

var App = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <SearchBar />
      </DefaultLayout>
    );
  }
});


module.exports = App;
