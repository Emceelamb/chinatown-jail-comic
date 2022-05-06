import React, { useRef, useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ReactFullpage from "@fullpage/react-fullpage";
import { Interviews } from "../components/InterviewsHome";
import { Container, Upper, ImageContainer } from "../components/Container";

const App: NextPage = () => {
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
            <a className="underline">Home</a>
          </Link>
          <Link href="/jl">
            <a className="hover:underline">Jan L.</a>
          </Link>
          <Link href="/kc" className="hover:underline">
            <a>Karlin C.</a>
          </Link>
          <Link href="/jy" className="hover:underline">
            <a>Justin Y.</a>
          </Link>
          <Link href="/ac" className="hover:underline">
            <a>Anonymous</a>
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="App">
      <Head>
        <title>Chinatown Jail</title>
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
                <Interviews />
              </div>
              <div className="section">
                <PanelSix />
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
    <div style={{orphans:3}} className="w-full relative bg-[#fff] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <div className="absolute z-10 mb-48">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-3/5">
              <h1 className="font-bold text-5xl text-center mb-6">
                Can you hear us now?
              </h1>
              <p className="text-xl text-center">
                Community members in New York Chinatown have been fighting against the construction of a new jail since its announcement in 2017. Some believe the decision will displace an already marginalized community and view the plan as a racist legacy of urban renewal in Chinatowns across the country. Follow along to see how four community members have responded to the jail&nbsp;plan.
              </p>
            </div>

            <button className="w-24 h-12 bg-gray-200 font-bold text-xl mt-8" onClick={() => moveSectionDown()}>
              Begin ↓
            </button>

          </div>
        </div>
        <div className=" w-1/2 h-full">
          <div className="flex flex-col items-center justify-end h-full">
            <div className="w-full">

              <Image
                src="/Context1.png"
                alt=""
                layout="responsive"
                width={2050}
                height={1152}
                objectFit="cover"
              />
            </div>
          </div>


        </div>
      </Container>
    </div>
  );
};

// const PanelOne = () => {
//   const [height, setHeight] = useState(0);

//   const moveSectionDown = () => {
//     return fullpage_api.moveSectionDown();
//   };

//   useEffect(() => {
//     setHeight(window.innerHeight);
//   });

//   return (
//     <FadeInSection>
//       <div className="w-full relative h-screen">
//         <div className="absolute w-1/3 mt-20 ml-12 ">
//           <DelayFadeInSection>
//             <div className="space-y-4">
//               <h1 className="font-bold text-5xl ">Can you hear us now?</h1>

//               {/* <p className="font-winnieyoe text-3xl">Intro text</p> */}

//               <div className="flex flex-col space-y-4">
//                 <button
//                   className="w-32 bg-gray-200 h-12 font-bold"
//                   onClick={() => moveSectionDown()}
//                 >
//                   Begin ↓
//                 </button>
//                 {/* <span className="font-bold flex items-center space-x-8">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     version="1.0"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 75 75"
//                     className="mr-2"
//                   >
//                     <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" />
//                     <path
//                       d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
//                       style={{
//                         stroke: "#111",
//                         strokeWidth: 5,
//                         strokeLinejoin: "round",
//                         fill: "#111",
//                       }}
//                     />
//                   </svg>
//                   This comic features audio. Click to unmute.
//                 </span> */}
//               </div>
//             </div>
//           </DelayFadeInSection>
//         </div>
//         <div className="bottom-0 absolute w-screen -z-10">
//           <div className="w-10/12 m-auto bottom-0">
//             <Image
//               src="/Context1.png"
//               alt=""
//               layout="responsive"
//               width={2050}
//               height={1153}
//               className="absolute"
//             />
//           </div>
//         </div>
//       </div>
//     </FadeInSection>
//   );
// };

const PanelTwo = () => {
  return (
    <div style={{orphans:4}} className="w-full relative bg-[#fff] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <Upper>
          <p>
            On March 20, 2022, hundreds of protestors marched in Chinatown in
            Manhattan to protest against the city’s plan to build the world’s
            tallest jail in the&nbsp;neighborhood.{" "}
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/Context2.png"
            alt=""
            layout="responsive"
            width={2000}
            height={600}
            objectFit="cover"
          />
        </ImageContainer>
      </Container>
    </div>
  );
};

const PanelThree = () => {
  return (
    <FadeInSection>
      <div style={{orphans:4}} className="w-full bg-white h-screen flex flex-col justify-center items-center space-y-8">
        <Container>
          <Upper>
            <p className="font-winnieyoe text-xl md:text-2xl text-center">
              The jail is part of former Mayor Bill de Blasio’s $8.7 billion
              plan to close the Rikers Island prison complex and build four
              smaller facilities around the city, one each in Manhattan,
              Brooklyn, Bronx and Queens. The city believes the plan will create
              a smaller and more humane jail&nbsp;system.
            </p>
          </Upper>
          <ImageContainer>
            <Image
              src="/Context3.png"
              alt=""
              layout="responsive"
              width={2050}
              height={800}
              objectFit="cover"
            />
          </ImageContainer>
        </Container>
      </div>
    </FadeInSection>
  );
};

const PanelFour = () => {
  return (
    <div style={{orphans:4}} className="w-full bg-white flex flex-col  ">
      <Container>
        <Upper>
          <p className="font-winnieyoe text-xl md:text-2xl text-center">
            In Manhattan, the existing Manhattan Detention Complex (nicknamed
            the Tombs) will be demolished and replaced with a larger 40 story
            facility. Community members has been speaking out against the jail
            plan since&nbsp;2018.
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/Context4.gif"
            alt=""
            layout="responsive"
            width={2050}
            height={1000}
            objectFit=""
          />
        </ImageContainer>
      </Container>
    </div>
  );
};
/*
const PanelFour = () => {
  return (
    <div className="red-200 bg-[#F2F2F2]">
      <div className="w-full  flex-col justify-center items-center align-center space-y-8">
        <div className="">
          <p className="font-winnieyoe text-2xl md:text-3xl w-10/12 md:w-1/2 m-auto text-center mt-20">
            In Manhattan, the existing Manhattan Detention Complex (nicknamed
            the Tombs) will be demolished and replaced with a larger 40 story
            facility. Community members has been speaking out against the jail
            plan since 2018.
          </p>
        </div>
      </div>
      <div className="w-10/12">
        <FadeInSection>
          <Image
            src="/Context4.gif"
            alt=""
            layout="responsive"
            width={2050}
            height={600}
            objectFit="cover"
          />
        </FadeInSection>
      </div>
    </div>
  );
};
*/
const PanelFive = () => {
  return (
    <div className="w-full bg-white h-screen flex flex-col justify-center items-center">
      <Container>
        <Upper>
          <p className="font-winnieyoe text-xl md:text-2xl text-center">
            Over the last decades, Chinatown has faced numerous challenges: from
            the impact of 9/11 and subsequently the closure of the Park Row
            highway, which dramatically reduced flow of traffic and visitors, to
            the impact of Covid on its restaurant and tourism industy and
            increasing Asian hate&nbsp;crime...
          </p>
        </Upper>
        <ImageContainer>
          <Image
            src="/Context5.png"
            alt=""
            layout="responsive"
            width={2050}
            height={1153}
            objectFit="cover"

          />
        </ImageContainer>
      </Container>
    </div>
  );
};

const PanelSix = () => {
  return (
    <div style={{orphans:3}} className="w-full relative bg-white h-screen">
      <div className="mt-20 absolute">
        <div className="w-2/3 m-auto">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">After note</h2>
            <p className="font-winnieyoe text-3xl text-center">
              On April 11, 2022, the Department of Design and Construction
              started installing construction fencing in preparation for
              dismantling the Tombs.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0">
        <div className="w-1/2 m-auto mb-10">
          <FadeInSection>
            <Image
              src="/Context7.png"
              alt=""
              layout="responsive"
              width={2500}
              height={700}
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

export default App;
