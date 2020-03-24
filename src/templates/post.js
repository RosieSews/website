import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import FancyHeader from "../components/FancyHeader";

import { Layout, SEO, PrevNext } from "../components";
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
      <SEO postPath={slug} postNode={postNode} article />
      <FancyHeader />
      <PostContent>
        <SecondaryH2>{post.subTitle}</SecondaryH2>
        <StyledSubHeading>{`Rosie Sews Update | last updated: ${post.date}`}</StyledSubHeading>
        <MDXProvider components={UI}>
          <MDXRenderer>{postNode.body}</MDXRenderer>
        </MDXProvider>
      </PostContent>
      <PostMeta>
        {post.date} {` | `} TAGS:{" "}
        {post.categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ", "}
            <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
          </React.Fragment>
        ))}
        <PrevNext prev={prev} next={next} />
      </PostMeta>
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
