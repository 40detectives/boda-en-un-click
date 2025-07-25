interface Props {
  children?: React.ReactNode;
}

export const Hero: React.FC<Props> = ({ children }) => {
  return (
    <header className="hero-header">
      <img
        className="happy-couple-dec"
        src="src/assets/decorations/m-and-w-00.png"
        alt="pareja feliz"
      />
      <h1 className="hero-title">{children}</h1>
    </header>
  );
};
