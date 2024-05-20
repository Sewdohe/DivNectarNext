import React from "react"
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
// import { useSiteMetadata } from "../hooks/use-site-metadata"

type ImageDataType = {
  images: {
    fallback: {
      src: string;
    };
  };
  width: number;
  height: number;
};

export type SeoProps = {
  /**
   * Meta description. If not given, the one from the gatsby-config will be used.
   */
  description?: string;
  /**
   * Page title. If not given, the one from the gatsby-config will be used.
   */
  title?: string;
  /**
   * Meta keywords, will only be used if given.
   */
  keywords?: string;
  /**
   * Featured image, the data type should match the return type of `gatsbyImageData`.
   * If not given, the default image will be used.
   */
  featuredImage?: ImageDataType;

  children: React.ReactNode;
};

export default function Seo(props: SeoProps) {
  // first get our default data from gatsby config and default featured image
  const { site, featuredImage } =
    useStaticQuery<Queries.SeoMetaDataQuery>(graphql`
      query SeoMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
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
    `);

  // determine the featured image from props
  const ogImage =
    props.featuredImage ??
    (featuredImage?.childImageSharp
      ?.gatsbyImageData as unknown as ImageDataType);

  // determine title and description
  const title = props.title ?? site?.siteMetadata?.title;
  const description = props.description ?? site?.siteMetadata?.description;

  // Use the location hook to get current page URL
  const location = useLocation();

  // construct the meta array for passing into react helmet.
  const metas = [
    // basic seo
    {
      name: 'description',
      content: description,
    },
    {
      name: 'og:image',
      content: ogImage.images.fallback.src,
    },
    {
      name: 'og:image:width',
      content: `${ogImage.width}`,
    },
    {
      name: 'og:image:height',
      content: `${ogImage.height}`,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:title',
      content: title,
    },
    {
      name: 'og:description',
      content: description,
    },
    {
      name: 'og:site_name',
      content: site!.siteMetadata!.title,
    },
    {
      name: 'og:url',
      content: `${site?.siteMetadata?.siteUrl}${location.pathname}`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:image',
      content: ogImage.images.fallback.src,
    },
    {
      name: 'twitter:creator',
      content: '@Sewdohe',
    },
  ];

  // If we have keywords, then add it
  if (props.keywords) {
    metas.push({
      name: 'keywords',
      content: props.keywords,
    });
  }

  return (
    <>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      {metas.map(meta => (
        <meta key={meta.name} name={meta.name} content={meta.content!} />
      ))}
      { props.children }
    </>
  );
}