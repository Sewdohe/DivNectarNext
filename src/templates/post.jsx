import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PaddedContainer from "../components/building-blocks/PaddedContainer"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import SEO from "../components/SEO";




const shortcodes = { Link, Layout } // Provide common components here

export default function PageTemplate({ data, children }) {
  let featuredImg = getImage(data.mdx.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
  deckDeckGoHighlightElement();

  return (
    <Layout>
      <div className="flex flex-col align-middle justify-center">
        <span className="text-3xl text-white mt-2 text-center mx-w-md inline-block font-extrabold self-center">{data.mdx.frontmatter.title}</span>
        <GatsbyImage alt="featuredImage" className="mx-auto md:mx-0 flex-grow-0 inline-block" image={featuredImg} />
      </div>
      <PaddedContainer>
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
      </PaddedContainer>
    </Layout>
  )
}

export const Head = ({ data }) => (
  <SEO title={data.mdx.frontmatter.title} description={data.mdx.excerpt}>
    <script type="application/ld+json">
    {`
      {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "${data.mdx.frontmatter.title}",
      "datePublished": "${data.mdx.frontmatter.date}",
      "dateModified": "${data.mdx.frontmatter.date}",
      "author": [{
          "@type": "Person",
          "name": "Sewdohe",
          "url": "https://divnectar.com/sewdohe"
        }]
    }
    `}
    </script>
  </SEO>
)

export const query = graphql`
  query PostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
      featuredImage: file(
          absolutePath: { glob: "**/src/images/logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200)
          }
        }
    }
  }
`