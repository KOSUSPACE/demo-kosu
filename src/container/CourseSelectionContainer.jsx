import React, { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "../components/CourseSelection/Carousel";
import LinkButton from "../share/UIElements/LinkButton/LinkButton";
import { pythonData } from "../data/course-selection-data/data";
import { learnlangData } from "../data/course-selection-data/data";
import { foodbevData } from "../data/course-selection-data/data";
import { guitarData} from "../data/course-selection-data/data";
import { beautyData } from "../data/course-selection-data/data";
const initState = {
  name: "Python",
  description:
    "Python is a very popular programming language today and often needs an introduction. It is widely used in various business sectors, such as programming, web development, machine learning, and data science. Given its widespread use, it's not surprising that Python has surpassed Java as the top programming language.You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will...",
};

const contentReducer = (state, action) => {
  switch (action.type) {
    case "Python":
      return {
        name: "Python",
        title: "Upskill your development arsenal with Python",
        description:
          "Python is a very popular programming language today and often needs an introduction. It is widely used in various business sectors, such as programming, web development, machine learning, and data science. Given its widespread use, it's not surprising that Python has surpassed Java as the top programming language. You’ll learn how to build everything from games to sites to apps.",
      };
    case "LearnLanguage":
      return {
        name: "Learning Language",
        title: "Advance your career by learning a second language",
        description:
          "Besides having more chances of landing a good job or advancing in your career, learning a second language can also give you an insight into other cultures. You will be more prepared and confident to travel the world and explore other people's ways of living.",
      };
    case "Guitar":
      return {
        name: "Guitar",
        title: "Playing the guitar is a great way to express your creativity",
        description:
          "The guitar will expand your possibilities and help you grow as a person. It will build your self-confidence in your day-to-day life as you become a more confident player, which is a huge benefit to playing this instrument.",
      };
    case "BeautyMakeup":
      return {
        name: "Beauty & Makeup",
        title: "Learn what it takes to make your entry into the beauty industry",
        description:
          "The beauty industry encompasses sales of cosmetics, perfume, and products for skin and hair care. Worldwide sales of beauty-related products and services are estimated to be in excess of $159 billion US dollars each year. Most research shows that sales to women account for a huge majority of the sum.",
      };
    case "FoodBeverage":
      return {
        name: "Food & Beverage",
        title: "Food Science, Restuarant Business, or Recipes.  It's all here",
        description:
          "The Food and Beverage Industry is diverse, and full of specialized machinery. It’s one of the oldest industries on the planet, but still full of innovation. From new products to higher-volume, lower-cost production techniques, this industry is always looking for new ways to produce the food consumers want at the best possible price.",
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
const CourseSelectionContainer = () => {
  const [triggerElement, setTriggerElement] = useState("Python");
  const [state, dispatch] = useReducer(contentReducer, initState);

  useEffect(() => {
    dispatch({ type: triggerElement });
  }, [triggerElement]);
  return (
    <>
      <H1>Learn & Earn Anything, 🆓:</H1>
      <Subtitle>
        Choose from many online video courses and creators with new additions minted
        weekly 🎉 
      </Subtitle>
      <ButtonContainer>
        <Button
          onClick={() => setTriggerElement("Python")}
          isActive={triggerElement === "Python"}
        >
          Python
        </Button>
        <Button
          onClick={() => setTriggerElement("LearnLanguage")}
          isActive={triggerElement === "LearnLanguage"}
        >
          Learning Language
        </Button>
        <Button
          onClick={() => setTriggerElement("Guitar")}
          isActive={triggerElement === "Guitar"}
        >
          Guitar
        </Button>
        <Button
          onClick={() => setTriggerElement("BeautyMakeup")}
          isActive={triggerElement === "BeautyMakeup"}
        >
          Beauty & Makeup
        </Button>
        <Button
          onClick={() => setTriggerElement("FoodBeverage")}
          isActive={triggerElement === "FoodBeverage"}
        >
          Food & Beverage
        </Button>
      </ButtonContainer>
      <BorderStyle>
        <ExplanationContainer>
          <MainTitle>{state.title}</MainTitle>
          <DiscriptionContainer>{state.description}</DiscriptionContainer>
          <LinkButton color="white" height="4.2rem" width="fit-content">
            Explore {state.name}
          </LinkButton>
        </ExplanationContainer>
        <SliderContainer>
          {triggerElement === "Python" && <Carousel data={pythonData} />}
          {triggerElement === "LearnLanguage" && <Carousel data={learnlangData} />}
          {triggerElement === "Guitar" && <Carousel data={guitarData} />}
          {triggerElement === "BeautyMakeup" && <Carousel data={beautyData} />}
          {triggerElement === "FoodBeverage" && <Carousel data={foodbevData} />}
        </SliderContainer>
      </BorderStyle>
    </>
  );
};

const BorderStyle = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #c4c4c4;
  padding: 2rem;
  margin: 2rem 2.4rem;
  max-width:1340px;
  margin: 50px auto 0;
  padding-left:20px;
  padding-right:20px;
`;

const H1 = styled.h1`
  font-family: var(--suisse-works-alternative);
  font-size: 3.2rem;
  font-weight: 800;
  padding: 6rem 0 0.8rem;
  margin-left: 2.4rem;
  letter-spacing: 0.5px;
  max-width:1340px;
  margin: 0 auto;
  padding-left:20px;
  padding-right:20px;
`;

const ExplanationContainer = styled.div`
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const DiscriptionContainer = styled.div`
  font-size: 1.6rem;
  max-width: 82rem;
`;
const Subtitle = styled.p`
  font-size: 1.9rem;
  padding: 0.8rem 0;
  margin-left: 2.4rem;
  margin-bottom: 1rem;
  max-width:1340px;
  margin: 0 auto;
  padding-left:20px;
  padding-right:20px;
`;
const ButtonContainer = styled.div`
  margin-left: 2.4rem;
  max-width:1340px;
  margin: 0 auto;
  padding-left:20px;
  padding-right:20px;
  padding-top:20px
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  /* color: #787878; */
  color: ${(props) => (props.isActive ? "#000" : "#787878")};
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 2rem;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const MainTitle = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
`;

const SliderContainer = styled.div`
  margin: 2rem;
`;
export default CourseSelectionContainer;

