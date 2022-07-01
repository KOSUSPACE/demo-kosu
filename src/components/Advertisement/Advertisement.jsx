import React from 'react';
import styled from "styled-components";
import LinkButton from '../../share/UIElements/LinkButton/LinkButton';


const AdvertisementContainer = styled.div`
  margin: 0;
  margin-top: 6.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`
const AdvertisementSection = styled.div`
  padding: 4rem 0;
  width: 100%;
  max-width: 134rem;
  margin-right: auto;
  margin-left: auto;
`
const AdvertisementContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32rem;
`
const AdvertisementWrapper = styled.div`
  display: flex;
  padding: 0;
`
const AdvertisementImg = styled.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: contain;
  max-width: 100%;
  margin: 0 9.6rem 0 0;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  max-width: 40rem;
`
const DescriptionHeading = styled.h3`
  font-family: var(--suisse-works-alternative);
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.25;
  letter-spacing: -.05rem;
  margin-bottom: 0.8rem;
`
const DescriptionPara = styled.p`
  font-size: 1.9rem;
  margin-top: 0;
  margin-bottom: 1.6rem;
  font-weight: 400;
  line-height: 1.4;
`
const AdvertisementWrapper2 = styled.div`
  display: flex;
  padding: 0;
`
const AdvertisementImg2 = styled.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: contain;
  max-width: 100%;
  margin: 0;
`
const Description2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  max-width: 40rem;
  margin: 0 9.6rem 0 0;
`
const Advertisement3 = styled.div`
  margin: 6.4rem 0 9.6rem 0;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`
const Advertisement = () => {
  return (
    <>
    <AdvertisementContainer>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper>
            <AdvertisementImg src="/images/advertisement/instructor-2x-v3.png" />
            <Description>
              <DescriptionHeading>Create with us! 📽</DescriptionHeading>
              <DescriptionPara>Creators from around the world teach thousands of learners on KŌSU. We provide the tools and skills to earn Crypto by teaching what you love.</DescriptionPara>
              <div>
                <LinkButton height='4.8rem'>Launch a Course</LinkButton>
              </div>
            </Description>
          </AdvertisementWrapper>
        </AdvertisementContain>
      </AdvertisementSection>
    </AdvertisementContainer>

    <AdvertisementContainer>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper2>
            <Description2>
            <DescriptionHeading>Sponsorships 🚀</DescriptionHeading>
              <DescriptionPara>Sponsor your favorite creators, and provide bounties for specifc educational content.</DescriptionPara>
              <div>
                <LinkButton height='4.8rem'>Learn More</LinkButton>
              </div>
            </Description2>
            <AdvertisementImg2 src="/images/advertisement/ub-2x-v3.png" />
          </AdvertisementWrapper2>
        </AdvertisementContain>
      </AdvertisementSection>
    </AdvertisementContainer>

    <Advertisement3>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper>
          <AdvertisementImg src="/images/advertisement/transform-2x-v3.png" />
            <Description>
            <DescriptionHeading>Reskill & Upskill! 🛠</DescriptionHeading>
              <DescriptionPara>Learners around the world are earning Crypto while launching new careers, advancing in their fields, and enriching their lives.</DescriptionPara>
              <div>
                <LinkButton height='4.8rem'>Join Now</LinkButton>
              </div>
            </Description>
          </AdvertisementWrapper>
        </AdvertisementContain>
      </AdvertisementSection>
    </Advertisement3>
    </>
  )
}

export default Advertisement
