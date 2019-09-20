import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { setSignUpInfo, signUpStart } from '../../redux/user/user.actions';
import { selectUserSignUpInfo } from '../../redux/user/user.selectors';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  handleSubmit = async event => {
    event.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.props.signUpInfo;

    if (password !== confirmPassword) {
      alert("passwords don't Match");
      return;
    }

    this.props.signUpStart({ email, password, displayName });
  };

  handleChange = event => {
    const { signUpInfo, setSignUpInfo } = this.props;
    const { name, value } = event.target;
    console.log(signUpInfo);
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.props.signUpInfo;
    console.log(this.props.signUpInfo);

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with Your Email and Password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signUpInfo: selectUserSignUpInfo
});

const mapDispatchToProps = dispatch => ({
  setSignUpInfo: userCredentials => dispatch(setSignUpInfo(userCredentials)),
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
