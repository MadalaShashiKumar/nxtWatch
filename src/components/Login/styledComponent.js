import styled from 'styled-components'

export const LoginDiv = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  background-color: transparent;
  width: 320px;
  height: 350px;
  box-shadow: 0px 4px 20px 0px #d7dfe9;
  border-radius: 5px;
  padding: 30px;
`

export const WebsiteLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 10px;
`

export const WebsiteLogo = styled.img`
  width: 100px;
`
export const LoginLabel = styled.label`
  color: #475569;
  font-size: 11px;
`

export const LoginInput = styled.input`
  width: 100%;
  border: #d7dfe9 solid 1px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  outline: none;
`
export const LoginInputTwo = styled.input`
  width: 100%;
  border: #d7dfe9 solid 1px;
  padding: 5px;
  border-radius: 5px;
  outline: none;
`

export const ButtonLogin = styled.button`
  width: 100%;
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 7px;
  margin-top: 20px;
  cursor: pointer;
`

export default styled
