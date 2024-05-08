import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel as PrimeCarousel } from "primereact/carousel";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomePage1 = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="h-full bg-primary py-16"
      initial={false}
      animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="bg-[url('/images/heroimg1.svg')] h-screen bg-cover bg-center">
        <div className="pl-20 flex">
          <motion.p
            className="font-urbanist font-bold text-6xl tracking- leading-tight"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experience Pure <br />
            <span className="text-[#EF5625]">Refreshment</span> Redefined <br />{" "}
            with Tingo BV
          </motion.p>
        </div>
        <div className="pl-20 py-6">
          <p className="text-sm text-gray-500">
            {" "}
            Crafted for Those who Crave Excellence in Every Sip
          </p>
        </div>
        <button className="text-white rounded-md  ml-20 py-3 px-6 bg-[#EF5625]">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

const HomePage2 = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className=" text-white bg-[url('/images/heroimg2.png')] bg-cover bg-center h-screen py-16"
      initial={false}
      animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="h-full flex items-center ">
        <div className="pl-20 ">
          <motion.p
            className="font-urbanist font-bold text-6xl leading-tight"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover TingoBV <br /> Where
            <span className="text-[#EF5625]"> Quality Meet </span> <br />{" "}
            Convinience
          </motion.p>
          <div className=" py-6">
            <p className="text-sm text-gray-500">
              {" "}
              Crafted for Those who Crave Excellence in Every Sip
            </p>
          </div>
          <button className="text-white rounded-md py-3 px-6 bg-[#EF5625]">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Coke1 = ({ onAnimationCompleted }) => {
  return (
    <motion.section
      initial={false}
      animate={{ opacity: 1 }}
      className="h-screen"
      //   exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={onAnimationCompleted}
    >
      <div className="flex items-center justify-center ">
        <img src="/images/coladrink.png" alt="" />
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 20 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/isto1.png" alt="" />
        </motion.div>
      </div>
    </motion.section>
  );
};

const Coke2 = ({ onAnimationCompleted }) => {
  return (
    <motion.section
      initial={false}
      animate={{ opacity: 1 }}
      className="h-screen"
      //   exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={onAnimationCompleted}
    >
      <div className="flex items-center justify-center ">
        <img src="/images/electricdrink.png" alt="" />
        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/isto2.png" alt="" />
        </motion.div>
      </div>
    </motion.section>
  );
};

const HomePage = () => {
  const [showHomePage1, setShowHomePage1] = useState(true);
  const [showCoke1, setShowCoke] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHomePage1((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const forward = () => {
    setShowCoke((prev) => !prev);
  };

  const frameItems = [
    {
      img: "/images/whisky.png",
      text: "Whisky",
    },
    {
      img: "/images/herbal.png",
      text: "Herbal",
    },
    {
      img: "/images/orange.png",
      text: "Orange",
    },
    {
      img: "/images/bitter.png",
      text: "Bitter",
    },
  ];
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const ProductTemplate = (frameItems, index) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };
    return (
      <div className="pr-3">
        <div
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 flex z-10 items-center justify-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: hoveredIndex === index ? 1 : 0,
              y: hoveredIndex === index ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <p className="text-center">{frameItems.text}</p>
              <button className="text-white py-3 px-6 bg-[#EF5625]">
                View more
              </button>
            </div>
          </motion.div>
          <motion.img
            src={frameItems.img}
            width={500}
            height={500}
            alt=""
            className="rounded-3xl shadow-lg"
            // whileHover={{ scale: 1.1 }} // Scale up the image on hover
          />
          <div
            className={`absolute inset-0 z-2 ${
              hoveredIndex === index && "bg-black"
            }  opacity-50 rounded-3xl`}
            whileHover={{ opacity: 0.5 }} // Make the overlay appear on hover
          ></div>
        </div>
      </div>
    );
  };

  const blog = [
    {
      img: "/images/blogimg.png",
      title: "Dream Come True’: Ooni of Ife celebrates launch ...",
      desc: "At an exclusive launch event, which was attended by captains of industry, media executives, senior government officials, Nollywood celebrities, and traditional chiefs at Tingo Place, Lagos on Tuesday...”.",
      btntxt: "Read more",
    },
    {
      img: "/images/blogimg.png",
      title: "Dream Come True’: Ooni of Ife celebrates launch ...",
      desc: "At an exclusive launch event, which was attended by captains of industry, media executives, senior government officials, Nollywood celebrities, and traditional chiefs at Tingo Place, Lagos on Tuesday...”.",
      btntxt: "Read more",
    },
    {
      img: "/images/blogimg.png",
      title: "Dream Come True’: Ooni of Ife celebrates launch ...",
      desc: "At an exclusive launch event, which was attended by captains of industry, media executives, senior government officials, Nollywood celebrities, and traditional chiefs at Tingo Place, Lagos on Tuesday...”.",
      btntxt: "Read more",
    },
  ];

  return (
    <>
      <section className="h-full">
        {/* <HomePage2 /> */}
        {/* <HomePage2 onAnimationComplete={() => setShowHomePage1(true)} /> */}

        <AnimatePresence>
          {showHomePage1 ? (
            <HomePage1 onAnimationComplete={() => setShowHomePage1(false)} />
          ) : (
            <HomePage2 onAnimationComplete={() => setShowHomePage1(true)} />
          )}
        </AnimatePresence>

        <section
          id="about"
          className="grid grid-cols-2 items-center px-20 pt-36"
        >
          <div className="">
            <img src="/images/abouttingoimg.png" className="" />
          </div>
          <div>
            <p className="text-2xl font-medium">About Tingo BV</p>
            <p className="py-8 text-black text-4xl font-bold">
              Discover the Essence of Tingo BV: Where Passion Meets Perfection
              in Every Bubble
            </p>
            <p>
              At Tingo BV, our vision is simple yet profound: to craft
              world-class beverages that tantalize the taste buds while
              championing sustainability. With a commitment to using 80% local
              ingredients, we fuse global excellence with local pride, ensuring
              each sip reflects the essence of our community and the richness of
              our surroundi...
            </p>
            <button className="text-white py-3 rounded-md px-6 my-4 bg-[#EF5625]">
              Learn more
            </button>
          </div>
        </section>

        {/* <section className="pt-36">
          <img className="" src="/images/cola.png" />
        </section> */}

        {/* <section id="products" className="pt-36 px-20">
          <div>
            <p className="font-medium text-2xl mb-4">
              Explore Our Signature Selection
            </p>
            <div>
              <PrimeCarousel
                value={frameItems}
                numVisible={8}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={ProductTemplate}
              />
            </div>
          </div>
        </section> */}

        <section className="mt-36">
          <img src="/images/energydr.png" alt="" />
        </section>

        <section id='products'>
          <img src="/images/tingocola.png" alt="" />
        </section>

        <section>
          <img src="/images/tingoelectric.png" alt="" />
        </section>
        <section className="mt-36">
          <AnimatePresence>
            {showCoke1 ? (
              <Coke1 onAnimationCompleted={() => setShowCoke(false)} />
            ) : (
              <Coke2 onAnimationCompleted={() => setShowCoke(true)} />
            )}
          </AnimatePresence>
          <div className="flex justify-center mt-20">
            <button
              onClick={forward}
              className=" px-6 py-6 bg-gray-400 rounded-full"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={forward}
              className="ml-4 px-6 py-6 bg-gray-400 rounded-full"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
