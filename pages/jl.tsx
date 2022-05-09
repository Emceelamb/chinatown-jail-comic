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

import { Container, Upper, Lower, ImageContainer } from "../components/Container";

import { Thumbnail } from "../components/Thumbnail";


const Jl: NextPage = () => {
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
              <a className="underline decoration-dotted decoration-1 underline-offset-2">Jan L.</a>
            </Link>
            <Link href="/kc">
              <a className="hover:underline decoration-dotted decoration-1 underline-offset-2">Karlin C.</a>
            </Link>
            <Link href="/jy">
              <a className="hover:underline decoration-dotted decoration-1 underline-offset-2">Justin Y.</a>
            </Link>
            <Link href="/ac">
              <a className="hover:underline decoration-dotted decoration-1 underline-offset-2">Anonymous</a>
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
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan Lee</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelTwo />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan Lee</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelThree />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan Lee</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelFour />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan Lee</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelFive />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan Lee</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelSix />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan Lee</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelSeven />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan Lee</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelEight />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan L.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelNine />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan L.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelTen />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan L.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelEleven />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan L.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelTwelve />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan L.</p>
                  </div>
                </Thumbnail>
              </div>
              <div className="section">
                <PanelThirteen />
                <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview1.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Jan L.</p>
                  </div>
                </Thumbnail>
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
      <div className="w-full bg-[#f9efef] relative h-screen flex flex-col justify-center items-center">
        <div className="w-2/3">
          <p className="font-winnieyoe text-3xl text-center">
            Jan Lee is one of the cofounders of Neighbors United Below Canal
            (NUBC), a neighborhood activist group that organized the March
            20 rally amongst other advocacy work in Chinatown.
          </p>
        </div>
      </div>
    </FadeInSection>

  )
};

const PanelTwo = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            My family has been in Chinatown since 1900. I am the third generation.
            We are a small property owner and we have owned different businesses
            over the decade from Chinese hand laundry, gift store, to dry cleaning&nbsp;stores.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JL1.png"
            alt=""
            layout="responsive"
            width={2500}
            height={1000}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            I myself own a home furnishing and antique&nbsp;store.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelThree = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            I have been involved in community organizing for more than 25&nbsp;years.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JL2.png"
            alt=""
            layout="responsive"
            width={2500}
            height={1000}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            As a business owner, you get more involved when you have a stake in
            the&nbsp;community.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelFour = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            I first heard about the jail plan in a small private meeting with less
            than a dozen of community leaders and organizations. The city made a
            presentation with the council member of the time, Margaret&nbsp;Chin.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JL3.png"
            alt=""
            layout="responsive"
            width={2500}
            height={1000}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            The jail plan was presented as a done deal. It was not a collaborative process. <span className="underline underline-offset-0">We were&nbsp;shocked.</span>
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelFive = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            We realized if we want to sue the city we would need an entity that
            would bring people together to create a singular news source, and a
            singular voice that could amplify what Chinatown really&nbsp;felt.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JL4.png"
            alt=""
            layout="responsive"
            width={2500}
            height={900}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            That’s how Neighbors United Below Canal started, with Christopher
            Marte* and&nbsp;I.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelSix = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            NUBC is a clearinghouse of information, our volunteers process
            technical information for the&nbsp;layperson.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JL5.png"
            alt=""
            layout="responsive"
            width={2500}
            height={900}
            objectFit="cover"
          />
        </ImageContainer>
      </Container>
    </div>
  );
};

const PanelSeven = () => {
  return (
    <div className="w-full bg-[#f9efef] h-screen relative flex flex-col justify-center items-center space-y-8">
      <Container>
        <ImageContainer>
          <Image
            src="/JL6.png"
            alt=""
            layout="responsive"
            width={2500}
            height={900}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            We also partner with other organizations to do workshops, townhalls,
            and&nbsp;outreach.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelEight = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            It’s important to remember that the history of jails in Chinatown
            traces back to&nbsp;1983.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JL7.png"
            alt=""
            layout="responsive"
            width={2500}
            height={1000}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            <span className="underline underline-offset-0">We have watched the city of New York build jails and tear them down, only to build them back, bigger, and then tear them&nbsp;down.</span>
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelNine = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            The city gets it wrong every time. We are not&nbsp;NIMBY*.
          </p>
        </Upper>
        <div className="w-1/2">
          <div>
            <Image
              src="/JL8.png"
              alt=""
              layout="responsive"
              width={2050}
              height={1153}
            />
          </div>

          <div className="text-center">
            <p>Shenon, Philip. (1983, Oct. 17). <a className="underline decoration-dotted" href="https://www.nytimes.com/1983/10/17/nyregion/tombs-to-reopen-with-a-new-look.html">Tombs to reopen with a new look.</a> The New York Times.
            </p>
          </div>
        </div>

        <Lower>
          <p>
            * Not in my backyard
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelTen = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            The March 20 protest was multigenerational — there were seniors,
            children, and everyone in between. I felt&nbsp;encouraged.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JL9.png"
            alt=""
            layout="responsive"
            width={2500}
            height={1000}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            This is not just an AAPI issue, people feel very strongly against the
            expansion of incarceration and the answer to criminal justice&nbsp;reform.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelEleven = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            Chinatown in the United States are always fighting land use issues.
            Chinatown build up undesirable corners of the city, and once the
            community made the investment, the government come in and try to take
            that land&nbsp;back.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JL10B.png"
            alt=""
            layout="responsive"
            width={2500}
            height={1000}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            It’s just like Harlem, the government is dumping a lot of unfavorable
            things in this community while they keep other white communities more
            &nbsp;pristine.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelTwelve = () => {
  return (
    <div className="w-full relative bg-[#f9efef] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            From history we know that every time when there is a large building project it disrupts the community for years. It always comes with a very large price&nbsp;tag.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/JL11.png"
            alt=""
            layout="responsive"
            width={2500}
            height={1000}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            <span className="underline underline-offset-0">If we lose this, we lose Chinatown.</span> If stopping the jail is not
            successful, there is no&nbsp;Chinatown.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelThirteen = () => {
  return (
    <FadeInSection>
      <div className="w-full bg-[#f9efef] relative h-screen flex flex-col justify-center items-center">
        <div className="w-2/3">
          <p className="font-winnieyoe text-3xl text-center">
            Since the March rally, NUBC has been working with their lawyer to gather plaintiffs and file a lawsuit at the federal level.
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