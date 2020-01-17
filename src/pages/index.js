import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`]} title="Home" />

      <section className="">
        <div>
          <h1 className="mt-4 text-6xl leading-tight text-gray-900">
            Dynalist <span className="bg-yellow-300">Highlighter</span>
          </h1>
          <p className="mt-4 text-2xl text-left text-gray-800">
            Blandit hendrerit potenti lacinia feugiat amet tincidunt pulvinar,
            himenaeos luctus mauris mollis ligula ultrices, conubia sed
            ultricies torquent integer imperdiet.
          </p>
          <button className="px-6 py-2 mt-4 text-xl font-light text-white bg-blue-500 rounded-lg hover:bg-blue-400">
            Add to Chrome <span class="opacity-75 text-lg">It's free</span>
          </button>
        </div>
        <div class="flex flex-wrap overflow-hidden lg:-mx-2 mt-16">
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2">
            <span className="text-xl font-bold">FAQ Question</span>
            <p className="mt-2 text-gray-800">
              Varius ligula magnis egestas magna augue sodales, hendrerit eros
              quam convallis in nam dictum, dis ridiculus ornare potenti
              dictumst.
            </p>
          </div>
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2">
            <span className="text-xl font-bold">FAQ Question</span>
            <p className="mt-2 text-gray-800">
              Varius ligula magnis egestas magna augue sodales, hendrerit eros
              quam convallis in nam dictum, dis ridiculus ornare potenti
              dictumst.
            </p>
          </div>
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2">
            <span className="text-xl font-bold">FAQ Question</span>
            <p className="mt-2 text-gray-800">
              Varius ligula magnis egestas magna augue sodales, hendrerit eros
              quam convallis in nam dictum, dis ridiculus ornare potenti
              dictumst.
            </p>
          </div>
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2">
            <span className="text-xl font-bold">FAQ Question</span>
            <p className="mt-2 text-gray-800">
              Varius ligula magnis egestas magna augue sodales, hendrerit eros
              quam convallis in nam dictum, dis ridiculus ornare potenti
              dictumst.
            </p>
          </div>
        </div>
        <div className="py-4 mt-16 border-t border-gray-200">
          <span className="text-gray-500">
            Made by{" "}
            <a
              className="text-gray-500 underline hover:text-gray-400"
              href="https://twitter.com/wirtzdan"
            >
              Daniel Wirtz
            </a>
          </span>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
