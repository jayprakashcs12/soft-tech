import React, { useLayoutEffect, useState } from "react";
import logoImg from "../../img/web-logo/logo.png";
import MegaNav from "./MegaNav";
import SmallNav from "./SmallNav";

function Header() {

  let [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

    let handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    useLayoutEffect(() => {
      window.addEventListener('resize', handleResize); // Add event listener for window resize
      return () => {
        window.removeEventListener('resize', handleResize); // Cleanup the event listener when the component unmounts
      };
    }, []);

  return (
    <>
      { deviceWidth > 991 ? <MegaNav logoImg={logoImg} /> : <SmallNav logoImg={logoImg} /> }
    </>
  );
}

export default Header;