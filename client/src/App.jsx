import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { SocketManager } from "./components/socketManager";


function App() {
  return (
    
    <>
    <SocketManager/>
    <Canvas shadows camera={{ position: [8, 8, 8], fov: 40 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
    </>
  );
}

export default App;
