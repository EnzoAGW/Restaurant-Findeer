import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 8px;
  padding: 16px;
  background-color: #ffffff;
  transition: 400ms;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left: 8px solid ${(props) => props.theme.colors.primary};
  }
`;
export const RestaurantInfo = styled.div`
  display:flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) =>props.theme.colors.text};
  font-size:24px;
  font-weight: bold;
  line-height: 29px;
`;
export const Address = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) =>props.theme.colors.text};
font-size:15px;
line-height: 19px;
margin: 10px 0  ;

`;
export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;