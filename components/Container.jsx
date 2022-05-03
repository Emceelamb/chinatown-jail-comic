import { useState, useRef, useEffect } from "react";

export const Container = ({children}) => {
  return (
    <div className="w-full relative  h-screen flex items-center flex-col justify-center space-y-10">
      {children}
    </div>
  );
};


export const Upper = (props) => {
  return (
    <div className="font-winnieyoe text-xl md:text-2xl w-10/12 md:w-1/2  text-center mt-20">
      <p>
        {props.children}
      </p>
    </div>
  );
};


export const ImageContainer = ({children}) => {
  return (
    <div className="inset-x-0 w-3/4">
      <div className="w-10/12 m-auto">
        <FadeInSection>{children}</FadeInSection>
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
