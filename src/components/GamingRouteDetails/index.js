import {
  GamingDetailsLi,
  GamingDetailsImg,
  GamingDetailsTitle,
  GamingDetailsCount,
} from './styleComponenet'

const GamingRouteDetails = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <GamingDetailsLi>
      <GamingDetailsImg src={thumbnailUrl} alt={title} />
      <GamingDetailsTitle>{title}</GamingDetailsTitle>
      <GamingDetailsCount>{viewCount} Watching Worldwide</GamingDetailsCount>
    </GamingDetailsLi>
  )
}
export default GamingRouteDetails
