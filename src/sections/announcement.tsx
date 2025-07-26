interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Announcement: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <section className={`announcement ${className}`}>{children}</section>
    </>
  );
};
