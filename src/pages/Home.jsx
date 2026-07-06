import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Background from "../components/Background";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import MouseGlow from "../components/MouseGlow";

function Home() {
    return (
        <>
            <ScrollProgress />
            <Background />
            <MouseGlow />

            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </>
    );
}


export default Home;