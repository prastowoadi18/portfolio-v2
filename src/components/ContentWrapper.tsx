interface ContentWrapperProps {
  children: React.ReactNode;
  title: string;
}

const ContentWrapper = ({ children, title }: ContentWrapperProps) => {
  return (
    <section className="px-5 pb-[3rem]">
      <div className="">
        <h1 className="text-base font-semibold">{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default ContentWrapper;
