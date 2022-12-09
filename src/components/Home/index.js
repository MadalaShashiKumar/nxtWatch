import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  HomeCard,
  HomeDivContainer,
  HomeMainContainer,
  HomeSubCard,
} from './styledComponent'

import Header from '../Header'
import FilterItem from '../FilterItem'
import HomeRouteDetails from '../HomeRouteDetails'
import Banner from '../Banner'
import LoaderEl from '../Loader'

const getSuccessFailureInitial = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeList: [],
    apiStatus: getSuccessFailureInitial.initial,
  }

  componentDidMount() {
    this.getHomeList()
  }

  getHomeList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all'
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
        homeList: updatedList,
        apiStatus: getSuccessFailureInitial.success,
      })
    }
  }

  renderLoader = () => <LoaderEl />

  renderHomeRoute = () => {
    const {homeList} = this.state
    return (
      <>
        <Header />
        <HomeCard>
          <div>
            <FilterItem />
          </div>
          <HomeSubCard>
            <Banner />
            <HomeDivContainer>
              {homeList.map(each => (
                <HomeRouteDetails details={each} key={each.id} />
              ))}
            </HomeDivContainer>
          </HomeSubCard>
        </HomeCard>
      </>
    )
  }

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case getSuccessFailureInitial.initial:
        return this.renderLoader()
      case getSuccessFailureInitial.success:
        return this.renderHomeRoute()
      default:
        return null
    }
  }

  render() {
    const JwtToken = Cookies.get('jwt_token')
    if (JwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return <HomeMainContainer>{this.renderAll()}</HomeMainContainer>
  }
}
export default Home
