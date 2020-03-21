import { graphql } from "gatsby";

// export const bannerImageSVG = graphql`
//   fragment bannerImage640svg on File {
//     childImageSharp {
//       fluid(maxWidth: 640, traceSVG: { color: "#365888" }) {
//         ...GatsbyImageSharpFluid_withWebp_tracedSVG
//       }
//     }
//   }
//   fragment bannerImage720svg on File {
//     childImageSharp {
//       fluid(maxWidth: 720, traceSVG: { color: "#365888" }, quality: 75) {
//         ...GatsbyImageSharpFluid_withWebp_tracedSVG
//       }
//     }
//   }
// `

export const bannerImage = graphql`
  fragment bannerImage640 on File {
    childImageSharp {
      fluid(maxWidth: 640) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment bannerImage720 on File {
    childImageSharp {
      fluid(maxWidth: 720, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  # fragment allItemsJson on File {
  #   title
  #   items
  # }
`;
