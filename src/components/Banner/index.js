import {Component} from 'react'

import {ImCancelCircle} from 'react-icons/im'

import {
  BannerContainer,
  BannerImg,
  BannerBtn,
  BannerHeading,
  BannerDetailsDiv,
  BannerCancelImg,
  BannerCancelBtn,
} from './styledComponent'

class Banner extends Component {
  state = {
    clear: true,
  }

  clearBtn = () => {
    this.setState({clear: false})
  }

  render() {
    const {clear} = this.state

    return (
      <>
        {clear && (
          <BannerCancelImg>
            <BannerDetailsDiv>
              <BannerImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
              <BannerHeading>
                Buy Nxt Watch Premium prepaid plans with <br /> UPI
              </BannerHeading>
              <div>
                <BannerBtn type="button">GET IT KNOW</BannerBtn>
              </div>
            </BannerDetailsDiv>
            <BannerCancelImg>
              <BannerCancelBtn onClick={this.clearBtn} type="button">
                <ImCancelCircle />
              </BannerCancelBtn>
            </BannerCancelImg>
          </BannerCancelImg>
        )}
      </>
    )
  }
}

export default Banner
