import {
  TrendingLiContainer,
  TrendingImgDetail,
  TrendingImgDetailContainer,
  TrendingTitleDetail,
  TrendingChannelName,
  TrendingCountName,
} from './styleComponent'

const TrendingRouteDetails = props => {
  const {details} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
  return (
    <TrendingLiContainer>
      <TrendingImgDetailContainer>
        <TrendingImgDetail src={thumbnailUrl} alt={channel} />
      </TrendingImgDetailContainer>
      <div>
        <TrendingTitleDetail>{title}</TrendingTitleDetail>
        <TrendingChannelName>{channel.name}</TrendingChannelName>
        <TrendingCountName>
          {viewCount} views . {publishedAt}
        </TrendingCountName>
      </div>
    </TrendingLiContainer>
  )
}
export default TrendingRouteDetails
