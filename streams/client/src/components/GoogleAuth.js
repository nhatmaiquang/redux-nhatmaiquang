import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '939264010044-2bitp5uis601mamg6d3f1g8imlba2oom.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>Google Auth</div>
    );
  }
}

export default GoogleAuth;
