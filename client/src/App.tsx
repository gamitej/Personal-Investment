import "./App.scss";
import { Suspense } from "react";
import Router from "./routers/Routers";
import Navbar from "@/components/navbar";
import FullScreenLoader from "@/components/loader/FullScreenLoader/FullScreenLoader";

function App() {
  const AppProps = {
    isLoggedIn: true,
  };

  /**
   * TSX
   */
  return (
    <div>
      <Navbar />
      <Suspense fallback={<FullScreenLoader />}>
        <Router {...AppProps} />
      </Suspense>
    </div>
  );
}

export default App;
