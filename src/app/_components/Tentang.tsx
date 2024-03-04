import ContentWrapper from "@/components/ContentWrapper";

interface TentangProps {
  about: string;
}
const Tentang = ({ about }: TentangProps) => {
  return (
    <ContentWrapper title="Tentang">
      <p className="mt-3 text-justify text-sm text-muted-foreground">{about}</p>
    </ContentWrapper>
  );
};

export default Tentang;
