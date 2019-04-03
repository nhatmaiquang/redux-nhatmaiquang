import React from 'react';
import { Field, reduxForm } from 'redux-form';

// const StreamCreate = () => {
class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
    /*
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );*/
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Thêm Title"/>
        <Field name="description" component={this.renderInput} label="Thêm Description"/>
      </form>
    );
  };
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
