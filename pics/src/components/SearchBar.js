import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onFormSubmit = event => {
    event.preventDefault(); //prevent Enter xong deo ra cai lon gi ca

    this.props.onSubmit(this.state.term);
  };

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Cong Cu Tim Kiem Cam Lan Suc</label>
            <input type="text" value={this.state.term} onChange={(event) => this.setState({ term: event.target.value })}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
