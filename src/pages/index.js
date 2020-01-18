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
      <SEO keywords={[`gatsby`, `tailwind`]} title="Home" />

      <motion.section initial="hidden" animate="visible" variants={page}>
        <motion.div variants={item}>
          <h1 className="mt-4 text-6xl leading-tight text-gray-900">
            Dynalist <motion.span variants={highlight}>Highlighter</motion.span>
          </h1>
          <p className="mt-4 text-2xl text-left">
            Using Dynalist Highlighter you can easily highlight text on any web
            page and sync them to your Dynalist Inbox. This is especially
            helpful if you are doing research or when you want to build your own
            knowledge-base.
          </p>
          <motion.button
            whileHover={{ scale: 1.025 }}
            className="px-6 py-2 mt-4 text-xl font-light text-white bg-blue-500 rounded-lg hover:bg-blue-400 hover:shadow-lg shadow-hover-transition"
          >
            Add to Chrome <span class="opacity-75 text-lg">It's free</span>
          </motion.button>
        </motion.div>
        <motion.div
          variants={item}
          class="flex flex-wrap overflow-hidden lg:-mx-2 mt-16"
        >
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2 mt-4 md:mt-0">
            <span className="text-xl font-bold">Will this cost anything?</span>
            <p className="mt-2 md:mt-2">
              Nope, the extension is completly free. If you want to support the
              project, you could consider a{" "}
              <a href="#" className="underline">
                donation
              </a>
              .
            </p>
          </div>
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2 mt-4 md:mt-0 ">
            <span className="text-xl font-bold">
              How can I load the extension?
            </span>
            <p className="mt-2 md:mt-2">
              After you added the extension to chrome, you can click on the
              extension icon to open Dynalist Highlighter in the current page.
            </p>
          </div>
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2 mt-4 md:mt-0">
            <span className="text-xl font-bold">How can I highlight?</span>
            <p className="mt-2 md:mt-2">
              When the extension is active, just select some text and you will
              be prompted with the option to highlight it.
            </p>
          </div>
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2 mt-4 md:mt-0">
            <span className="text-xl font-bold">How can I contribute?</span>
            <p className="mt-2 md:mt-2">
              The project is open-sourced on GitHub and I would be happy about
              coontributions and improvments.
            </p>
          </div>
        </motion.div>
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
      </motion.section>
    </Layout>
  );
}

export default IndexPage;
