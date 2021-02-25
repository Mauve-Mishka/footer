import React from 'react';
import $ from 'jquery';
//import styled from 'styled-components';
const {styled} = window;
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
//import '../dist/styles.css';
import {FacebookOutlined, TwitterOutlined, InstagramOutlined} from '@ant-design/icons';

const FooterContainer = styled.div`
  font-family: Roboto;
  font-size: 14px;
  background-color: #F0F0F0;
  width:100%;
  height: 500px;
`;

const FooterTable = styled.table`

  width: 100%;
  margin-left: 42px;
  margin-right: 130px;
  margin-top: 24px;
  color: 	#303030;

`;

const FooterTableDivision = styled.td`
  height: 30px;
  cursor: pointer;

`;

const FooterTableHeader = styled.thead`
  font-weight: 700;
`;

const BottomBarDiv = styled.div`
  padding-top: 24px;
  margin-top: 24px;
  padding-bottom:24px;
  display:flex;
  margin-left: 42px;
  margin-right: 130px;
  justify-content:space-between;
  width:90%;
  &:hover {
    text-decoration: underline;
  }
  border-top: 1px solid #DDDDDD;
`;

const BottomLeft = styled.div`
color: 	#303030;
`;

const SocialLanguageCurrency = styled.div`

  display:flex;
  font-weight: 700;
  width: 270px;
  justify-content:space-between;
  color: black;
`;

const LanguageCurrency = styled.div`
width: 193px;
float:left;
`;

const Social = styled.div`
  width: 102px;
  font-size: 20px;
  display:flex;
  justify-content:space-between;
`;




class Footer extends React.Component {
  render() {
    return <FooterContainer>
      <FooterTable>
        <FooterTableHeader>
          <FooterTableDivision>ABOUT</FooterTableDivision>
          <FooterTableDivision>COMMUNITY</FooterTableDivision>
          <FooterTableDivision>HOST</FooterTableDivision>
          <FooterTableDivision>SUPPORT</FooterTableDivision>
        </FooterTableHeader>
        <tbody>
          <tr>
            <FooterTableDivision>How Airbnb works</FooterTableDivision>
            <FooterTableDivision>Diversity and Belonging</FooterTableDivision>
            <FooterTableDivision>Host your home</FooterTableDivision>
            <FooterTableDivision>Our COVID-19 Response</FooterTableDivision>
          </tr>
          <tr>
            <FooterTableDivision>Newsroom</FooterTableDivision>
            <FooterTableDivision>Against Discrimination</FooterTableDivision>
            <FooterTableDivision>Host an Online Experience</FooterTableDivision>
            <FooterTableDivision>Help Center</FooterTableDivision>
          </tr>
          <tr>
            <FooterTableDivision>Investors</FooterTableDivision>
            <FooterTableDivision>Accessibility</FooterTableDivision>
            <FooterTableDivision>Host an Experience</FooterTableDivision>
            <FooterTableDivision>Cancellation options</FooterTableDivision>
          </tr>
          <tr>
            <FooterTableDivision>Airbnb Plus</FooterTableDivision>
            <FooterTableDivision>Airbnb Associates</FooterTableDivision>
            <FooterTableDivision>Responsible hosting</FooterTableDivision>
            <FooterTableDivision>Neighborhood Support</FooterTableDivision>
          </tr>
          <tr>
            <FooterTableDivision>Airbnb Luxe</FooterTableDivision>
            <FooterTableDivision>Frontline Stays</FooterTableDivision>
            <FooterTableDivision>Refer hosts</FooterTableDivision>
            <FooterTableDivision>Trust and Safety</FooterTableDivision>
          </tr>
          <tr>
            <FooterTableDivision>HotelTonight</FooterTableDivision>
            <FooterTableDivision>Invite friends</FooterTableDivision>
            <FooterTableDivision>Resource Center</FooterTableDivision>
            <FooterTableDivision></FooterTableDivision>
          </tr>
          <tr>
            <FooterTableDivision>Airbnb for Work</FooterTableDivision>
            <FooterTableDivision>Gift cards</FooterTableDivision>
            <FooterTableDivision>Community Center</FooterTableDivision>
            <FooterTableDivision></FooterTableDivision>
          </tr>
          <tr>
            <FooterTableDivision>Olympics</FooterTableDivision>
            <FooterTableDivision>Airbnb.org</FooterTableDivision>
            <FooterTableDivision></FooterTableDivision>
            <FooterTableDivision></FooterTableDivision>
          </tr>
          <tr>
            <FooterTableDivision>Olympics</FooterTableDivision>
            <FooterTableDivision>Airbnb.org</FooterTableDivision>
            <FooterTableDivision></FooterTableDivision>
            <FooterTableDivision></FooterTableDivision>
          </tr>
          <tr>
            <FooterTableDivision>Careers</FooterTableDivision>
            <FooterTableDivision></FooterTableDivision>
            <FooterTableDivision></FooterTableDivision>
            <FooterTableDivision></FooterTableDivision>
          </tr>
        </tbody>
      </FooterTable>
      <BottomBarDiv>
        <BottomLeft>{`© 2021 Airbnb, Inc. All rights reserved · Privacy · Terms · Sitemap`}</BottomLeft>
        <SocialLanguageCurrency><LanguageCurrency>{`English (US)    $ USD       `}</LanguageCurrency><Social><FacebookOutlined /><TwitterOutlined /><InstagramOutlined /></Social></SocialLanguageCurrency>
      </BottomBarDiv>
    </FooterContainer>;
  }
}

export default Footer;