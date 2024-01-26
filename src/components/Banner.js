import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${(props) => props.bgColor};
  transition: all 0.7s ease;
  padding: 0 5%;
  height: 100vh;
  position: relative;
  @media (min-width: 768px) {
    height: 50vh;
    padding: 0 10%;
  }
  @media (min-width: 992px) {
    padding: 0 10%;
  }
  @media (min-width: 1200px) {
    height: 100vh;
  }
  .globe {
    display: none;
    position: absolute;
    right: 7%;
    bottom: 10%;
    @media (min-width: 992px) {
      display: block;
      width: 15%;
      left: unset;
      transform: rotate(0deg);
    }
  }
  h1 {
    font-family: ${(props) => props.theme.fam.bold};
    font-size: 28px;
    color: ${(props) => props.theme.color.blue};
    margin-bottom: 50px;
    padding-top: 40%;
    line-height: 43px;
    @media (min-width: 568px) {
      font-size: 28px;
      margin-bottom: 20px;
      padding-top: 15%;
    }
    @media (min-width: 768px) {
      font-size: 38px;
      padding-top: 25%;
      margin-bottom: 50px;
    }
    @media (min-width: 1200px) {
      padding-top: 18%;
    }
  }
  p {
    color: ${(props) => props.color};
    font-family: ${(props) => props.theme.fam.regular};
    font-size: 20px;
    line-height: 1.5;
    max-width: 850px;

    @media (min-width: 768px) {
      font-size: 25px;
    }
    @media (min-width: 768px) {
      width: 65%;
    }
    @media (min-width: 1200px) {
      width: 65%;
      font-size: 32px;
    }
  }
  img {
    width: 60px;
    transform: rotate(90deg);
    position: absolute;
    bottom: 0;
    left: 0%;
    @media (min-width: 568px) {
      left: unset;
      right: 0;
    }
    @media (min-width: 768px) {
      left: 7%;
      /* width: 80px; */
    }
    @media (min-width: 1200px) {
      left: 7%;
      width: 100px;
    }
  }
`;

function Banner() {
  const isLight = useSelector(state => state.theme.isLight);
  return (
    <Wrapper
      bgColor={isLight ? "rgba(243, 243, 243, 0.7)" : "rgba(29, 29, 29, 0.8)"}
      color={isLight ? "#1d1d1d" : "#f3f3f3"}
    >
      <h1>Hello, I'm Tonderai 👋</h1>

      <p>
        I'm a Frontend developer, dedicated to turning ideas into innovative web
        applications. Explore my latest projects, showcasing my expertise in web
        development.
      </p>
      <img className="globe" src="./images/projects/globe.svg" alt="bulb" />
      <img src={!isLight ? "./gifs/white.gif" : "./gifs/black.gif"} alt="" />
    </Wrapper>
  );
}

export default Banner