import {
  HomeRouteContainer,
  HomeRouteChannelLogo,
  HomeRouteImg,
  HomeRouteChannelContainer,
  HomeRouteHeading,
  HomePara1,
  HomePara2,
} from './styledComponent'

const HomeRouteDetails = props => {
  const {details} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = details

  return (
    <HomeRouteContainer>
      <HomeRouteImg src={thumbnailUrl} alt="id" />
      <HomeRouteChannelContainer>
        <HomeRouteChannelLogo
          src={channel.profileImageUrl}
          alt={channel.name}
        />
        <div>
          <HomeRouteHeading>{title}</HomeRouteHeading>
          <HomePara1>{channel.name}</HomePara1>
          <HomePara2>
            {viewCount} views . {publishedAt}
          </HomePara2>
        </div>
      </HomeRouteChannelContainer>
    </HomeRouteContainer>
  )
}
export default HomeRouteDetails
