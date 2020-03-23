import React from "react";
import styled from "styled-components";

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
