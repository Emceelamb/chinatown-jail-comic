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

const Jl: NextPage = () => {
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
            <a className="underline">Jan L.</a>
          </Link>
          <Link href="/kc">
            <a className="hover:underline">Karlin C.</a>
          </Link>
          <Link href="/jy" >
            <a className="hover:underline">Justin Y.</a>
          </Link>
          <Link href="/ac">
            <a className="hover:underline">Anonymous</a>
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
            Jan Lee is one of the cofounders of Neighbors United Below Canal
            (N.U.B.C.), a neighborhood activist group that organized the March
            20 rally amongst other advocacy work in Chinatown.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};

const PanelTwo = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-2/3 m-auto">
        <p className="font-winnieyoe text-2xl text-center">
          My family has been in Chinatown since 1900. I’m the third generation.
          We are a small property owner and we have owned different businesses
          over the decade from Chinese hand laundry, gift store, to dry cleaning
          stores.
        </p>
      </div>
      <div className="w-1/2 m-auto">
        <Image
          src="/J1.png"
          alt=""
          layout="responsive"
          width={1080}
          height={739}
        />
      </div>
      <div className="w-2/3 m-auto">
        <p className="font-winnieyoe text-2xl text-center">
          I own a home furnishing and antique store.
        </p>
      </div>
    </div>
  );
};

const PanelThree = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-2">
      <div className="w-1/2">
        <p className="font-winnieyoe text-3xl text-center">
          I have been involved in community organizing for more than 25 years.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/J2.png"
            alt=""
            layout="responsive"
            width={928}
            height={785}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-3xl text-center">
          As a business owner, you get more involved when you have a stake in
          the community.
        </p>
      </div>
    </div>
  );
};

const PanelFour = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          I first heard about the jail plan in a small private meeting with less
          than a dozen of community leaders and organizations. The city made a
          presentation with the council member of the time, Margaret Chan.
        </p>
      </div>
      <div className="w-1/4">
        <FadeInSection>
          <Image
            src="/J3.png"
            alt=""
            layout="responsive"
            width={928}
            height={785}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          It was presented as a done deal. It was not a collaborative process.
          We were shocked.
        </p>
      </div>
    </div>
  );
};

const PanelFive = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          We realized if we want to sue the city we would need an entity that
          would bring people together to create a singular news source, and a
          singular voice that could amplify what Chinatown really felt.
        </p>
      </div>
      <div className="w-1/4">
        <FadeInSection>
          <Image
            src="/J4.png"
            alt=""
            layout="responsive"
            width={680}
            height={716}
          />
        </FadeInSection>
      </div>
      <div>
        <p className="font-winnieyoe text-2xl text-center">
          That’s how Neighbors United Below Canal started, with Christopher
          Marte* and I.
        </p>
      </div>
    </div>
  );
};

const PanelSix = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-12">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          NUBC is a clearinghouse of information, our volunteers process
          technical information for the layperson.
        </p>
      </div>
      <div className="w-1/2">
        <FadeInSection>
          <Image
            src="/J5.png"
            alt=""
            layout="responsive"
            width={972}
            height={665}
          />
        </FadeInSection>
      </div>
    </div>
  );
};

const PanelSeven = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <FadeInSection>
          <Image
            src="/J6.png"
            alt=""
            layout="responsive"
            width={1282}
            height={595}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          We also partner with other organizations to do workshops, townhalls,
          and outreach.
        </p>
      </div>
    </div>
  );
};

const PanelEight = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          It’s important to remember that the history of jails in Chinatown
          traces back to 1983.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/J7.png"
            alt=""
            layout="responsive"
            width={1282}
            height={757}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          We’ve watched the city of New York build jails and tear them down,
          only to build them back, bigger, and then tear them down.
        </p>
      </div>
    </div>
  );
};

const PanelNine = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-2/3">
        <p className="font-winnieyoe text-2xl text-center">
          The city gets it wrong every time. We are not NIMBY*.
        </p>
      </div>
      <div className="w-72">
        <FadeInSection>
          <Image
            src="/J8.png"
            alt=""
            layout="responsive"
            width={611}
            height={907}
          />
        </FadeInSection>
      </div>
      <div>
        <p className="font-winnieyoe text-2xl text-center">
          * Not in my backyard
        </p>
      </div>
    </div>
  );
};

const PanelTen = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-2/3">
        <p className="font-winnieyoe text-2xl text-center">
          The March 20 protest was multigenerational — there were seniors,
          children, and everyone in between. I felt encouraged.
        </p>
      </div>
      <div className="w-1/3">
        <FadeInSection>
          <Image
            src="/J9.png"
            alt=""
            layout="responsive"
            width={972}
            height={729}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl tex-center">
          This is not just an AAPI issue, people feel very strongly against the
          expansion of incarceration and the answer to criminal justice reform.
        </p>
      </div>
    </div>
  );
};

const PanelEleven = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-8">
      <div className="w-2/3">
        <p className="font-winnieyoe text-2xl text-center">
          Chinatown in the United States are always fighting land use issues.
          Chinatown build up undesirable corners of the city, and once the
          community made the investment, the government come in and try to take
          that land back.
        </p>
      </div>
      <div className="w-1/2">
        <FadeInSection>
          <Image
            src="/J10.png"
            alt=""
            layout="responsive"
            width={1492}
            height={730}
          />
        </FadeInSection>
      </div>
      <div className="w-1/2">
        <p className="font-winnieyoe text-2xl text-center">
          It’s just like Harlem, the government is dumping a lot of unfavorable
          things in this community while they keep other white communities more
          pristine.
        </p>
      </div>
    </div>
  );
};

const PanelTwelve = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center space-y-4">
      <div className="w-2/3">
        <p className="font-winnieyoe text-2xl text-center">
          From histroy we know that every time you have a large project it
          disrupts the community for years. Jail building always comes with a
          very large price tag.
        </p>
      </div>
      <div className="w-2/5">
        <FadeInSection>
          <Image
            src="/J11.png"
            alt=""
            layout="responsive"
            width={1234}
            height={815}
          />
        </FadeInSection>
      </div>
      <div>
        <p className="font-winnieyoe text-2xl">
          If we lose this, we lose Chinatown. If stopping the jail is not
          successful, there is no Chinatown.
        </p>
      </div>
    </div>
  );
};

const PanelThirteen = () => {
  return (
    <FadeInSection>
      <div className="w-full relative h-screen flex flex-col justify-center items-center">
        <div className="w-2/3">
          <p className="font-winnieyoe text-3xl text-center">
            From history we know that every time you have a large project it
            disrupts the community for years. Jail building always comes with a
            very large price tag.
          </p>
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

export default Jl;
