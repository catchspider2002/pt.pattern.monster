const strings = {
  website: "https://pt.pattern.monster",
  title: "Pattern Monster",
  description:
    "Um gerador simples de padrões online para criar padrões SVG repetíveis.",
  description2: "Acelere seu site sem comprometer a qualidade da imagem.",
  description3: 
    "Perfeito para fundos do site, vestuário, marcas, design de embalagens e muito mais.",
  keywords:
    "padrões svg, padrões, fundos svg, papel de parede vetorial, gerador de padrões, criador de padrões",
  pages: [
    {
      page: "index",
      title: "Gerador de Padrões SVG",
      keywords: "",
      description: "",
      image: "",
    },
    {
      page: "changelog",
      title: "Histórico de Atualizações",
      keywords: "histórico de atualizações",
      description: "Changelog for Pattern Monster.",
      image: "",
    },
    {
      page: "downloads",
      title: "Downloads",
      keywords: "downloads",
      description: "Downloads for Pattern Monster.",
      image: "",
    },
    {
      page: "features",
      title: "Recursos",
      keywords: "recursos",
      description: "Features for Pattern Monster.",
      image: "",
    },
    {
      page: "privacy-policy",
      title: "Política de Privacidade",
      keywords: "política de privacidade",
      description: "Privacy Policy for Pattern Monster.",
      image: "",
    },
    {
      page: "api",
      title: "API",
      keywords: "api",
      description: "API for Pattern Monster.",
      image: "",
    },
  ],
  versions: [
    {
      lang: "en",
      website: "https://pattern.monster",
    },
    {
      lang: "de",
      website: "https://de.pattern.monster",
    },
    {
      lang: "pl",
      website: "https://pl.pattern.monster",
    },
    {
      lang: "tr",
      website: "https://tr.pattern.monster",
    },
    {
      lang: "es",
      website: "https://es.pattern.monster",
    },
    {
      lang: "it",
      website: "https://it.pattern.monster",
    },
    {
      lang: "ro",
      website: "https://ro.pattern.monster",
    },
    {
      lang: "fr",
      website: "https://fr.pattern.monster",
    },
    {
      lang: "ar",
      website: "https://ar.pattern.monster",
    },
    {
      lang: "pt",
      website: "https://pt.pattern.monster",
    },
    {
      lang: "zh-cn",
      website: "https://cn.pattern.monster",
    },
    {
      lang: "nl",
      website: "https://nl.pattern.monster",
    },
    {
      lang: "sv",
      website: "https://sv.pattern.monster",
    },
    {
      lang: "ru",
      website: "https://ru.pattern.monster",
    },
    {
      lang: "uk",
      website: "https://uk.pattern.monster",
    },
  ],
};

const pageDetails = (page) => {
  let imagePrefix = "https://giguom.com/pattern.monster/images/";
  let pageValues =
    strings.pages.filter((currentPage) => currentPage.page === page)[0] ||
    strings.pages.filter((currentPage) => currentPage.page === "index")[0];

  let website = strings.website;
  let title = strings.title + " - " + strings.pages[0].title;
  let url = website;
  let keywords = strings.keywords;
  let desc = strings.description + " " + strings.description3;
  let image =
    pageValues.image == "" ? imagePrefix + "/TwitterBG2.png" : pageValues.image;

  let versions = strings.versions.map((version) => {
    return {
      lang: version.lang,
      website: version.website + (page === "index" ? "" : "/" + page + "/"),
    };
  });

  if (page != "index") {
    title =
      pageValues.title + " - " + strings.title + " | " + strings.pages[0].title;
    url = website + "/" + page + "/";
    desc =
      pageValues.description +
      " " +
      strings.description +
      " " +
      strings.description3;
    keywords = pageValues.keywords + ", " + strings.keywords;
  }

  return { title, url, keywords, desc, image, versions };
};

export default { strings, pageDetails };
        