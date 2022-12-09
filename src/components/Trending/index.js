import {Component} from 'react'

import './index.css'

import {AiTwotoneFire} from 'react-icons/ai'
import Cookies from 'js-cookie'

import Header from '../Header'
import FilterItem from '../FilterItem'
import TrendingRouteDetails from '../TrendingRouteDetails'
import LoaderEl from '../Loader'

import {
  TrendingContainer,
  TrendingCard,
  TrendingImgHeading,
  TrendingHeadingContainer,
  TrendingHeading,
  TrendingUl,
} from './styleComponent'

const getSuccessFailureInitial = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingList: [],
    apiStatus: getSuccessFailureInitial.initial,
  }

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        trendingList: updatedList,
        apiStatus: getSuccessFailureInitial.success,
      })
    }
  }

  renderTrendingRoute = () => {
    const {trendingList} = this.state
    return (
      <>
        <Header />
        <TrendingCard>
          <div>
            <FilterItem />
          </div>
          <TrendingHeadingContainer>
            <TrendingImgHeading>
              <div className="trending-contianer">
                <AiTwotoneFire size="30px" className="trending-img" />
              </div>
              <TrendingHeading>Trending</TrendingHeading>
            </TrendingImgHeading>
            <TrendingUl>
              {trendingList.map(each => (
                <TrendingRouteDetails details={each} key={each.id} />
              ))}
            </TrendingUl>
          </TrendingHeadingContainer>
        </TrendingCard>
      </>
    )
  }

  renderLoader = () => <LoaderEl />

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case getSuccessFailureInitial.initial:
        return this.renderLoader()
      case getSuccessFailureInitial.success:
        return this.renderTrendingRoute()
      default:
        return null
    }
  }

  render() {
    return <TrendingContainer>{this.renderAll()}</TrendingContainer>
  }
}
export default Trending
