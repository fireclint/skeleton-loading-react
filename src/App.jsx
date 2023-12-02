import { useState, useEffect } from "react";
import Card from "./components/Card";
import Skeleton from "./components/Skeleton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? <Skeleton /> : <Card />}
    </div>
  );
}

export default App;
