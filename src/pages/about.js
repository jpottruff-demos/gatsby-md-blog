import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
    return (
        // NOTE: Layout had to be added. Varies slightly from course 
        <Layout>
            <SEO title="About" />
            <h1>About</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione nulla perferendis voluptatum ipsum fugiat consequuntur temporibus ducimus, soluta repellendus cupiditate non blanditiis nesciunt velit, adipisci modi voluptates? Porro, necessitatibus tempore.</p>
            
        </Layout>
    )
}

export default AboutPage;
