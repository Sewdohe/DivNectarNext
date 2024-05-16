import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout";
import { SEO } from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const IndexPage = (data: PageProps<Queries.BlogPostsQuery>) => {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">DivNectar Blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Read my useless ramblings.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.data.allMdx.nodes.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <GatsbyImage
                    image={post.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData!}
                    alt="post-featured-image"
                    className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.frontmatter?.date!} className="text-gray-500">
                      {post.frontmatter?.date}
                    </time>
                    <a
                      href={post.frontmatter?.author!}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.frontmatter?.category}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a className="font-extrabold text-2xl" href={post.frontmatter?.slug!}>
                        <span className="absolute inset-0" />
                        {post.frontmatter?.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={'/sewdohe-avatar.png'} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a className="text-blue-400" href='#'>
                          <span className="absolute inset-0" />
                          {post.frontmatter?.author}
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const PageQuery = graphql`
    query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC }}) {
        nodes {
            id
            excerpt
            frontmatter {
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(width: 800)
                  }
                }
                title
                category
                date(formatString: "MMMM DD, YYYY")
                slug
                author
            }
        }
    }
    }
`

export default IndexPage

export const Head = () => (
  <SEO title="DivNectar Blog" description="read blog posts by Sewdohe, covering a variety of topics." />
)
