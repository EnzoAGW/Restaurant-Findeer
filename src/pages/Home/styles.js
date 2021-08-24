import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: scroll;
`;
export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
`;
export const Map = styled.div`
  width: 50vw;
  height:50vh;
`;
export const Carosel = styled(Slider)`
  .slick-slide {
    margin-right: 19px;
  }
`;
export const CarousselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  margin: 16px 0px;
`;
