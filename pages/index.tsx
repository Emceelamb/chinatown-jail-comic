import React, { useRef, useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ReactFullpage from "@fullpage/react-fullpage";
import { Interviews } from "../components/InterviewsHome";
import { Container, Upper, Lower, ImageContainer } from "../components/Container";

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
              <div className="section">
                <Credits />
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
    <div style={{ orphans: 3 }} className="w-full relative bg-[#fff] h-screen flex items-center flex-col justify-center space-y-10">
      <Container>
        <div className="absolute z-10 mb-72">
          <div className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-white via-white">
            <div className="md:w-1/2 md:p-0 p-8 md:mt-0">
              <h1 className="font-bold md:text-5xl text-3xl text-center mb-6">
                Can you hear us now?
              </h1>
              <p className="text-xl text-center md:leading-tight leading-none">
                Community members in New York Chinatown have been fighting against the construction of a new jail since its announcement in 2017. Some believe the decision will displace an already marginalized community and view the plan as a racist legacy of urban renewal in Chinatowns across the country. Follow along to see how four community members have responded to the jail&nbsp;plan.
              </p>
            </div>

            <button className="w-24 h-12 bg-[#F2C94C]/90 font-bold text-xl md:mt-8 mt-2" onClick={() => moveSectionDown()}>
              Begin ↓
            </button>

          </div>
        </div>
        <div className="w-full md:w-4/6 h-full">
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
    <div style={{ orphans: 4 }} className="w-full relative bg-[#fff] h-screen flex items-center flex-col justify-center space-y-10">
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
            height={900}
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
      <div style={{ orphans: 4 }} className="w-full bg-white h-screen flex flex-col justify-center items-center space-y-8">
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
    <div style={{ orphans: 4 }} className="w-full bg-white flex flex-col">
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
    <div className="w-full bg-white h-screen flex flex-col justify-center items-center">
      <Container>
        <Upper>
          <div>
            <h1 className="font-bold md:text-5xl text-3xl text-center mb-6">Endnotes</h1>
            <p className="font-winnieyoe text-xl md:text-2xl text-center">
              On April 11, 2022, the Department of Design and Construction started installing construction fencing in preparation for dismantling the Tombs.
            </p>
          </div>
        </Upper>
        <ImageContainer>
          <Image
            src="/Context7.png"
            alt=""
            layout="responsive"
            width={2050}
            height={500}
            objectFit="cover"
          />
        </ImageContainer>
        <Lower>
          <div className="flex flex-col">
            <p className="font-bold text-xl md:text-2xl mr-6 mb-2">Share your story</p>
            <p className="font-winnieyoe text-lg md:text-xl text-center mb-8">
              Want to share your thoughts about the jail plan in Chinatown? <a target="_blank" rel="noreferrer"  className="underline decoration-dotted decoration-1" href="https://dufzo9ilgdz.typeform.com/to/g7eMpXeP?typeform-source=admin.typeform.com">Reach out here.</a>
            </p>
          </div>
        </Lower>
      </Container>
    </div>
  );
};

const Credits = () => {
  return (
    <div className="w-full bg-white h-screen flex flex-col justify-center items-center">
      <Container>
        <Upper>
          <div className="flex flex-row items-baseline mb-12">
            <p className="font-bold text-lg mr-8">Credits</p>
            <p className="text-left text-lg leading-none">Design and writing by <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer"  href="https://winnieyoe.com/" >Winnie Yoe</a>. Development by <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer"  href="https://markofthelam.com/">Mark Lam</a>. Thank you to all interviewees and advisors for their generous time and thoughtful contribution.</p>
          </div>

          <div className="flex flex-row items-baseline">
            <div>
              <p className="font-bold text-lg mr-8">Sources</p>
            </div>

            <div className="">
              <div className="mb-8">
                <p className="text-left font-bold text-lg leading-none mb-2">General</p>

                <p className="text-left text-lg leading-none mb-4">Yang, Stephanie (2020, May 7). New York’s Chinatown businesses struggle to survive coronavirus shutdown. The Wall Street Journal. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer"  href="https://www.wsj.com/articles/new-yorks-chinatown-businesses-struggle-to-survive-coronavirus-shutdown-11588856400">https://www.wsj.com/articles/new-yorks-chinatown-businesses-struggle-to-survive-coronavirus-shutdown-11588856400</a></p>

                <p className="text-left text-lg leading-none mb-4">Knowles, H., &amp; Bellware, K. (2020, May 16). Fear sent her Chinatown restaurant spiraling. the challenges to reopening feel 'just impossible.’. The Washington Post. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer"  href="https://www.washingtonpost.com/nation/2020/05/16/asian-american-business-coronavirus/">https://www.washingtonpost.com/nation/2020/05/16/asian-american-business-coronavirus/</a></p>

                <p className="text-left text-lg leading-none mb-4">Rong, XiaoQing(2021, September 22). Chinatown Street has been closed since 9/11, and residents are fed up. Documented. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer"  href="https://documentedny.com/2021/09/10/this-chinatown-street-has-been-shut-down-since-9-11-and-residents-are-fed-up/">https://documentedny.com/2021/09/10/this-chinatown-street-has-been-shut-down-since-9-11-and-residents-are-fed-up/</a></p>

                <p className="text-left text-lg leading-none mb-4">City of New York. (2022, February 18). NYC borough-based jails<a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer"  href="https://rikers.cityofnewyork.us/nyc-borough-based-jails/">https://rikers.cityofnewyork.us/nyc-borough-based-jails/</a></p>
              </div>

              <div className="mb-8">
                <p className="text-left font-bold text-lg leading-none mb-2">In Jan Lee’s section</p>
                <p className="text-left text-lg leading-none mb-4">Shenon, Philip. (1983, Oct. 17). <a className="underline decoration-dotted" href="https://www.nytimes.com/1983/10/17/nyregion/tombs-to-reopen-with-a-new-look.html">Tombs to reopen with a new look.</a> The New York Times.
                </p>

                <p className="text-left text-lg leading-none mb-4">@nubnyc. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer"  href="https://www.instagram.com/nubcnyc/">https://www.instagram.com/nubcnyc/</a></p>

              </div>

              <div className="mb-8">
                <p className="text-left font-bold text-lg leading-none mb-2">In Karlin Chan’s section</p>
                <p className="text-left text-lg leading-none mb-4">Chao, Evelyn. (2021, April 1). The Chinatown Block Watch, one year later. Curbed. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer"  href="https://www.curbed.com/2021/04/chinatown-block-watch-one-year-later.html">https://www.curbed.com/2021/04/chinatown-block-watch-one-year-later.html</a></p>

                <p className="text-left text-lg leading-none mb-4">McDonough, Annie, &amp; Rahaman, Maryam. (2021, July 6). 2021 New York City Council Primary Election Results. City &amp; State NY.<a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer"  href="https://www.cityandstateny.com/politics/2021/06/2021-new-york-city-council-primary-election-results/182745/">https://www.cityandstateny.com/politics/2021/06/2021-new-york-city-council-primary-election-results/182745/</a></p>
              </div>

            </div>
          </div>
        </Upper>
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

export default App;
