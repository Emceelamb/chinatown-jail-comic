import type { NextPage } from "next";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSound from "use-sound";
import "animate.css/animate.min.css";

import { Interviews } from "../components/Interviews";
import { Thumbnail } from "../components/Thumbnail"
import { Container, Upper, Lower, ImageContainer } from "../components/Container";
import ReactFullpage from "@fullpage/react-fullpage";
import { Endnotes } from "../components/Endnotes";

const Ac: NextPage = () => {
  const Menu = () => (
    <div
    className="menu w-full flex flex-row items-baseline pl-8 pr-4 py-1 text-xl"
    style={{
      position: "fixed",
      top: 0,
      zIndex: 100,
      right: 0,
    }}
  >
    <div className="grow font-bold md:text-2xl">
      <Link href="/">
        <a className="">Can you hear us now?</a>
      </Link>
    </div>

    <div>
      <ul className="actions">
        <li className="space-x-4 m-4">
          <Link href="/">
            <a className="hover:underline decoration-dotted decoration-1 underline-offset-2">Home</a>
          </Link>
          <Link href="/jl">
            <a className="hover:underline decoration-dotted decoration-1 underline-offset-2">Jan L.</a>
          </Link>
          <Link href="/kc">
            <a className="hover:underline decoration-dotted decoration-1 underline-offset-2">Karlin C.</a>
          </Link>
          <Link href="/jy">
            <a className="hover:underline decoration-dotted decoration-1 underline-offset-2">Justin Y.</a>
          </Link>
          <Link href="/ac">
            <a className="underline decoration-dotted decoration-1 underline-offset-2">Regina</a>
          </Link>
        </li>
      </ul>
    </div>
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
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelTwo />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelThree />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelFour />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelFive />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelSix />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelSeven />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelEight />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelNine />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelTen />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelEleven />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelTwelve />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview4.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Regina</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelThirteen />
              </div>
              <div className="section">
                <Interviews />
              </div>
              <div className="section">
                <Endnotes />
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
      <div className="w-full bg-[#fef8f3] relative h-screen flex flex-col justify-center items-center">
        <div className="w-2/3">
          <p className="font-winnieyoe text-3xl text-center">
            Regina is an engineer who has recently started
            their advocacy work, connecting with other community members and
            sharing community events and updates through their&nbsp;platform.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};

const PanelTwo = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            My grandmother lived in Chung Pak and passed away 1.5 months ago. I
            found out about the jail when I went to her&nbsp;funeral.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/AC1.png"
            alt=""
            layout="responsive"
            width={2050}
            height={950}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            Chinatown was my second home. I spent many weekends here visiting my grandmother and going to&nbsp;church.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelThree = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            Fighting for Chinatown consumes every moment of free time in my life. It's hard to find time to exercise and I barely&nbsp;sleep.
          </p>
        </Upper>
        <ImageContainer>
          <div className="bg-blend-multiply">
            <Image
              src="/AC2.png"
              alt=""
              layout="responsive"
              width={2050}
              height={850}
              objectFit="cover"
            />
          </div>
        </ImageContainer>
        <Lower>
          <p>
          My husband are considering when to start a family but I keep thinking, <span className="underline underline-offset-0">how am I supposed to fight for Chinatown and try to have a&nbsp;kid?</span>
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelFour = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            This is the city’s first design-build rather than design-bid-build
            project, so we don’t have any idea what the design&nbsp;is.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/AC3.png"
            alt=""
            layout="responsive"
            width={2050}
            height={950}
            objectFit="cover"
          />
        </ImageContainer>
      </Container>
    </div>
  );
};

const PanelFive = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <ImageContainer>
          <Image
            src="/AC4.png"
            alt=""
            layout="responsive"
            width={2050}
            height={950}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            There’s water in the soil of Canal street that would need to be pumped
            out, that’s actually really risky. Pile driving is about 120 decibels,
            how are they going to mitigate that? <span className="underline underline-offset-0">How can the businesses and the citizens in the building survive?</span> I don’t get&nbsp;it.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelSix = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <ImageContainer>
          <Image
            src="/AC5.png"
            alt=""
            layout="responsive"
            width={2050}
            height={800}
          />
        </ImageContainer>
        <Lower>
          <p>
          Rikers is supposed to close as a jail by August 31, 2027. The city is pushing everything through without enough consideration of the local community because doing so would take up time needed to focus on demolishing, designing, and building. I'm now trying to think through how to change the&nbsp;law.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelSeven = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p className="font-winnieyoe text-2xl text-center">
            I started my platform to teach people the story, the history. I just
            finished this page I’ll post on the&nbsp;site.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/AC6.png"
            alt=""
            layout="responsive"
            width={2050}
            height={800}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p className="font-winnieyoe text-2xl text-center">
            I also wanted to build out an email form that allows people to find
            who to email to get attention on different&nbsp;issues.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelEight = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p className="font-winnieyoe text-2xl text-center">
            Until recently, The people fighting the jails and fighting the
            shelters aren’t helping the other. A lot of the shelter language is
            viewed as NIMBY* while some view the jail as a done deal. (*Not in my&nbsp;backyard)
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/AC7.png"
            alt=""
            layout="responsive"
            width={2050}
            height={800}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p className="font-winnieyoe text-2xl text-center">
            If you zoomed out far enough it’s the same story, <span className="underline underline-offset-0">it’s a story of
              institutionalized hate</span> and pushing through things to Chinatown because
            people don’t have a&nbsp;voice.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelNine = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <ImageContainer>
          <Image
            src="/AC8.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1150}
          />
        </ImageContainer>
        <Lower>
          <p className="font-winnieyoe text-2xl text-center">
            A lot of people in Chinatown are Chinese speaking people who didn’t
            know what’s going on. There's a whole group of people that I feel is
            untapped. So I’m trying to connect the three Chinatown, Brooklyn, and
            &nbsp;Queens.
          </p>
        </Lower>
      </Container>
    </div>

  );
};

const PanelTen = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p className="font-winnieyoe text-2xl text-center">
            How did we get here? AAPI wasn’t watching. I wasn’t watching. We
            generally speaking haven’t been civically engaged, there hasn’t been
            an issue that brings us&nbsp;together.
          </p>
        </Upper>
        <div className="w-1/2 text-center">
          <Image
            src="/AC9.png"
            alt=""
            layout="responsive"
            width={2050}
            height={800}
          />
          <p>
            Statistic from <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://www.politico.com/newsletters/the-recast/2021/10/03/poll-asian-american-pacific-islander-voters-politics-fear-494533">the POLITICO/Morning Consult poll, 2021</a>
          </p>
        </div>
        <Lower>
          <p className="font-winnieyoe text-2xl text-center">
          What are the things we can learn from the Civil Rights Movement and Black Lives Matter? Let's find what unites&nbsp;us.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelEleven = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p className="font-winnieyoe text-2xl text-center">
            There are so many nuances within AAPI and
            nobody’s going to understand what it’s&nbsp;like.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/AC10.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1000}
          />
        </ImageContainer>
        <Lower>
          <p className="font-winnieyoe text-2xl text-center">
          One day, I would like to book out Madison Square Garden or Barclays Center and throw a massive unity rally to come together over the issues we face but also to celebrate Asian excellence. Can you hear us&nbsp;now?
          </p>
          <p className="font-winnieyoe text-2xl text-center">
            <span className="underline underline-offset-0">“Can you hear us&nbsp;now?”</span>
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelTwelve = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <ImageContainer>
          <Image
            src="/AC11.png"
            alt=""
            layout="responsive"
            width={2050}
            height={900}
          />
        </ImageContainer>
        <Lower>
          <p className="font-winnieyoe text-2xl text-center">
            People are pushing for criminal justice reform, people also want to
            help the homeless. We want all these other things too, within
            Chinatown, it was just like, <span className="underline underline-offset-0">can you help us&nbsp;too?</span>
          </p>

        </Lower>
      </Container>
    </div>
  );
};

const PanelThirteen = () => {
  return (
    <div className="w-full relative bg-[#fef8f3] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <ImageContainer>
          <Image
            src="/AC12.png"
            alt=""
            layout="responsive"
            width={2050}
            height={900}
          />
        </ImageContainer>
        <Lower>
          <p className="font-winnieyoe text-2xl text-center">
            You’re pro-closing Rikers, are you also pro-protecting the
            people of&nbsp;Chinatown?
          </p>

        </Lower>
      </Container>
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