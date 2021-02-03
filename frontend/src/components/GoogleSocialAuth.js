import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class GoogleSocialAuth extends Component {
  render() {
    const googleResponse = (response) => {
      console.log(response);
    };
    return (
      <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>

        <GoogleLogin
          clientId="254339929962-cokd2a32q3he1638v2dal6aj56g2qage.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default GoogleSocialAuth;
