import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../components/utilities/Seo"

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
      <Seo title={title} description={description} image={image} tags={tags} />
      <section>
        <aside>
          <h1>{title}</h1>
          <p>{category}</p>
          <ul>
            {tags?.map((tag, index) => {
              return <li key={index}>{tag}</li>
            })}
          </ul>
          <p>{date}</p>
        </aside>

        <article>
          <MDXRenderer embeddedImages={embeddedImages}>{body}</MDXRenderer>
        </article>
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
