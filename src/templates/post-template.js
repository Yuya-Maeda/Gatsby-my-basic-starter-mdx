import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: {
        category,
        title,
        date,
        tags,
        description,
        image,
        embeddedImages,
      },
      body,
    },
  } = data

  return (
    <>
      <section>
        post template
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </>
  )
}

export default PostTemplate

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        title
        slug
        tags
        date(formatString: "YYYY-MM")
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        embeddedImages {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
      body
    }
  }
`
