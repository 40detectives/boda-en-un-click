import { useState } from "react";
import "./App.css";
import { Hero } from "@/sections/hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero>
        <span className="heading-block">Raúl</span>
        <span className="heading-block">&</span>
        <span className="heading-block">Celeste</span>
      </Hero>
      <div className="full-bleed">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nam
          vitae quas autem. Deserunt necessitatibus nulla ea exercitationem
          quia, at eos quo saepe dignissimos dicta laudantium mollitia.
          Doloremque perferendis minus quasi facere, voluptas vero sapiente eius
          minima magnam harum soluta magni aliquid, quae, reiciendis illo. Eos
          labore, quo, soluta eaque repellendus omnis ipsam est, delectus
          molestias corporis provident voluptatibus! Perferendis veniam numquam
          facilis excepturi dignissimos!
        </p>
      </div>
    </>
  );
}

export default App;
