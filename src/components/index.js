import { useEffect, useState, Suspense, lazy } from "react";
import PlaceHolder from "./placeHolder";
import BackTop from "./backTop";
import HeaderImage from "./headerImage";

const Header = lazy(() => import("./header"));
const Sidebar = lazy(() => import("./sidebar"));
const About = lazy(() => import("./about"));
const Resume = lazy(() => import("./resume"));
const Abilities = lazy(() => import("./abilities"));
const Projects = lazy(() => import("./projects"));



function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoading(false);
      }, 0);
    });

    return () => window.removeEventListener("load", () => setLoading(false));
  }, []);

  return (
    <>
      <Suspense fallback={loading && <PlaceHolder />}>
        <main className="main">
          <HeaderImage />
        {/* <AnimationRandom /> */}
        <div className="container gutter-top">
            <Header />
            <div className="row sticky-parent">
              <Sidebar />
              <div className="col-12 col-md-12 col-lg-10">
                <div className="" id="content">
                  <div className="content">
                    <About />
                    <Resume />
                    <Abilities />
                    <Projects />
                  </div>
                </div>
                <footer className="footer ">
                  {new Date().getFullYear()} powered by Ahmet Cankurt
                </footer>
              </div>
            </div>
          </div>
        </main>
        <BackTop />
      </Suspense>
    </>
  );
}

export default App;
