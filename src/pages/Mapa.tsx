import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ConceptGraph from "@/components/ConceptGraph";
import { useTranslation } from "react-i18next";

const Mapa = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("mapa.title")} subtitle={t("mapa.subtitle")} />
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl text-justify">{t("mapa.instructions")}</p>
          <ConceptGraph />
        </div>
      </section>
    </Layout>
  );
};

export default Mapa;
