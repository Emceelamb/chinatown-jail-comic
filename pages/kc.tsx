import type { NextPage } from "next";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSound from "use-sound";
import "animate.css/animate.min.css";

import ReactFullpage from "@fullpage/react-fullpage";
import { Interviews } from "../components/Interviews";

const Kc: NextPage = () => {
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
          <Link href="/kc">
            <a className="underline">Karlin C.</a>
          </Link>
          <Link href="/jy">
            <a className="hover:underline">Justin Y.</a>
          </Link>
          <Link href="/ac">
            <a className="hover:underline">Anonymous</a>
          </Link>
        </li>
      </ul>
    </div>
  );

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  return (
    <div className="App">
      <Head>
        <title>Chinatown Mega Jail</title>
      </Head>
      <Menu />
      <ReactFullpage
        navigation
        // scrollHorizontally = {true}
        // onLeave={onLeave}
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
      <div className="w-full bg-[#eef1f5] relative h-screen flex flex-col justify-center items-center">
        <div className="w-2/3">
          <p className="font-winnieyoe text-3xl text-center">
            Karlin Chan is a long time independent community activist. During
            the pandemic, he started community patrol Chinatown Block Watch and
            the Chinatown Mural Project.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};

const PanelTwo = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen space-y-8">
      <div className="w-2/3 m-auto">
        <p className="font-winnieyoe text-2xl text-center">
          I lived in this community for 60+ years. I moved here when I was a
          toddler.
        </p>
      </div>
      <div className="w-1/2 m-auto">
        <Image
          src="/KC1.png"
          alt=""
          layout="responsive"
          width={2050}
          height={1153}
        />
      </div>
      <div className="w-2/3 m-auto">
        <p className="font-winnieyoe text-2xl text-center">
          Chinatown was very small then. It was just 3 and half, four streets.
        </p>
      </div>
    </div>
  );
};

const PanelThree = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center space-y-2">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          I started out as an advocate for crime victims.
        </p>
      </div>
      <div className="w-1/4">
        <FadeInSection>
          <Image
            src="/KC2.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1153}
          />
        </FadeInSection>
      </div>
      <div className="w-2/3">
        <p className="font-winnieyoe text-2xl text-center">
          I always say, many Chinese crime victims are victimized twice. First
          by the people who mug them, the second time by the criminal justice
          system itself.
        </p>
      </div>
    </div>
  );
};

const PanelFour = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          Give you an example, in this once case, this guy was hit by his
          neighbor, a bully.
        </p>
      </div>
      <div className="w-1/4">
        <FadeInSection>
          <Image
            src="/KC3.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1153}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          When the police came, they arrested him instead of the bully. He
          didn’t speak English and the neighbor said he hurt him.
        </p>
      </div>
    </div>
  );
};

const PanelFive = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/3">
        <p className="font-winnieyoe text-2xl text-center">
          Give you an example, in this once case, this guy was hit by his
          neighbor, a bully.
        </p>
      </div>
      <div className="w-1/4">
        <FadeInSection>
          <Image
            src="/KC4.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1153}
          />
        </FadeInSection>
      </div>
      <div className="w-1/3">
        <p className="font-winnieyoe text-2xl text-center">
          When the police came, they arrested him instead of the bully. He
          didn’t speak English and the neighbor said he hurt him.
        </p>
      </div>
    </div>
  );
};

const PanelSix = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center ">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          Right when the city announced the plan, I organized a rally. I
          contacted people from the neighborhood, I went to Brooklyn, to the
          Bronx, to get other people to come down from different boroughs to let
          people know that we’re all opposed the plan, not just Chinatown.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/KC5.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1153}
          />
        </FadeInSection>
      </div>
    </div>
  );
};

const PanelSeven = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          Last week, I got a tip that Chung Pak management also manages the
          restaurants around them for the city. The city told Chung Pak* to help
          evict these people for the jail plan.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/KC6.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1153}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          Had I known it earlier, I would go to those businesses and told them
          not to leave.
        </p>
      </div>
    </div>
  );
};

const PanelEight = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          The problem that hurt Chinatown is we can’t deliver a big block of
          votes, we’re so divided on issues. The elected know that there’s
          splintering in the community and they exploit that.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/KC7.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1153}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-xl text-center">
          During the City Council Election in 2021, there were 3 Asian
          candidates, Jenny Low, Susan Lee, and Gigi Li. Christopher Marte won
          the election eventually.
        </p>
      </div>
    </div>
  );
};

const PanelNine = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center space-y-4 ">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          I work alone, I call myself an independent community activist and
          advocate. Organizations are always fighting for funding. When you tie
          yourself with an organization, you lose your independent voice.
        </p>
      </div>
      <FadeInSection>
        <div className="flex">
          <div className="w-64">

            <Image
              src="/KC8a.png"
              alt=""
              layout="responsive"
              width={300}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className="w-64">

            <Image
              src="/KC8b.png"
              alt=""
              layout="responsive"
              width={300}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className="w-64">
          <Image
            src="/KC8c.png"
            alt=""
            layout="responsive"
            width={300}
            height={400}
            objectFit="cover"
          />
          </div>
          <div className="w-64">
          <Image
            src="/KC8d.png"
            alt=""
            layout="responsive"
            width={300}
            height={400}
            objectFit="cover"
          />
          </div>
        </div>

      </FadeInSection>

      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          It’s taken me many years to build a platform and I try to work with
          everyone who’s open for it.
        </p>
      </div>
    </div>
  );
};

const PanelTen = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-2/3">
        <p className="font-winnieyoe text-2xl text-center">
          During the pandemic, I started the Chinatown Blockwatch. I do the
          patrol 3, now 2 days a week. We had volunteers from New Jersey, the
          Bronx, Queens. Not all are Chinese.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/KC9.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1153}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          I was hoping we can take a break when the city opens up, but it has
          actually got so much worst.
        </p>
      </div>
    </div>
  );
};

const PanelEleven = () => {
  return (
    <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          I’m 60 something, I’d like to retire and enjoy my golden years, but
          now we have all these hate crimes making me run around.
        </p>
      </div>
      <div className="w-1/4">
        <FadeInSection>
          <Image
            src="/KC10.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1152}
          />
        </FadeInSection>
      </div>
    </div>
  );
};

const PanelTwelve = () => {
  return (
    <FadeInSection>
      <div className="w-full bg-[#eef1f5] relative h-screen flex flex-col justify-center items-center">
        <div className="w-1/3">
          <FadeInSection>
            <Image
              src="/KC11.png"
              alt=""
              layout="responsive"
              width={2050}
              height={1152}
            />
          </FadeInSection>
        </div>
      </div>
    </FadeInSection>
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

export default Kc;