import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Helmet>
        <title>{t("notFound.metaTitle")}</title>
        <meta name="description" content={t("notFound.metaDescription")} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={t("notFound.metaTitle")} />
        <meta property="og:description" content={t("notFound.metaDescription")} />
        <meta name="twitter:title" content={t("notFound.metaTitle")} />
        <meta name="twitter:description" content={t("notFound.metaDescription")} />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">{t("notFound.title")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notFound.message")}</p>
        <a href="/home" className="text-primary underline hover:text-primary/90">
          {t("notFound.back")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
