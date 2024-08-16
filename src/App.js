import { useEffect, useState, Suspense, lazy } from "react";
import PlaceHolder from "./components/placeHolder";
import BackTop from "./components/backTop";
import HeaderImage from "./components/headerImage";

const Header = lazy(() => import("./components/header"));
const Sidebar = lazy(() => import("./components/sidebar"));
const About = lazy(() => import("./components/about"));
const Resume = lazy(() => import("./components/resume"));
const Abilities = lazy(() => import("./components/abilities"));
const Projects = lazy(() => import("./components/projects"));
const AnimationRandom = lazy(() => import("./components/animations"));

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
        <AnimationRandom />
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
