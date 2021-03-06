import type { NextPage } from "next";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSound from "use-sound";
import "animate.css/animate.min.css";

import ReactFullpage from "@fullpage/react-fullpage";
import { Interviews } from "../components/Interviews";
import { Thumbnail } from "../components/Thumbnail";
import { Container, Upper, Lower, ImageContainer } from "../components/Container";
import { Endnotes } from "../components/Endnotes";

const Jy: NextPage = () => {
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
              <a className="underline decoration-dotted decoration-1 underline-offset-2">Justin Y.</a>
            </Link>
            <Link href="/ac">
              <a className="hover:underline decoration-dotted decoration-1 underline-offset-2">Anonymous</a>
            </Link>
          </li>
        </ul>
      </div>
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
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelTwo />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelThree />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelFour />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelFive />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelSix />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelSeven />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelEight />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelNine />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelTen />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                    <Image
                      src="/Interview3.png"
                      alt=""
                      layout="responsive"
                      width={1000}
                      height={1000}
                      objectFit="cover"
                    />
                  </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Justin Y.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelEleven />
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
      <div className="w-full relative bg-[#edf4ef] h-screen flex flex-col justify-center items-center">
        <div className="w-2/3">
          <p className="font-winnieyoe text-3xl text-center">
            Justin Yu is the Chairman of the Chinese Chamber of Commerce of New
            York, former President of the Chinese Consolidated Benevolent
            Association, one of the oldest community organizations in New York,
            and serve as board member in many other&nbsp;organizations.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};

const PanelTwo = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <ImageContainer>
          <Image
            src="/JY1.png"
            alt=""
            layout="responsive"
            width={2050}
            height={900}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            I moved from Taiwan to New York in 1972, I was a reporter for the
            World Journal Daily for 25 years. I have seen New York City up and&nbsp;
            down.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelThree = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            When I move into Confucius Plaza in late 1975, I was one of the&nbsp;youngest.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JY2.png"
            alt=""
            layout="responsive"
            width={2050}
            height={900}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            Today, I???m still the youngest after 46 years. <span className="underline underline-offset-0">The building and the
            residents are aging&nbsp;together.</span>
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelFour = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            I engaged in community activity since I retired. I was the Chairman of
            the Chinese Chamber of Commerce of New York, served as the former
            president of the Chinese Consolidated Benevolent&nbsp;Association...
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JY3.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1000}
            objectFit="cover"
          />
        </ImageContainer>
      </Container>
    </div>
  );
};

const PanelFive = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            The jail is going to hurt us. We hope they can scale down to a smaller
            size and shorten constructor&nbsp;time.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JY4B.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1100}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            <span className="underline underline-offset-0">Because of the jail, Baxter street may disappear in a couple of&nbsp;years.</span>
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelSix = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
          There???s also the shelters. 20 hotels were constructed before the
          pandemic, after the pandemic they are empty and now the city is
          utilizing the hotel to&nbsp;shelter.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JY5.png"
            alt=""
            layout="responsive"
            width={2050}
            height={800}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
          <span className="underline underline-offset-0">Small business community just cannot afford so many shelters.</span> It???s an
          obstacle for our recovery&nbsp;process.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelSeven = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <ImageContainer>
          <Image
            src="/JY6.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1000}
            objectFit="cover"
          />
        </ImageContainer>
      </Container>
    </div>
  );
};

const PanelEight = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <ImageContainer>
          <Image
            src="/JY7.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1050}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            But I am optimistic because we have almost 100 organizations that own
            buildings. This should be very stable for us to exist for the coming&nbsp;years.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelNine = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
          During the pandemic, so many original business people just pack and&nbsp;
          left.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JY8.png"
            alt=""
            layout="responsive"
            width={2050}
            height={900}
          />
        </ImageContainer>
        <Lower>
          <p>
          Now the core area of Chinatown all open up, small businesses are
          coming back, which I???m very happy&nbsp;about.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelTen = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
          During the pandemic, <span className="underline underline-offset-0">the younger generation also came back to serve.</span>
          They are doing all kinds of work, and we are encouraging them to do&nbsp;it.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JY9.png"
            alt=""
            layout="responsive"
            width={2050}
            height={900}
          />
        </ImageContainer>
        <Lower>
          <p>
          Before the Pandemic, we???re always worried about where all the
          organizations are going to be but now they are coming back we see the&nbsp;hope.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelEleven = () => {
  return (
    <div className="w-full relative bg-[#edf4ef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
          In Chinese, we say ??????, ??????.  From very negative impact <span className="underline underline-offset-0">we see the
          bright hope from&nbsp;this.</span>
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JY10.png"
            alt=""
            layout="responsive"
            width={2050}
            height={800}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
          Yes. There???s a silver&nbsp;lining.
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

export default Jy;