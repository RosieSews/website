import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import FancyHeader from "../components/FancyHeader";

import { Layout, SEO, PrevNext, Content, Wrapper } from "../components";
import {
  components as UI,
  SecondaryH2,
  StyledSubHeading
} from "../components/StyledElements";

const PostContent = styled.div`
  text-align: left;
  margin: 2rem auto;
`;

const PostMeta = styled.div`
  text-align: center;
`;

const Post = ({
  pageContext: { slug, prev, next, bannerCredit, banner },
  data: { mdx: postNode }
}) => {
  const post = postNode.frontmatter;

  return (
    <Layout customSEO>
      <Wrapper>
        <>
          <SEO postPath={slug} postNode={postNode} article />
          <FancyHeader />
          <Content>
            <SecondaryH2>{post.subTitle}</SecondaryH2>
            <StyledSubHeading>{`MasksNOW Update | last updated: ${post.date}`}</StyledSubHeading>
            <MDXProvider components={UI}>
              <PostContent>
                <MDXRenderer>{postNode.body}</MDXRenderer>
              </PostContent>
            </MDXProvider>
            {/* commenting this out until we can fix the category layout plus tags are useless rn */}
            {/* <PostMeta>
        {post.date} {` | `} TAGS:{" "}
        {post.categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ", "}
            <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
          </React.Fragment>
        ))}
        <PrevNext prev={prev} next={next} />
      </PostMeta> */}
          </Content>
        </>
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
