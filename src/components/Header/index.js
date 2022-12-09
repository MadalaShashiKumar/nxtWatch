import {HiMoon} from 'react-icons/hi'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  NavHeaderContainer,
  HeaderLogoImg,
  HeaderUserImg,
  HeaderLogoutBtn,
  HeaderDetailsContainer,
} from './styledComponent'

const Header = props => {
  const logoutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  return (
    <NavHeaderContainer>
      <div>
        <HeaderLogoImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </div>
      <HeaderDetailsContainer>
        <div>
          <HiMoon size="20px" />
        </div>

        <HeaderUserImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
          width="20px"
        />
        <div>
          <HeaderLogoutBtn onClick={logoutBtn} type="button">
            Logout
          </HeaderLogoutBtn>
        </div>
      </HeaderDetailsContainer>
    </NavHeaderContainer>
  )
}
export default withRouter(Header)
