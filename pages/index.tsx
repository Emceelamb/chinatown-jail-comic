import type { NextPage } from "next";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSound from "use-sound";
import "animate.css/animate.min.css";
import { Interviews } from "../components/InterviewsHome";

const BoopButton = () => {
  const [play] = useSound("/boopSfx");

  return <button onClick={play}>Boop!</button>;
};

const Home: NextPage = () => {
  return (
    <div className={""}>
      <Head>
        <title>Searching for a silver lining</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/WinnieYoe/winnieyoe.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className="overflow-hidden">
        <PanelOne />
        <PanelTwo />
        <PanelThree />
        <PanelFour />
        <PanelFive />
        <Interviews />
      </main>
    </div>
  );
};

const PanelOne = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  });

  return (
    <FadeInSection>
      <div className="w-full relative h-screen">
        <div className="absolute w-1/3 mt-20 ml-12 ">
          <DelayFadeInSection>
            <div className="space-y-4">
              <h1 className="font-bold text-5xl ">
                Searching for a silver lining
              </h1>

              <p className="font-winnieyoe text-3xl">Intro text</p>

              <div className="flex flex-col space-y-4">
                <button
                  className="w-32 bg-gray-200 h-12 font-bold"
                  onClick={() =>
                    window.scrollTo({ top: height, behavior: "smooth" })
                  }
                >
                  Begin ↓
                </button>
                <span className="font-bold flex items-center space-x-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    width="16"
                    height="16"
                    viewBox="0 0 75 75"
                    className="mr-2"
                  >
                    <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" />
                    <path
                      d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
                      style={{
                        stroke: "#111",
                        strokeWidth: 5,
                        strokeLinejoin: "round",
                        fill: "#111",
                      }}
                    />
                  </svg>
                  This comic features audio. Click to unmute.
                </span>
              </div>
            </div>
          </DelayFadeInSection>
        </div>
        <div className="bottom-0 absolute w-screen -z-10">
          <div className="w-10/12 m-auto bottom-0">
            <Image
              src="/1.png"
              alt=""
              layout="responsive"
              width={1248}
              height={720}
              className="absolute"
            />
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

const PanelTwo = () => {
  return (
    <div className="w-full relative bg-[#F2F2F2] h-screen">
      <div className="mt-20 absolute">
        <div className="font-winnieyoe text-3xl w-1/2 m-auto text-center">
          <p>
            On March 20, 2022, hundreds of protestors marched in Manhattan
            Chinatown to protest against the city’s plan to build the world’s
            tallest jail in the neighborhood.{" "}
          </p>
        </div>
      </div>
      <div className="bottom-20 inset-x-0 absolute w-screen">
        <div className="w-10/12 m-auto">
          <FadeInSection>
            <Image
              src="/2.png"
              alt=""
              layout="responsive"
              width={1247}
              height={345}
            />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

const PanelThree = () => {
  return (
    <FadeInSection>
      <div className="w-full relative bg-white h-screen ">
        <div className="mt-20 absolute">
          <div className="w-2/3 m-auto">
            <p className="font-winnieyoe text-3xl text-center">
              The jail is part of former Mayor Bill de Blasio’s $8.7 billion
              plan to close the complex of eight jails on Rikers Island and
              build four smaller facilities around the city. The city believes
              the plan will create a smaller and more humane jail system
            </p>
          </div>
        </div>
        <div className="w-full bottom-0 absolute">
          <div className="w-1/2 m-auto">
            <Image
              src="/3.png"
              alt=""
              layout="responsive"
              width={1026}
              height={643}
            />
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

const PanelFour = () => {
  return (
    <div className="w-full relative bg-[#F2F2F2] h-screen">
      <div className="mt-20 absolute">
        <div className="w-2/3 m-auto">
          <p className="font-winnieyoe text-3xl text-center">
            In Manhattan, the existing Manhattan Detention Complex (nicknamed
            the Tombs) will be demolished and replaced with a larger 40 story
            facility. Community members has been speaking out against the jail
            plan since 2018.
          </p>
        </div>
      </div>
      <div className="w-full absolute bottom-0">
        <div className="w-1/2 m-auto mb-10">
          <FadeInSection>
            <Image
              src="/4.png"
              alt=""
              layout="responsive"
              width={977}
              height={600}
            />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

const PanelFive = () => {
  return (
    <div className="w-full relative h-screen ">
      <div className="mt-12 absolute">
        <div className="w-1/2 m-auto">
          <p className="font-winnieyoe text-2xl text-center">
            Over the last decades, the Manhattan Chinatown has faced various
            challenges: from the impact of 9/11 and subsequently the closure of
            the Park Row highway, which dramatically reduced flow of traffic and
            visitors, to the impact of Covid on its restaurant and tourism
            industy and increasing Asian hate crime....
          </p>
        </div>
      </div>
      <div className="w-full absolute bottom-0">
        <div className="w-3/5 m-auto mb-10">
          <FadeInSection>
            <Image
              src="/5.png"
              alt=""
              layout="responsive"
              width={990}
              height={535}
            />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    // return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function DelayFadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    // return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`delay-fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const AudioIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width="500"
    height="500"
    viewBox="0 0 75 75"
  >
    <path
      d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
      style="stroke:#111;stroke-width:5;stroke-linejoin:round;fill:#111;"
    />
    <path
      d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
      style="fill:none;stroke:#111;stroke-width:5;stroke-linecap:round"
    />
  </svg>
);

export default Home;