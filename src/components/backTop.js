import { useState, useEffect,memo } from "react";

function BackTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event handler
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {isVisible && (
        <div
          className="back-to-top"
          onClick={scrollToTop}
        >
        </div>
      )}
    </div>
  );
}

export default memo(BackTop);
