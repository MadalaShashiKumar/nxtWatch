import Loader from 'react-loader-spinner'

import {LoaderContainer} from './styleComponent'

const LoaderEl = () => (
  <LoaderContainer className="loader-container">
    <Loader type="ThreeDots" color="#000000" height="50" width="50" />
  </LoaderContainer>
)
export default LoaderEl
