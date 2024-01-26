import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 5%;
  background: ${(props) => props.bgColor};
  @media (min-width: 768px) {
    padding: 5% 10%;
  }
  .outer {
    font-size: 28px;
    color: ${(props) => props.theme.color.blue};
    font-family: ${(props) => props.theme.fam.bold};
    line-height: 43px;
    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 20px;
    font-family: ${(props) => props.theme.fam.regular};
    color: ${(props) => props.color};
    line-height: 27px;
    margin-top: 30px;
    margin-bottom: 50px;
    @media (min-width: 1200px) {
      line-height: 25px;
    }
  }
  h3 {
    color: ${(props) => props.color};
    font-size: 25px;
    @media (min-width: 1200px) {
      font-size: 23px;
    }
  }
  h5 {
    color: ${(props) => props.color};
    font-size: 24px;
    margin-top: 5%;
    @media (min-width: 1200px) {
      font-size: 22px;
      margin-top: 1%;
    }
  }
  .comment {
    font-size: 20px;
    font-family: ${(props) => props.theme.fam.regular};
    color: #898989;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1100px;
  }
`;

function About() {
  const isLight = useSelector((state) => state.theme.isLight);
  return (
    <Wrapper
      bgColor={isLight ? "rgba(243, 243, 243, 0.7)" : "rgba(29, 29, 29, 0.8)"}
      color={isLight ? "#1d1d1d" : "#f3f3f3"}
      id="tools"
    >
      <div className="outer">&lt;wrapper id="about"&gt; </div>
      <p>
        I'm a web developer and UI/UX designer with a passion for creating
        beautiful, functional, and user-centered digital experiences. With 1
        year of experience in the field. I am always looking for new and
        innovative ways to bring my clients visions to life.
      </p>
      <p className="comment">
        // Keep reading for more details on my experience ⬇️
      </p>
      <h3>const Company = Uncommon.org;</h3>
      <h5>const Position = Student</h5> <br />
      <p>const Year = 2023</p>
      <p>
        "I was recruited at a bootcamp through Uncommon.org and learned Frontend
        development. The immersive and interactive helped me to gain a solid
        understanding of HTML, CSS and JavaScript.I'm now able to create
        stunning and user-frendly websites"
      </p>
      <div className="outer">&lt;wrapper&gt; </div>
    </Wrapper>
  );
}

export default About;
