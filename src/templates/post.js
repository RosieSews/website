import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { StyledLogoImg } from "../components/Logo";
import logoImg from "../images/logo-icon.png";

import { Layout, Wrapper, Header, Subline, SEO, PrevNext } from "../components";
import {
  components as UI,
  StyledH3,
  SecondaryH2,
  StyledSubHeading
} from "../components/StyledElements";
import config from "../../config";

const Content = styled.article`
  grid-column: 2;
  max-width: 1000px;
  border-radius: 1rem;
  padding: 2rem 4.5rem;
  ${"" /* background-color: ${props => props.theme.colors.bg}; */}
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    letter-spacing: -0.003em;
    line-height: 1.58;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }

  .prism-code {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const BannerCredit = styled.p`
  ${"" /* font-size: 0.7em; */}
  font-size: 0.5em;

  color: white;
  background-color: black;
  z-index: 10000;
  transform-style: preserve-3d;
  transform: translate(0, 2.5em) translateZ(10em);
`;

const BannerImg = styled(Img)`
  z-index: -1;
  transform-style: preserve-3d;
  transform: translateZ(-1em);
`;

const StyledHomeLink = styled(Link)`
  display: block;
  margin: auto;
  text-align: center;
`;

const Post = ({
  pageContext: { slug, prev, next, bannerCredit, banner },
  data: { mdx: postNode }
}) => {
  const post = postNode.frontmatter;
  const primaryColor = post.primaryColor;
  const secondaryColor = post.secondaryColor;

  return (
    <Layout customSEO>
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} article />
        {/* <Header></Header> */}
        <Content>
          <StyledHomeLink to="/">
            <StyledLogoImg
              height={"75%"}
              width={"75%"}
              src={logoImg}
              alt={"rosie sews logo"}
            />
          </StyledHomeLink>
          <SecondaryH2>{post.subTitle}</SecondaryH2>
          <StyledSubHeading>{`Rosie Sews Update | posted: ${post.date}`}</StyledSubHeading>
          <PostContent>
            {/* <BannerCredit>{post.bannerCredit}</BannerCredit> */}
            {/* <BannerImg fluid={post.banner.childImageSharp.fluid} /> */}
            <MDXProvider components={UI}>
              <MDXRenderer>{postNode.body}</MDXRenderer>
            </MDXProvider>
            {post.date} {` | `} TAGS:{" "}
            {post.categories.map((cat, i) => (
              <React.Fragment key={cat}>
                {!!i && ", "}
                <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
              </React.Fragment>
            ))}
          </PostContent>
          <PrevNext prev={prev} next={next} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
    bannerCredit: PropTypes.string
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired
  }).isRequired
};

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null
  })
};

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        subTitle
        date(formatString: "MM/DD/YYYY")
        categories
        primaryColor
        secondaryColor
        keywords
        # bannerCredit
        # banner {
        #   ...bannerImage720
        # }
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`;
