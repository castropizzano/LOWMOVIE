import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ConceptGraph from "@/components/ConceptGraph";

const Mapa = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="Mapa Conceitual"
            subtitle="Cartografia interativa das relações entre autores, conceitos e campos temáticos"
          />
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl text-justify">
            Arraste os nós para reorganizar. Passe o cursor para ver definições. Use scroll para zoom e arraste o fundo para navegar.
          </p>
          <ConceptGraph />
        </div>
      </section>
    </Layout>
  );
};

export default Mapa;
