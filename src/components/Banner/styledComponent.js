import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 250px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 35px;
`
export const BannerImg = styled.img`
  width: 80px;
`
export const BannerHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 15px;
`
export const BannerBtn = styled.button`
  background-color: transparent;
  border: #475569 solid 2px;
  width: 75px;
  font-family: 'Roboto';
  font-size: 10px;
  padding: 4px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
`

export const BannerDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const BannerCancelImg = styled.div`
  padding-top: 30px;
  padding-right: 20px;
`
export const BannerCancelBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export default styled
