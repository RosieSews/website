import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Img from "gatsby-image";
import Subline from "./Subline";
import { StyledLogoImg } from "../components/Logo";
import logoImg from "../images/logo-icon.png";

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-25%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
  color: ${props => props.color};
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Article = ({
  title,
  date,
  excerpt,
  slug,
  timeToRead,
  categories,
  primaryColor,
  bannerImage
}) => {
  const firstChar = title.charAt(0);
  console.log("primaryColor:", primaryColor);

  return (
    <Post>
      <Title>
        {/* <Initiale color={primaryColor}>{categories[0].split(" ")[0]}</Initiale> */}
        <Link to={slug}>
          {bannerImage ? (
            <Img fluid={bannerImage} />
          ) : (
            <StyledLogoImg
              height={"75%"}
              width={"75%"}
              src={logoImg}
              alt={"rosie sews logo"}
            />
          )}
          {title}
        </Link>
      </Title>
      <Subline>
        {date} | Tags:{" "}
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ", "}
            <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
          </React.Fragment>
        ))}
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired
};
