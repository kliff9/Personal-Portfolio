import React , {useEffect} from "react";
import Footer from "./Footer";
import HeaderC from "./HeaderC";
import Aside from "./Aside";

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="body">
      <Aside/>
      <main>
      <HeaderC />

      <div className="content">{children}</div>

      {/* <Footer /> */}
      </main>
    </div>
  );
}

export default Layout;
