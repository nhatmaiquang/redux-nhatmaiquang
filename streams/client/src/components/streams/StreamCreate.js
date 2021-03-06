import React from 'react';
import { Field, reduxForm } from 'redux-form';

// const StreamCreate = () => {
class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //console.log(meta);
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
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

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Thêm Title"/>
        <Field name="description" component={this.renderInput} label="Thêm Description"/>
        <button className="ui button primary">Gửi</button>
      </form>
    );
  };
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    //only ran if the user did not enter the title
    errors.title = 'Đm quên ko đặt title à :)';
  }
  if (!formValues.description) {
    errors.description = 'Đm quên ko đặt description à :)';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
