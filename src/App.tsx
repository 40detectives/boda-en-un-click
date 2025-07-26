import { Hero } from "@/sections/hero";
import { Announcement } from "@/sections/announcement";

function App() {
  return (
    <>
      <Hero className="full-bleed">
        <span className="heading-block">Bonifacio</span>
        <span className="heading-block">&</span>
        <span className="heading-block">Anacleta</span>
      </Hero>
      <Announcement className="layout-wrapper align-items-center full-bleed">
        <img
          className="col-left justify-self-end wine-glasses"
          src="/images/decorations/wine-glasses.svg"
          alt="2 Wine Glasses"
        />
        <p className="announcement-text-md">Tenemos algo que deciros:</p>
        <p className="announcement-text-lg full-bleed">Poneos guapos porque…</p>
        <h2 className="announcement-title">¡Nos vamos de celebración!</h2>
        <img
          className="col-right align-self-end wedding-rings"
          src="/images/decorations/wedding-rings.svg"
          alt="2 Wedding Rings"
          width="161"
        />
      </Announcement>
      <div className="temp-placeholder full-bleed layout-wrapper">
        <p className="">
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
      <div className="">
        <p>
          Aliquam similique, voluptates pariatur labore, architecto iure harum
          natus id accusantium laboriosam consequatur aut nostrum. Aut,
          explicabo assumenda nobis quia ipsam vel delectus harum aperiam saepe
          nostrum, velit nisi perferendis! Aperiam soluta quasi provident
          voluptates omnis unde?
        </p>
      </div>
    </>
  );
}

export default App;
