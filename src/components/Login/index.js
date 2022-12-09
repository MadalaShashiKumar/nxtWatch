import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginDiv,
  LoginCard,
  WebsiteLogo,
  WebsiteLogoContainer,
  LoginInput,
  LoginLabel,
  ButtonLogin,
  LoginInputTwo,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.push('/')
  }

  loginBtn = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  userNameEl = event => {
    this.setState({username: event.target.value})
  }

  passwordEl = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginDiv>
        <LoginCard>
          <WebsiteLogoContainer>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </WebsiteLogoContainer>
          <form onSubmit={this.loginBtn}>
            <LoginLabel htmlFor="username"> USERNAME </LoginLabel>
            <LoginInput
              onChange={this.userNameEl}
              type="text"
              placeholder="Username"
              id="username"
            />
            <LoginLabel htmlFor="password"> PASSWORD </LoginLabel>
            <LoginInputTwo
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.passwordEl}
            />

            <input type="checkbox" id="checkbox" />
            <LoginLabel htmlFor="checkbox"> Show Password </LoginLabel>
            <ButtonLogin type="submit">Login</ButtonLogin>
          </form>
        </LoginCard>
      </LoginDiv>
    )
  }
}
export default Login
