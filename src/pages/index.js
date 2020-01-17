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
          <p className="mt-4 text-2xl text-left text-gray-800">
            Blandit hendrerit potenti lacinia feugiat amet tincidunt pulvinar,
            himenaeos luctus mauris mollis ligula ultrices, conubia sed
            ultricies torquent integer imperdiet.
          </p>
          <motion.button
            whileHover={{ scale: 1.025 }}
            className="px-6 py-2 mt-4 text-xl font-light text-white bg-blue-500 rounded-lg hover:bg-blue-400"
          >
            Add to Chrome <span class="opacity-75 text-lg">It's free</span>
          </motion.button>
        </motion.div>
        <motion.div
          variants={item}
          class="flex flex-wrap overflow-hidden lg:-mx-2 mt-16"
        >
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2 mt-4 md:mt-0 ">
            <span className="text-xl font-bold">FAQ Question</span>
            <p className="mt-2 text-gray-800 md:mt-2">
              Varius ligula magnis egestas magna augue sodales, hendrerit eros
              quam convallis in nam dictum, dis ridiculus ornare potenti
              dictumst.
            </p>
          </div>
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2 mt-4 md:mt-0">
            <span className="text-xl font-bold">FAQ Question</span>
            <p className="text-gray-800 md:mt-2">
              Varius ligula magnis egestas magna augue sodales, hendrerit eros
              quam convallis in nam dictum, dis ridiculus ornare potenti
              dictumst.
            </p>
          </div>
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2 mt-4 md:mt-0">
            <span className="text-xl font-bold">FAQ Question</span>
            <p className="mt-2 text-gray-800 md:mt-2">
              Varius ligula magnis egestas magna augue sodales, hendrerit eros
              quam convallis in nam dictum, dis ridiculus ornare potenti
              dictumst.
            </p>
          </div>
          <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/2 mt-4 md:mt-0">
            <span className="text-xl font-bold">FAQ Question</span>
            <p className="mt-2 text-gray-800 md:mt-2">
              Varius ligula magnis egestas magna augue sodales, hendrerit eros
              quam convallis in nam dictum, dis ridiculus ornare potenti
              dictumst.
            </p>
          </div>
        </motion.div>
        <div className="py-4 mt-16 border-t border-gray-200">
          <span className="text-gray-500 ">
            Made by{" "}
            <a
              className="text-gray-500 underline hover:text-gray-400"
              href="https://twitter.com/wirtzdan"
            >
              Daniel Wirtz
            </a>
          </span>
        </div>
      </motion.section>
    </Layout>
  );
}

export default IndexPage;
