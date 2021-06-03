import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import PropTypes from "prop-types";

function SEO({ title, description, image, lang }) {

    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
        canonical: `${siteUrl}${pathname}`
    }

    return (
        <Helmet title={seo.title} htmlAttributes={{ lang }}>

            <meta name="description" content={seo.description} />

            <link rel="canonical" href={seo.canonical}/>

            <meta name="keywords" content="emerge music hub, young musician, young musicians, canadian music industry, music interviews, humber college, arts management"/>

            {seo.url && <meta property="og:url" content={seo.url} />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && ( <meta property="og:description" content={seo.description} /> )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (<meta name="twitter:description" content={seo.description} />)}

            {seo.image && <meta name="twitter:image" content={seo.image} />}

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "url": "https://www.emergemusichub.ca/",
                        "name": "Emerge Music Hub",
                        "image": "/emerge-bg.png",
                        "logo": "/iceberg.png",
                        "email": "mailto:info@emergemusichub.ca",
                        "description": "A professional development online hub for emerging Canadian artists",
                        "sameAs": ["https://www.instagram.com/emergemusichub/"],
                    })}
                </script>
            </Helmet>
    )

}

export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    lang: 'en'
}


const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl
                defaultImage: image
            }
        }
    }
`


