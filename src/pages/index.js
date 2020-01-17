import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`]} title="Home" />

      <section className="text-center">
        <h2 className="inline-block p-6 my-8 text-2xl font-bold bg-blue-300 rounded">
          GatsbyJS & TailwindCSS
        </h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
