interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<Props> = ({ children, className }) => {
  return (
    <header className={`hero-header ${className}`}>
      <img
        className="happy-couple-deco"
        src="src/assets/decorations/man-and-woman-flax.png"
        alt="pareja feliz"
      />
      <img
        className="hero-flowers-sw-deco"
        src="src/assets/backgrounds/bg-flowers-00-SW.png"
        alt="decoration flowers SW corner"
      />
      <h1 className="hero-title">{children}</h1>
    </header>
  );
};
