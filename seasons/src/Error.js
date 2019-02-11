import './Error.css';
import React from 'react';

const Error = props => {
  return (
    <div className = "error-display">
      <i className = "massive exclamation triangle icon"/>
      <h1>Dit me may ngu vai lon: {props.err}</h1>
    </div>
  );
};

export default Error;
