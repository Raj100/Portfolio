import "./App.css";
import { Canvas } from "@react-three/fiber";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import KUTE from "kute.js";
import Drone from "./Drone";
import { Suspense } from "react";
import Resume from "./Assets/Resume.pdf"
import { Environment, OrbitControls } from "@react-three/drei";
// var tween = KUTE.to("#svg1", { path: "#svg2" }).start();

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>, */}
      <div className="Welcome">
        <h3> Hii! I'am Raj. Welcome to my Portfolio</h3>
        <div>
          <a href={Resume} download><button>Download Resume</button></a>
        </div>
      </div>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false}></OrbitControls>
        <Suspense fallback={null}>
          <Drone />
        </Suspense>
        {/* <Environment preset="sunset"></Environment> */}
      </Canvas>
      <Footer></Footer>
    </>
  );
}

export default App;
