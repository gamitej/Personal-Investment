import "./App.scss";
import { Suspense } from "react";
import Router from "./routers/Routers";
import FullScreenLoader from "@/components/loader/FullScreenLoader/FullScreenLoader";

function App() {
  const AppProps = {
    isLoggedIn: false,
  };

  /**
   * TSX
   */
  return (
    <div>
      <Suspense fallback={<FullScreenLoader />}>
        <Router {...AppProps} />
      </Suspense>
    </div>
  );
}

export default App;
