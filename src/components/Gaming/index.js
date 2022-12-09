import {Component} from 'react'

import './index.css'

import Cookies from 'js-cookie'

import {AiTwotoneFire} from 'react-icons/ai'

import Header from '../Header'
import FilterItem from '../FilterItem'
import GamingRouteDetails from '../GamingRouteDetails'
import LoaderEl from '../Loader'

import {
  GamingContainer,
  GamingCard,
  GamingSubContainer,
  GamingSubContainerCard,
  GamingHeadingEl,
  GamingListUl,
} from './styleComponent'

const getSuccessFailureInitial = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingList: [],
    apiStatus: getSuccessFailureInitial.initial,
  }

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedList = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingList: updatedList,
        apiStatus: getSuccessFailureInitial.success,
      })
    }
  }

  renderLoader = () => <LoaderEl />

  renderGamingRoute = () => {
    const {gamingList} = this.state
    return (
      <>
        <Header />
        <GamingCard>
          <div>
            <FilterItem />
          </div>
          <GamingSubContainerCard>
            <GamingSubContainer>
              <div className="trending-contianer">
                <AiTwotoneFire size="30px" className="trending-img" />
              </div>
              <GamingHeadingEl>Gaming</GamingHeadingEl>
            </GamingSubContainer>
            <GamingListUl>
              {gamingList.map(each => (
                <GamingRouteDetails details={each} key={each.id} />
              ))}
            </GamingListUl>
          </GamingSubContainerCard>
        </GamingCard>
      </>
    )
  }

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case getSuccessFailureInitial.initial:
        return this.renderLoader()
      case getSuccessFailureInitial.success:
        return this.renderGamingRoute()
      default:
        return null
    }
  }

  render() {
    const {gamingList} = this.state
    console.log(gamingList)

    return <GamingContainer>{this.renderAll()}</GamingContainer>
  }
}
export default Gaming
