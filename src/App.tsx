import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PorfolioContactDesktop from "./pages/PorfolioContactDesktop";
import PorfolioProjectsDesktop from "./pages/PorfolioProjectsDesktop";
import PorfolioAboutDesktop from "./pages/PorfolioAboutDesktop";
import PorfolioHomeDesktop from "./pages/PorfolioHomeDesktop";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/porfolioprojectsdesktop":
        title = "";
        metaDescription = "";
        break;
      case "/porfolioaboutdesktop":
        title = "";
        metaDescription = "";
        break;
      case "/porfoliohomedesktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PorfolioContactDesktop />} />
      <Route
        path="/porfolioprojectsdesktop"
        element={<PorfolioProjectsDesktop />}
      />
      <Route path="/porfolioaboutdesktop" element={<PorfolioAboutDesktop />} />
      <Route path="/porfoliohomedesktop" element={<PorfolioHomeDesktop />} />
    </Routes>
  );
}
export default App;
