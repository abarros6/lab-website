import Head from "next/head";
import { useEffect } from "react";
import Editor from "modules/rete/editor";
import { useState } from "react";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then(console.log);
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <>
      {mounted && (
        <div style={{ textAlign: "left", width: "80vw", height: "100vh" }}>
          <div ref={(el) => Editor(el)} />
        </div>
      )}
    </>
  );
};

export default Home;
