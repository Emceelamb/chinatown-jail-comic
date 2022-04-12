import Image from "next/image";
import Link from "next/link";

import { useEffect, useState, useRef } from "react";
const Interviews = () => {
  return (
    <div className="w-full relative bg-[#F2F2F2] h-screen flex flex-col space-y-8">
      <div className="w-1/2 flex flex-col space-y-8 items-center m-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Interviewees</h2>
          <p className="text-center font-winnieyoe text-2xl">
            Explore four community members’ perspectives on the jail plan and
            their relationship with Chinatown.
          </p>
        </div>
        <div className="w-full m-auto flex flex-row space-x-4">
          <div className="w-full">
            <div className="cursor">
              <DelayFadeInSection>
                <Link href="/1">
                  <a className="flex flex-col space-y-4">
                    <Image
                      src="/6a.png"
                      alt=""
                      layout="responsive"
                      width={276}
                      height={276}
                    />
                    <div className="text-center space-y-2 font-winnieyoe text-lg">
                      <p>Jan Lee</p>
                      <p className="leading-tight">
                        Cofounder of Neighbors United Below Canal, a
                        neighborhood activist group
                      </p>
                    </div>
                  </a>
                </Link>
              </DelayFadeInSection>
            </div>
          </div>
          <div className="w-full">
            <DelayFadeInSection>
              <Link href="/2">
                <a className="flex flex-col space-y-4">
                  <Image
                    src="/kc.png"
                    alt=""
                    layout="responsive"
                    width={276}
                    height={276}
                  />
                  <div className="text-center space-y-2 font-winnieyoe text-lg">
                    <p>Karlin Chan</p>
                    <p className="leading-tight">
                      Independent community activist
                    </p>
                  </div>
                </a>
              </Link>
            </DelayFadeInSection>
          </div>
          <div className="w-full">
            <DelayFadeInSection>
              <Link href="/3">
                <a className="flex flex-col space-y-4">
                  <Image
                    src="/jy.png"
                    alt=""
                    layout="responsive"
                    width={276}
                    height={276}
                  />
                  <div className="text-center space-y-2 font-winnieyoe text-lg">
                    <p>Justin Yu</p>
                    <p className="leading-tight">
                      Chairman of the Chinese Chamber of Commerce of New York,
                      former President of the Chinese Consolidated Benevolent
                      Association (CCBA)
                    </p>
                  </div>
                </a>
              </Link>
            </DelayFadeInSection>
          </div>
          <div className="w-full">
            <DelayFadeInSection>
              <Link href="/4">
                <a className="flex flex-col space-y-4">
                  <Image
                    src="/ac.png"
                    alt=""
                    layout="responsive"
                    width={276}
                    height={276}
                  />

                  <div className="text-center space-y-2 font-winnieyoe text-lg">
                    <p>Anonymous Contributor</p>
                    <p className="leading-tight">
                      Software engineer. Recently started their advocacy work
                    </p>
                  </div>
                </a>
              </Link>
            </DelayFadeInSection>
          </div>
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