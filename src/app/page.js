import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import ExploreTheWorld from "./components/Explore";
import Blog from "./components/Blog";
import Galery from "./components/Galery";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <div className="body">
        <NavBar />
        <LandingPage />
      </div>

      <AboutUs />
      <ExploreTheWorld />
      <Blog />
      <Galery />
      <Questions />
      <Footer />
    </div>
  );
}
