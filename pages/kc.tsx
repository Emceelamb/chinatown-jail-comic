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
import { Thumbnail } from "../components/Thumbnail";
import { Container, Upper, Lower, ImageContainer } from "../components/Container";

const Kc: NextPage = () => {
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
              <a className="underline decoration-dotted decoration-1 underline-offset-2">Karlin C.</a>
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
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin Chan</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelTwo />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelThree />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelFour />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelFive />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelSix />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelSeven />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelEight />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelNine />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelTen />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
            </div>
            <div className="section">
              <PanelEleven />
              <Thumbnail>
                  <div className="w-24 absolute bottom-8">
                  <Image
                    src="/Interview2.png"
                    alt=""
                    layout="responsive"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    />
                    </div>
                  <div className="text-center space-y-2 font-winnieyoe text-lg mb-6 absolute">
                    <p className="font-bold">Karlin C.</p>
                  </div>
                </Thumbnail>
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
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            I lived in this community for 60+ years. I moved here when I was a&nbsp;toddler.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/KC1.png"
            alt=""
            layout="responsive"
            width={2050}
            height={950}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            Chinatown was very small then. It was just 3 and half, four&nbsp;streets.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelThree = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            I started out as an advocate for crime&nbsp;victims.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/KC2.png"
            alt=""
            layout="responsive"
            width={2050}
            height={700}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            I always say, <span className="underline underline-offset-0">many Chinese crime victims are victimized twice.</span> First
            by the people who mug them, the second time by the criminal justice
            system&nbsp;itself.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelFour = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            Give you an example, in this once case, this guy was hit by his
            neighbor, a&nbsp;bully.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/KC3.png"
            alt=""
            layout="responsive"
            width={2050}
            height={900}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            When the police came, they arrested him instead of the bully. He
            didn’t speak English and the neighbor said he hurt&nbsp;him.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelFive = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            I first read about the borough based jail plan in some periodicals. I contacted the then council woman Margaret Chin and ran across a stone wall. That’s how I knew it was&nbsp;true.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/KC4.png"
            alt=""
            layout="responsive"
            width={2050}
            height={750}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            <span className="underline underline-offset-0">You got to be proactive, not reactive.</span> I wrote one article and got the Chinese press to do another article. Back then, people thought “Ah, it won’t&nbsp;happen.”
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelSix = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            Right when the city announced the plan, I organized a rally. I
            contacted people from the neighborhood, I went to Brooklyn, to the
            Bronx, to get other people to come down from different boroughs to let
            people know that we’re all opposed the plan, not just&nbsp;Chinatown.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/KC5.png"
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

const PanelSeven = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            Last week, I got a tip that Chung Pak management also manages the
            restaurants around them for the city. The city told Chung Pak* to help
            evict them for the jail&nbsp;plan.
          </p>
        </Upper>

        <ImageContainer>
          <Image
            src="/KC6.png"
            alt=""
            layout="responsive"
            width={2050}
            height={750}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <div className="flex flex-col items-center">
            <p>
              Had I known it earlier, I would go to those businesses and told them
              not to&nbsp;leave.
            </p>

            <p className="text-center text-base leading-none mt-2 w-3/5">*An affordable senior housing complex is next to the Tombs. It was built as part of an offering to the community when the City built the last jail.</p>
          </div>
        </Lower>
      </Container>
    </div>
  );
};

const PanelEight = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            The problem that hurt Chinatown is we can’t deliver a big block of
            votes, we’re so divided on issues. The elected know that there’s splintering in the community and they exploit&nbsp;that.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/KC7.png"
            alt=""
            layout="responsive"
            width={2050}
            height={850}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <div className="flex flex-col items-center">
            <p>
              During the City Council Election in 2021, there were 3 Asian
              candidates, Jenny Low, Susan Lee, and Gigi Li. Christopher Marte won
              the election&nbsp;eventually.
            </p>
            <p className="text-center text-base leading-none mt-2 w-3/5">*Statistics from round 1 result from democratic primary election for New York City Council District in&nbsp;2021.</p>
          </div>

        </Lower>
      </Container>
    </div>
  );
};

const PanelNine = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            I work alone, I call myself an independent community activist and
            advocate. Organizations are always fighting for funding. When you tie
            yourself with an organization, you lose your independent&nbsp;voice.
          </p>
        </Upper>
        <FadeInSection>
          <div className="flex">
            <div className="flex flex-col items-center">
              {/* 
              FORMAT

              <div className="flex flex-col items-center" id="container"> // FIGMA AUTO LAYOUT VERTICA:
                <div className="w-64" id="image-container">  // FIGMA AUTO LAYOUT WIDTH CONTAINER
                  <Image />  
                </div> 
                <div>
                  <p>caption</p>  
                </div>
              </div>

               */}

              <div className="w-64">
                <Image
                  src="/KC8a.png"
                  alt=""
                  layout="responsive"
                  width={300}
                  height={220}
                  objectFit="cover"
                />
              </div>
              <p className="text-center leading-none w-1/2">PS23 restoration on 70 Mulberry&nbsp;Street</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-64">
                <Image
                  src="/KC8b.png"
                  alt=""
                  layout="responsive"
                  width={300}
                  height={220}
                  objectFit="cover"
                />
              </div>
              <p className="text-center leading-none w-1/2">Community patrol Chinatown Block&nbsp;Watch</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-64">
                <Image
                  src="/KC8c.png"
                  alt=""
                  layout="responsive"
                  width={300}
                  height={220}
                  objectFit="cover"
                />
              </div>
              <p className="text-center leading-none w-1/2">Mentor for community basketball&nbsp;team</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-64">
                <Image
                  src="/KC8d.png"
                  alt=""
                  layout="responsive"
                  width={300}
                  height={220}
                  objectFit="cover"
                />
              </div>
              <p className="text-center leading-none w-1/2">Chinatown Mural&nbsp;Project</p>
            </div>
          </div>

        </FadeInSection>
        <Lower>
          <p>
            It’s taken me many years to build a platform and I try to work with
            everyone who’s open for&nbsp;it.
          </p>
        </Lower>
      </Container>
    </div>

    // <div className="w-full bg-[#eef1f5] h-screen relative flex flex-col justify-center items-center space-y-4 ">
    //   <div className="w-1/2">
    //     <p className="font-winnieyoe text-2xl text-center">
    //       I work alone, I call myself an independent community activist and
    //       advocate. Organizations are always fighting for funding. When you tie
    //       yourself with an organization, you lose your independent voice.
    //     </p>
    //   </div>
    //   <FadeInSection>
    //     <div className="flex">
    //       <div className="w-64">

    //         <Image
    //           src="/KC8a.png"
    //           alt=""
    //           layout="responsive"
    //           width={300}
    //           height={400}
    //           objectFit="cover"
    //         />
    //       </div>
    //       <div className="w-64">

    //         <Image
    //           src="/KC8b.png"
    //           alt=""
    //           layout="responsive"
    //           width={300}
    //           height={400}
    //           objectFit="cover"
    //         />
    //       </div>
    //       <div className="w-64">
    //       <Image
    //         src="/KC8c.png"
    //         alt=""
    //         layout="responsive"
    //         width={300}
    //         height={400}
    //         objectFit="cover"
    //       />
    //       </div>
    //       <div className="w-64">
    //       <Image
    //         src="/KC8d.png"
    //         alt=""
    //         layout="responsive"
    //         width={300}
    //         height={400}
    //         objectFit="cover"
    //       />
    //       </div>
    //     </div>

    //   </FadeInSection>

    //   <div className="w-1/2">
    //     <p className="font-winnieyoe text-2xl text-center">
    //       It’s taken me many years to build a platform and I try to work with
    //       everyone who’s open for it.
    //     </p>
    //   </div>
    // </div>
  );
};

const PanelTen = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            During the pandemic, I started the Chinatown Blockwatch. I do the
            patrol 3, now 2 days a week. We had volunteers from New Jersey, the
            Bronx, Queens. Not all are&nbsp;Chinese.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/KC9.png"
            alt=""
            layout="responsive"
            width={2050}
            height={750}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <p>
            I was hoping we can take a break when the city opens up, but it has
            actually got so much&nbsp;worse.
          </p>
        </Lower>
      </Container>
    </div>
  );
};

const PanelEleven = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            I’m 60 something, I’d like to retire and enjoy my golden years, but
            now we have all these hate crimes making me run&nbsp;around.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/KC10.png"
            alt=""
            layout="responsive"
            width={2050}
            height={900}
            objectFit="cover"
          />
        </ImageContainer>
      </Container>
    </div>
  );
};

const PanelTwelve = () => {
  return (
    <div className="w-full relative bg-[#eef1f5] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <ImageContainer>
          <Image
            src="/KC11.png"
            alt=""
            layout="responsive"
            width={2050}
            height={750}
            objectFit="cover"
          />
        </ImageContainer>
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

export default Kc;