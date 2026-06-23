import { PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";

import { lenis } from "./Navbar";
import { useLoading } from "../context/LoadingProvider";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isMobile] = useState<boolean>(window.innerWidth <= 768);
  const { isLoading } = useLoading();

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  useLayoutEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash) as HTMLElement;
      if (target) {
        target.scrollIntoView({ block: "start" });
      }
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const runFX = () => {
        if (lenis) {
          import("./utils/initialFX").then((module) => {
            module.initialFX();

            if (window.location.hash) {
              const target = document.querySelector(window.location.hash) as HTMLElement;
              if (target) {
                lenis?.scrollTo(target, {
                  offset: 0,
                  immediate: true,
                });
              }
            }
          });
        } else {
          setTimeout(runFX, 50);
        }
      };

      runFX();
    }
  }, [isLoading]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && !isMobile && children}
      <div className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Experience />
        <Education />
        <Work />
        <TechStackNew />
        <CallToAction />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
