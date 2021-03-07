import React, { useState } from 'react';

import Layout from '../components/layout/Layout';

import { graphql } from 'gatsby';

const selectedCss = " text-blue-500 border-b-2 font-medium border-blue-500";

export default ({ data }) => {
    const [currentTab, setCurrentTab] = useState(0);
    

    console.log(":: ", data);

    return <Layout>
        <main className="text-gray-900">
            <div className="container mx-auto px-8 lg:flex"><div className="text-center lg:text-left">
                <h1 className="pt-20 text-3xl my-4 text-left">Installation Guide</h1>
                <section id="start" className="py-12">
                    <div className="bg-white">
                        <nav className="flex flex-col sm:flex-row px-10">
                            <button onClick={() => setCurrentTab(0)}
                                className={ "uppercase text-sm text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" + (currentTab === 0 ? selectedCss : "") }>
                                { data.allMarkdownRemark.edges[0].node.frontmatter.tab_title }
                            </button>
                            <button onClick={() => setCurrentTab(1)} 
                                className={ "uppercase text-sm text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" + (currentTab === 1 ? selectedCss : "") }>
                                { data.allMarkdownRemark.edges[1].node.frontmatter.tab_title }
                            </button>
                            <button onClick={() => setCurrentTab(2)} 
                                className={ "uppercase text-sm text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" + (currentTab === 2 ? selectedCss : "") }>
                                { data.allMarkdownRemark.edges[2].node.frontmatter.tab_title }
                            </button>
                            <button onClick={() => setCurrentTab(3)} 
                                className={ "uppercase text-sm text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" + (currentTab === 3 ? selectedCss : "") }>
                                { data.allMarkdownRemark.edges[3].node.frontmatter.tab_title }
                            </button>
                        </nav>
                        <div
                            className="pt-12 px-10 lg:px-24 text-left"
                            dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[currentTab].node.html.replaceAll("./img/", "https://raw.githubusercontent.com/wiki/netmedianer-GmbH/treasure-hunt/img/").replaceAll("./img_user/", "https://raw.githubusercontent.com/wiki/netmedianer-GmbH/treasure-hunt/img_user/") }}>
                        </div>
                    </div>
                </section>

            </div></div>
        </main>
    </Layout>
};

export const query = graphql`
query InstallFilesQuery {
    allMarkdownRemark(sort: {fields: frontmatter___install_step}, filter: {frontmatter: {install_step: {gte: 1}}}) {
    edges {
      node {
        frontmatter {
          install_step
          tab_title
        }
        fileAbsolutePath
        html
      }
    }
  }
  }
`;