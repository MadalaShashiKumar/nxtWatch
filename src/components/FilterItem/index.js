import './index.css'

import {Link} from 'react-router-dom'

import {AiFillHome, AiTwotoneFire, AiFillSave} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'

import {
  FilterUl,
  FilterLi,
  FilterPara,
  ContactUsHeading,
  SocialNetworkImg,
  FilterMainContainer,
  FilterIconsDiv,
} from './styledComponent'

const FilterItem = () => (
  <FilterMainContainer>
    <FilterUl>
      <Link to="/" className="link">
        <FilterLi>
          <AiFillHome size="18px" />
          <FilterPara>Home</FilterPara>
        </FilterLi>
      </Link>
      <Link to="/trending" className="link">
        <FilterLi>
          <AiTwotoneFire size="18px" />
          <FilterPara>Trending</FilterPara>
        </FilterLi>
      </Link>
      <Link to="/gaming" className="link">
        <FilterLi>
          <FaGamepad size="18px" />
          <FilterPara>Gaming</FilterPara>
        </FilterLi>
      </Link>
      <Link to="/Saved" className="link">
        <FilterLi>
          <AiFillSave size="18px" />
          <FilterPara>Saved Videos</FilterPara>
        </FilterLi>
      </Link>
    </FilterUl>
    <div>
      <ContactUsHeading>CONTACT US</ContactUsHeading>
      <FilterIconsDiv>
        <SocialNetworkImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <SocialNetworkImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
          alt="twitter logo"
        />
        <SocialNetworkImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt=" linked in logo"
        />
      </FilterIconsDiv>
      <ContactUsHeading>
        Enjoy! Now to see your <br /> channels and <br />
        Recommendations!
      </ContactUsHeading>
    </div>
  </FilterMainContainer>
)
export default FilterItem
