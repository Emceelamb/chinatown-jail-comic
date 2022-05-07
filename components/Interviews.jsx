import Image from "next/image";
import Link from "next/link";

import { useEffect, useState, useRef } from "react";
const Interviews = () => {
  return (
    <div className="w-full relative bg-white h-screen flex flex-col space-y-8">
      <div className="w-10/12 flex flex-col space-y-8 items-center m-auto">
        <div className="w-3/5 text-center space-y-4">
          <h2 className="font-bold md:text-4xl text-3xl text-center mb-4">Interviews*</h2>
          <div>

          <p className="text-center font-winnieyoe text-2xl leading-tight">
            Explore four community members’ perspectives on the jail plan and
            their relationship withr&nbsp;Chinatown.
          </p>
          <p className="text-lg">*Parts of the interviews have been edited for&nbsp;clarity.</p>
          </div>
        </div>
        <div className="w-10/12 m-auto flex flex-row space-x-8 items-baseline">
          <div className="w-full">
            <div className="cursor">
              <DelayFadeInSection>
                <Link href="/jl">
                  <a className="flex flex-col space-y-4 items-center">
                    <div>
                      <Image
                        src="/Interview1.png"
                        alt=""
                        layout="responsive"
                        width={800}
                        height={800}
                      />
                      <div className="text-center space-y-2 font-winnieyoe text-lg h-24">
                        <p className="font-bold">Jan Lee</p>
                        <p className="leading-none">
                          “If stopping the jail is not successful, there is no&nbsp;Chinatown.”
                        </p>
                      </div>
                    </div>

                    <button className="w-16 h-8 bg-gray-200 font-bold text-l justify-self-end">
                      Read →
                    </button>
                  </a>
                </Link>
              </DelayFadeInSection>
            </div>
          </div>

          <div className="w-full">
            <DelayFadeInSection>
              <Link href="/kc">
              <a className="flex flex-col space-y-4 items-center">
                    <div>
                      <Image
                        src="/Interview2.png"
                        alt=""
                        layout="responsive"
                        width={800}
                        height={800}
                      />
                      <div className="text-center space-y-2 font-winnieyoe text-lg h-24">
                        <p className="font-bold">Karlin Chan</p>
                        <p className="leading-none">
                        “You got to be proactive, not&nbsp;reactive.”
                        </p>
                      </div>
                    </div>
                    
                    <button className="w-16 h-8 bg-gray-200 font-bold text-l flex-end">
                      Read →
                    </button>
                </a>
              </Link>
            </DelayFadeInSection>
          </div>

          <div className="w-full">
            <DelayFadeInSection>
              <Link href="/jy">
              <a className="flex flex-col space-y-4 items-center">
                    <div>
                      <Image
                        src="/Interview3.png"
                        alt=""
                        layout="responsive"
                        width={800}
                        height={800}
                      />
                      <div className="text-center space-y-2 font-winnieyoe text-lg h-24">
                        <p className="font-bold">Justin Yu</p>
                        <p className="leading-none">
                        “From very negative impact we see the bright hope from&nbsp;this.”
                        </p>
                      </div>
                    </div>
                    
                    <button className="w-16 h-8 bg-gray-200 font-bold text-l">
                      Read →
                    </button>
                </a>
                </Link>
            </DelayFadeInSection>
          </div>
        

          <div className="w-full">
            <DelayFadeInSection>
              <Link href="/ac">
              <a className="flex flex-col space-y-4 items-center">
                    <div>
                      <Image
                        src="/Interview4.png"
                        alt=""
                        layout="responsive"
                        width={800}
                        height={800}
                      />
                      <div className="text-center space-y-2 font-winnieyoe text-lg h-24">
                        <p className="font-bold">Anonymous Contributor</p>
                        <p className="leading-none">
                        “If you zoomed out far enough it’s the same story, a story of institutionalized&nbsp;hate.”
                        </p>
                      </div>
                    </div>
                    
                    <button className="w-16 h-8 bg-gray-200 font-bold text-l flex-end">
                      Read →
                    </button>
                </a>
              </Link>
            </DelayFadeInSection>
          </div>
        </div>
{/* 
        <Link href="/">
          <a>

          <button className="bg-[#F2C94C] px-8 py-2 rounded-lg font-bold">Back</button>
          </a>
        </Link> */}
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
    return () => observer.unobserve(domRef.current);
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

export { Interviews };
