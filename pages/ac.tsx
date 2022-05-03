import type { NextPage } from "next";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSound from "use-sound";
import "animate.css/animate.min.css";

import { Interviews } from "../components/Interviews";
import ReactFullpage from "@fullpage/react-fullpage";

const Ac: NextPage = () => {
  const Menu = () => (
    <div
      className="menu"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
        right: 0,
      }}
    >
      <ul className="actions">
        <li className="space-x-4 m-4">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/jl">
            <a className="hover:underline">Jan L.</a>
          </Link>
          <Link href="/kc" className="hover:underline">
            <a>Karlin C.</a>
          </Link>
          <Link href="/jy">
            <a
 className="hover:underline"
            >Justin Y.</a>
          </Link>
          <Link href="/ac">
            <a
 className="underline"
            >Anonymous</a>
          </Link>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="App">
      <Head>
        <title>Chinatown Mega Jail</title>
      </Head>
      <Menu />
      <ReactFullpage
        navigation
        // scrollHorizontally = {true}
        render={(comp: any) =>
          console.log("render prop change") || (
            <ReactFullpage.Wrapper>
              <div className="section">
                <PanelOne />
              </div>
              <div className="section">
                <PanelTwo />
              </div>
              <div className="section">
                <PanelThree />
              </div>
              <div className="section">
                <PanelFour />
              </div>
              <div className="section">
                <PanelFive />
              </div>
              <div className="section">
                <PanelSix />
              </div>
              <div className="section">
                <PanelSeven />
              </div>
              <div className="section">
                <PanelEight />
              </div>
              <div className="section">
                <PanelNine />
              </div>
              <div className="section">
                <PanelTen />
              </div>
              <div className="section">
                <PanelEleven />
              </div>
              <div className="section">
                <PanelTwelve />
              </div>
              <div className="section">
                <PanelThirteen />
              </div>
              <div className="section">
                <Interviews />
              </div>
            </ReactFullpage.Wrapper>
          )
        }
      />
    </div>
  );
};


const PanelOne = () => {
  return (
    <FadeInSection>
      <div className="w-full relative h-screen flex flex-col justify-center items-center">
        <div className="w-2/3">
          <p className="font-winnieyoe text-3xl text-center">
            Anonymous contributor C is an engineer who has recently started
            their advocacy work, connecting with other community members and
            sharing community events and updates through their platform.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};

const PanelTwo = () => {
  return (
    <div className="w-full h-screen space-y-12">
      <div className="w-2/3 m-auto">
        <p className="font-winnieyoe text-2xl text-center">
          My grandmother lived in Chung Pak and passed away 1.5 months ago. I
          found out about the jail when I went to her funeral.
        </p>
      </div>
      <div className="w-2/3 m-auto">
        <Image
          src="/C1.png"
          alt=""
          layout="responsive"
          width={1702}
          height={646}
        />
      </div>
      <div className="w-2/3 m-auto">
        <p className="font-winnieyoe text-2xl text-center">
          Chinatown was my second home. I spent many weekends here visiting my
          grandmother and going to church.
        </p>
      </div>
    </div>
  );
};

const PanelThree = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          Working to fight for Chinatown consumes every premise of my life. I’m
          not exercising, I barely sleep.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/C2.png"
            alt=""
            layout="responsive"
            width={1049}
            height={772}
          />
        </FadeInSection>
      </div>
      <div className="w-2/3">
        <p className="font-winnieyoe text-2xl text-center">
          My husband and I are trying to have a kid later this year but I keep
          thinking, how am I supposed to fight for Chinatown and try to have a
          kid?
        </p>
      </div>
    </div>
  );
};

const PanelFour = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          This is the city’s first design-build rather than design-bid-build
          project, so we don’t have any idea what the design is.
        </p>
      </div>
      <div className="w-1/4">
        <FadeInSection>
          <Image
            src="/C3.png"
            alt=""
            layout="responsive"
            width={716}
            height={893}
          />
        </FadeInSection>
      </div>
    </div>
  );
};

const PanelFive = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/4">
        <FadeInSection>
          <Image
            src="/C4.png"
            alt=""
            layout="responsive"
            width={656}
            height={602}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          There’s water in the soil of Canal street that would need to be pumped
          out, that’s actually really risky. Pile driving is about 120 decibels,
          how are they going to mitigate that? How can the businesses and the
          citizens in the building survive? I don’t get it.
        </p>
      </div>
    </div>
  );
};

const PanelSix = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-10/12">
        <FadeInSection>
          <Image
            src="/C5.png"
            alt=""
            layout="responsive"
            width={1690}
            height={347}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          Rikers is supposed to close as a prison by August 31, 2027. The city
          is pushing everything through carelessly because delays are costly.
          I’m now trying to think through how to change the law.
        </p>
      </div>
    </div>
  );
};

const PanelSeven = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          I started my platform to teach people the story, the history. I just
          finished this page I’ll post on the site.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/C6.png"
            alt=""
            layout="responsive"
            width={934}
            height={726}
          />
        </FadeInSection>
      </div>

      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          I also wanted to build out an email form that allows people to find
          who to email to get attention on different issues.
        </p>
      </div>
    </div>
  );
};

const PanelEight = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <p className="font-winnieyoe text-xl text-center">
          Until recently, The people fighting the jails and fighting the
          shelters aren’t helping the other. A lot of the shelter language is
          viewed as NIMBY* while some view the jail as a done deal. (*Not in my backyard)
        </p>
      </div>
      <div className="w-3/4">
        <FadeInSection>
          <Image
            src="/C7.png"
            alt=""
            layout="responsive"
            width={1737}
            height={533}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-xl text-center">
          If you zoomed out far enough it’s the same story, it’s a story of
          institutionalized hate and pushing through things to Chinatown because
          people don’t have a voice. That’s the story.
        </p>
      </div>
    </div>
  );
};

const PanelNine = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <FadeInSection>
          <Image
            src="/C8.png"
            alt=""
            layout="responsive"
            width={1077}
            height={755}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          A lot of people in Chinatown are Chinese speaking people who didn’t
          know what’s going on. There's a whole group of people that I feel is
          untapped. So I'm trying to connect the three Chinatown, Brooklyn, and
          Queens.
        </p>
      </div>
    </div>
  );
};

const PanelTen = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-12">
      <div className="w-1/3">
        <p className="font-winnieyoe text-2xl text-center">
          How did we get here? AAPI wasn’t watching. I wasn’t watching. We
          generally speaking haven’t been civically engaged, there hasn’t been
          an issue that brings us together.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/C9.png"
            alt=""
            layout="responsive"
            width={974}
            height={576}
          />
        </FadeInSection>
      </div>
      <div className="w-1/3">
        <p className="font-winnieyoe text-2xl text-center">
          Black Lives Matter did well. There’s a shared experience of Black
          Lives Matter, right? Which is what unites you.
        </p>
      </div>
    </div>
  );
};

const PanelEleven = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-12">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          There are so many nuances within AAPI, within all those cultures, and
          nobody's going to understand what it's like.
        </p>
      </div>
      <div className="w-2/5">
        <FadeInSection>
          <Image
            src="/C10.png"
            alt=""
            layout="responsive"
            width={1463}
            height={736}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2 space-y-4">
        <p className="font-winnieyoe text-2xl text-center">
        I have an idea in May to book out Madison Square Garden or Barclays Center and throw a massive rally bring in Asian performers.
        </p>
        <p className="font-winnieyoe text-2xl text-center">
        “Can you hear us now?”
        </p>
      </div>
    </div>
  );
};

const PanelTwelve = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-12">
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/C11.png"
            alt=""
            layout="responsive"
            width={877}
            height={583}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2 space-y-4">
        <p className="font-winnieyoe text-2xl text-center">
          People are pushing for criminal justice reform, people also want to
          help the homeless. We want all these other things too, within
          Chinatown, it was just like, can you help us too?
        </p>
      </div>
    </div>
  );
};

const PanelThirteen = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-12">
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/C12.png"
            alt=""
            layout="responsive"
            width={877}
            height={737}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2 space-y-4">
        <p className="font-winnieyoe text-2xl text-center">
          You’re pro-closing Rikers, are you also pro-protecting the
          marginalized people of Chinatown?
        </p>
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

export default Ac;