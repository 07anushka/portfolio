import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Loading from "./components/Loading";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  return loading ? <Loading /> : <Home />;
}

export default App;