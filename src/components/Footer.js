import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { transparentize } from "polished";

const StyledFooter = styled.section`
  color: white;
  margin: 0 auto;
  width: 100%;
  /* height: 100vh; */
  padding-bottom: 1rem;
  padding-top: 1rem;
  /* text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5); */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  font-size: 0.75em;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.colors.bgLight};

  p {
    font-size: inherit;
  }
`;
const FooterLinks = styled.div`
  margin: 1em auto;
  padding: 0 3rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ExternalLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

const FooterLink = styled(Link)`
  /* text-decoration: none; */
  margin: 0.5em 1em;
  /* font-size: 20px; */
  color: white;
  &:visited {
    color: white;
  }
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LogoSerif = styled.div`
  /* width: 400px; */
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 3.45rem;
  margin: -1.05rem 0 0;
`;

const LogoSans = styled.div`
  /* width: 400px; */
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-family: sans-serif;
  line-height: 40px;
`;

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <p>External Resources</p>
        <FooterLinks>
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://coronavirusarmy.org/"
          >
            coronavirusarmy.org
          </ExternalLink>
          {"|"}
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.seattlemakers.org/"
          >
            seattlemakers.org
          </ExternalLink>
          {"|"}
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.endcoronavirus.org/"
          >
            endcoronavirus.org
          </ExternalLink>
          {"|"}
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://findthemasks.com/"
          >
            findthemasks.com
          </ExternalLink>
          {"|"}
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://donatetohospitals.com/"
          >
            donatetohospitals.com
          </ExternalLink>
        </FooterLinks>
        <p></p>

        <a href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </StyledFooter>
    );
  }
}

export default Footer;
