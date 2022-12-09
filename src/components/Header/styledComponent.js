import styled from 'styled-components'

export const NavHeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 80px;
  margin-right: 80px;
`
export const HeaderDetailsContainer = styled.div`
  padding-top: 0px;
  display: flex;
`

export const HeaderLogoImg = styled.img`
  width: 100px;
`
export const HeaderUserImg = styled.img`
  margin-left: 20px;
  margin-right: 20px;
  width: 20px;
  height: 20px;
  margin-top: 2px;
`
export const HeaderLogoutBtn = styled.button`
  background-color: #4f46e5;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  color: #ffffff;
  font-size: 10px;
  padding: 5px;
`
export default styled
