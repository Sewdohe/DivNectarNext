import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout";
import { SEO } from "../components/SEO";


const IndexPage = (data:PageProps<Queries.BlogPostsQuery>) => {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-2xl font-extrabold">DivNectar Blog</h1>
            <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">

              {data.data.allMdx.nodes.map(post => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.frontmatter?.date} className="text-gray-500">
                      {post.frontmatter?.date}
                    </time>
                    <a
                      href={'blog/' + post.frontmatter?.slug}
                      className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600"
                    >
                      {post.frontmatter?.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.frontmatter?.slug}>
                        <span className="absolute inset-0" />
                        {post.frontmatter?.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {/* TODO: Add author link */}
                        <a href="https://divnectar.com">
                          <span className="absolute inset-0" />
                          {post.frontmatter?.author}
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                </article>
              ))}

            </div>
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
                title
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
