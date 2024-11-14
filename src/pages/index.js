// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

// Step 2: Define your component
const IndexPage = () => {
    return (
        <Layout pageTitle='Home Page'>
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt='Cute Charmander 1'
                src='https://i.pinimg.com/736x/2e/84/e1/2e84e1db94055eb56273e259b2875f10.jpg'
            />
            <StaticImage
                alt='Cute Charmander 2'
                src='../images/cute-charmander-2.jpg'
            />
        </Layout>
    );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title='Home Page' />;

// Step 3: Export your component
export default IndexPage;
