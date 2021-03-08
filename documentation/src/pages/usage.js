import React from 'react';
import Layout from '../components/layout/Layout';
import { graphql } from 'gatsby';

const UsagePage =  ({ data }) => {
    // Patchig the generated md-html
    const html = data.markdownRemark.html;
    const r1 = /.\/img\//g;
    const r2 = /.\/img_user\//g;
    const patchedHTML = html
        .replace(r1, "https://raw.githubusercontent.com/wiki/netmedianer-GmbH/treasure-hunt/img/")
        .replace(r2, "https://raw.githubusercontent.com/wiki/netmedianer-GmbH/treasure-hunt/img_user/");

    return <Layout>
        <main className="text-gray-900">
            <div className="container mx-auto px-8 lg:flex">
                <div className="text-center lg:text-left">
                    <h1 className="pt-20 text-3xl my-4 text-left">Usage Guide</h1>
                    <section>
                        <div className="bg-white">
                            <div
                                className="pt-12 px-10 lg:px-24 text-left"
                                dangerouslySetInnerHTML={{ __html: patchedHTML }}>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    </Layout>
};

export const query = graphql`
query UsageFilesQuery {
    markdownRemark(fileAbsolutePath: {regex: "/User-Guide/"}) {
        html
    }
}
`;

export default UsagePage;
