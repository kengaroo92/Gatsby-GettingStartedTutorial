import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { siteTitle } from "./Header.module.css";

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <header className={siteTitle}>
            <h1>{data.site.siteMetadata.title}</h1>
        </header>
    );
};

export default Header;
