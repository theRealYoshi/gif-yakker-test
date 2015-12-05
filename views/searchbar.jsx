var React = require('react');

var SearchBar = React.createClass({
  getInitialState: function(){
    return {inputVal: ""};
  },
  _handleInput: function(event){
    event.preventDefault();
    console.log(event.currentTarget.value);
    console.log("typing");
  },
  _handleSubmit: function(event){
    event.preventDefault();
    console.log("submitted");
  },
  render: function() {
    return (
        <div className='search'>
          <div className='searchBar'>
            <form className='searchBar-form' onSubmit={this._handleSubmit}>
              <input
                className='search-query'
                id='search-input'
                onChange={this._handleInput}
                placeholder="Search Tag Name Or Album Name"
                value={this.state.inputVal}/>
            </form>
          </div>
          {this.props.children}
        </div>
      );
  }
});

module.exports = SearchBar;
