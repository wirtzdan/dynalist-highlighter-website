import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { motion } from "framer-motion";

const highlight = {
  visible: {
    backgroundColor: "#FFEC9A",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 100
    }
  },
  hidden: {
    backgroundColor: "#fff"
  }
};

const page = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  },
  hidden: { opacity: 0 }
};

const item = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { ease: "linear" },
      y: { type: "spring", stiffness: 100 }
    }
  },
  hidden: { opacity: 0, y: -10 }
};

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`dynalist`, `highlighter`]} title="Installation Guide" />

      <motion.section initial="hidden" animate="visible" variants={page}>
        <motion.div variants={item}>
          <h1 className="mt-4 text-4xl leading-tight text-gray-900 ">
            Dynalist <motion.span variants={highlight}>Highlighter</motion.span>
          </h1>

          <h2 className="mt-8 text-xl font-bold">Getting started</h2>
          <p className="mt-4 text-lg text-left">
            Great! You succesfully installed Dynalist Highlighter. Now it's time
            to start highlighting. Follow these steps to connect the extension
            to your Dynalist account.
          </p>
        </motion.div>
        <motion.div variants={item} className="mt-4">
          <div className="mt-8">
            <div className="flex items-center">
              <span className="flex items-center justify-center w-8 h-8 mr-4 text-xl font-bold bg-yellow-400 rounded-full">
                1
              </span>
              <span className="text-xl font-bold">
                Add your API Key and set your highlight inbox
              </span>
            </div>

            <p className="mt-2">
              The extension needs your API Key to push the highlights to your
              account. You can find your API Key on the{" "}
              <a href="https://dynalist.io/developer">developer page</a>. Copy
              the key and add it to the options. When you added the key, you can
              choose one of your files to be the highlight inbox.
            </p>
            <div className="px-4 py-2 my-4 bg-gray-100 rounded-lg">
              <p className="italic ">
                <span className="font-bold">Tip:</span> The menu item for
                "Options" can be found by right-clicking on the extension icon.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center">
              <span className="flex items-center justify-center w-8 h-8 mr-4 text-xl font-bold bg-yellow-400 rounded-full">
                2
              </span>
              <span className="text-xl font-bold">Start highlighting</span>
            </div>

            <p className="mt-2">
              Load the extension by clicking on the icon. Once loaded, you can
              see the highlighter widget and you are now able to select and
              highlight text on the page. Test it out on this page!
              <div className="px-4 py-2 my-4 bg-gray-100 rounded-lg">
                <p className="italic">
                  <span className="font-bold">Tip:</span> You don't need to be
                  precise with your selection. The extension automatically
                  extends the selection to include full words and removes empty
                  space.
                </p>
              </div>
            </p>
          </div>

          <div className="mt-8">
            <div className="flex items-center">
              <span className="flex items-center justify-center w-8 h-8 mr-4 text-xl font-bold bg-yellow-400 rounded-full">
                3
              </span>
              <span className="text-xl font-bold">
                Send your highlights to Dynalist
              </span>
            </div>

            <p className="mt-2">
              In the highlight widget on the bottom right, you can always see
              the number of highlights and change the bookmark title. When you
              are finished, click on "Add to Dynalist".
            </p>

            <div className="px-4 py-2 my-4 bg-gray-100 rounded-lg">
              <p className="italic ">
                <span className="font-bold">Tip:</span> Create your own hotkey
                to quickly launch the extension. Open{" "}
                <span className="text-gray-600">
                  chrome://extensions/shortcuts
                </span>{" "}
                in your browser to get to the hotkey options.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 mt-16 border-t border-gray-200">
            <span className="text-gray-500 ">
              Made by{" "}
              <a
                className="text-gray-500 underline hover:text-gray-400"
                href="https://twitter.com/wirtzdan"
              >
                Daniel Wirtz
              </a>
            </span>
            <div className="flex h-auto ">
              <a
                href="#"
                className="p-2 text-gray-400 rounded-lg hover:text-gray-500 hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="feather feather-github"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 text-gray-400 rounded-lg hover:text-gray-500 hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="feather feather-twitter"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 "
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </Layout>
  );
}

export default IndexPage;
