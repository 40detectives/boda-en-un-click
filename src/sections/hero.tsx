import couplePic from "/images/decorations/man-and-woman-flax.png";
import bgFlowersSW from "/images/backgrounds/bg-flowers-00-SW.png";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<Props> = ({ children, className }) => {
  return (
    <header className={`hero-header ${className}`}>
      <img
        className="happy-couple-deco"
        src={couplePic}
        alt="drawing of a couple"
      />
      <img
        className="hero-flowers-sw-deco"
        src={bgFlowersSW}
        alt="decoration flowers SW corner"
      />
      <h1 className="hero-title">{children}</h1>
    </header>
  );
};
