const strings = {
  website: "https://pt.pattern.monster",
  title: "Pattern Monster",
  description: "Um gerador simples de padrões online para criar padrões SVG repetíveis.",
  description2: "Acelere seu site sem comprometer a qualidade da imagem.",
  description3: "Perfeito para fundos do site, vestuário, marcas, design de embalagens e muito mais.",
  keywords: "padrões svg, padrões, fundos svg, papel de parede vetorial, gerador de padrões, criador de padrões",
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
      keywords: "Histórico de Atualizações",
      description: "Changelog for Pattern Monster.",
      image: "",
    },
    {
      page: "downloads",
      title: "Downloads",
      keywords: "Downloads",
      description: "Downloads for Pattern Monster.",
      image: "",
    },
    {
      page: "features",
      title: "Recursos",
      keywords: "Recursos",
      description: "Features for Pattern Monster.",
      image: "",
    },
    {
      page: "privacy-policy",
      title: "Política de Privacidade",
      keywords: "Política de Privacidade",
      description: "Privacy Policy for Pattern Monster.",
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
  ],
};

const pageDetails = (page) => {
  let imagePrefix = "https://giguom.com/pattern.monster/images/";
  let pageValues =
    strings.pages.filter((currentPage) => currentPage.page === page)[0] || strings.pages.filter((currentPage) => currentPage.page === "index")[0];

  let website = strings.website;
  let title = strings.title + " - " + strings.pages[0].title;
  let url = website;
  let keywords = strings.keywords;
  let desc = strings.description + " " + strings.description3;
  let image = pageValues.image == "" ? imagePrefix + "/TwitterBG2.png" : pageValues.image;

  let versions = strings.versions.map((version) => {
    return { lang: version.lang, website: version.website + (page === "index" ? "" : "/" + page + "/") };
  });

  if (page != "index") {
    title = pageValues.title + " - " + strings.title + " | " + strings.pages[0].title;
    url = website + "/" + page + "/";
    desc = pageValues.description + " " + strings.description + " " + strings.description3;
    keywords = pageValues.keywords + ", " + strings.keywords;
  }

  return { title, url, keywords, desc, image, versions };
};

let bmcData = `<path d="M0 24.48A24.5 24.5 0 0124.52 0h559.35a24.5 24.5 0 0124.52 24.48v104.04A24.5 24.5 0 01583.87 153H24.52A24.5 24.5 0 010 128.52z" fill="#ffc800"/>
<path d="M109.52 50.32l-.06-.04-.16-.05c.06.05.14.08.22.09zM110.5 57.31l-.07.02.08-.02zM109.55 50.3h-.03v.02l.03-.01zM109.52 50.32h.02-.02zM110.45 57.3l.11-.06.04-.03.04-.04a.65.65 0 00-.2.13zM109.72 50.47l-.12-.1-.07-.04c.04.07.1.12.19.14zM81.88 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM98.05 115.17c0-.1-.05-.08-.04.28l.02-.09c0-.06 0-.12.02-.19zM96.38 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM70.49 119.11a.48.48 0 00-.24-.11l.2.1.04.01zM67.93 116.66a2.38 2.38 0 010 0z" fill="#0D0C22"/>
<path d="M85.14 72.77C81.62 74.27 77.63 76 72.45 76a24 24 0 01-6.4-.89l3.58 36.74a6.14 6.14 0 006.12 5.63s5.07.26 6.76.26c1.83 0 7.29-.26 7.29-.26a6.14 6.14 0 006.12-5.63l3.83-40.6a16.3 16.3 0 00-5.4-.97c-3.36 0-6.08 1.16-9.21 2.5z" fill="#fff"/>
<path d="M54.98 57.1l.07.06.03.02a.6.6 0 00-.1-.08z" fill="#0D0C22"/>
<path d="M116.3 53.71l-.54-2.72c-.48-2.43-1.58-4.74-4.08-5.62-.8-.28-1.72-.4-2.33-.99-.62-.58-.8-1.49-.94-2.33l-.78-4.62c-.23-1.33-.42-2.81-1.03-4.03-.79-1.63-2.43-2.58-4.06-3.21-.83-.32-1.69-.58-2.55-.8-4.08-1.07-8.36-1.46-12.55-1.69-5.03-.28-10.08-.2-15.1.25-3.73.34-7.67.75-11.22 2.04a9.5 9.5 0 00-3.62 2.05 3.92 3.92 0 00-.72 4.67 6.05 6.05 0 002.82 2.37c1.47.66 3 1.16 4.58 1.5 4.39.96 8.93 1.34 13.41 1.5 4.97.2 9.95.04 14.89-.48 1.22-.14 2.44-.3 3.66-.49 1.44-.22 2.36-2.1 1.93-3.4-.5-1.56-1.86-2.17-3.4-1.93l-.68.1-.16.02a95.5 95.5 0 01-4.8.47 107.24 107.24 0 01-19.14-.4l-.47-.07-.1-.01-.48-.07a50.9 50.9 0 01-2.96-.53.44.44 0 010-.87h.02a47.95 47.95 0 013.42-.6c.54-.03 1.08-.13 1.61-.2a102.3 102.3 0 0122.2.1l.56.08.38.05c1.09.16 2.17.36 3.25.6 1.6.34 3.66.45 4.37 2.2.22.56.33 1.18.45 1.76l.16.75.01.04 1.13 5.27a.95.95 0 01-.15.75.97.97 0 01-.66.4h-.01l-.23.04-.23.03a128.48 128.48 0 01-6.45.68 149.64 149.64 0 01-12.9.52 151.25 151.25 0 01-19.17-1.24l-.51-.07-1.19-.17c-1.33-.2-2.64-.45-3.97-.66a6.9 6.9 0 00-4.58.66 6.66 6.66 0 00-2.76 2.86c-.62 1.29-.8 2.7-1.08 4.08-.28 1.39-.72 2.88-.55 4.3a6.87 6.87 0 005.59 6.13 161.9 161.9 0 0046.27 1.53 1.98 1.98 0 012.19 2.17l-.3 2.85a1089465.02 1089465.02 0 01-4.15 40.42c-.17 1.67-.19 3.4-.5 5.04-.5 2.6-2.27 4.2-4.83 4.78-2.35.54-4.76.82-7.17.84-2.67.01-5.34-.1-8.01-.1-2.86.02-6.35-.24-8.55-2.36-1.94-1.87-2.2-4.79-2.47-7.31l-1.04-10.03-1.94-18.59L62.84 70l-.07-.6c-.15-1.43-1.16-2.84-2.76-2.77-1.37.06-2.93 1.23-2.77 2.77l.93 8.92 1.92 18.44 1.64 15.72.31 3.01c.6 5.49 4.8 8.44 9.98 9.27 3.03.5 6.14.6 9.21.64 3.94.06 7.92.22 11.8-.5 5.74-1.05 10.05-4.89 10.67-10.84l.53-5.15 1.75-17.05 1.9-18.58.87-8.51a1.98 1.98 0 011.6-1.74c1.64-.32 3.2-.87 4.38-2.12 1.86-1.99 2.23-4.58 1.57-7.2zm-61.8 1.84c.03-.01-.02.2-.04.3 0-.15 0-.28.05-.3zm.16 1.23c.02 0 .06.04.1.1l-.1-.1zm.16.2c.06.1.09.16 0 0zm.32.26l.02.03a.21.21 0 00-.03-.03zm55.13-.38c-.6.56-1.48.82-2.36.95A166.3 166.3 0 0178.1 59.7a200.69 200.69 0 01-21.24-2.03c-.7-.1-1.44-.23-1.92-.74-.9-.96-.46-2.9-.22-4.06.21-1.06.62-2.48 1.88-2.63 1.98-.23 4.28.6 6.23.9a136.85 136.85 0 0037.57.3c1.84-.26 3.67-.54 5.5-.87 1.62-.3 3.42-.84 4.4.84.67 1.15.76 2.68.66 3.98-.04.56-.28 1.1-.7 1.48z" fill="#0D0C22"/>
<g aria-label="Pague-me um café" transform="matrix(9.22544 0 0 9.22544 1026.53 -199.71)" fill="#000" stroke="#000" stroke-width=".11">
    <path d="M-92.94 27.52l.25-.01q.22 0 .51.08.3.07.58.24.29.17.45.5.18.33.18.78 0 .75-.58 1.2-.58.47-1.53.47 0 1.55-.55 1.55-.37 0-.37-.31 0-.1.1-.26.1-.17.13-.39.04-.2.07-.69-.33-.1-.33-.28 0-.18.17-.18.09 0 .17.02.1-2.12.15-2.34-.46.1-.76.36t-.3.6q0 .2-.08.32-.08.1-.2.1-.24 0-.24-.26 0-.53.47-.92.47-.38 1.18-.52.15-.5.42-.5.11 0 .11.44zm1.37 1.81q0-.7-.41-1.08-.4-.38-.98-.4-.12 1.4-.12 2.64l.17.01q.67 0 1-.34.34-.34.34-.83zM-88.63 32.15q-.31 0-.47-.12-.05-.06-.05-.28l.01-.61q-.2.51-.41.77-.2.24-.52.24-.31 0-.55-.3-.24-.3-.24-.93 0-.64.36-1.13.36-.5.95-.5.25 0 .57.34.06-.09.22-.2.17-.13.28-.13.12 0 .12.3 0 .08-.05.3-.04.24-.1.34-.06.18-.06 1.3 0 .2.04.2.14 0 .38-.33.23-.33.46-.84.24-.52.29-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34zm-.97-2.54q-.22 0-.47.34-.25.32-.25.77 0 .44.13.73.13.28.35.28.26 0 .77-1.3l.01-.22.03-.24q-.08-.13-.26-.24-.17-.12-.3-.12z"/>
    <path d="M-86 30.9q-.25.65-.46.95-.21.3-.55.3-.34 0-.58-.3-.23-.28-.23-.93 0-.64.36-1.13.36-.5.95-.5.12 0 .28.1.17.1.3.25.02-.08.23-.25.2-.17.32-.17t.12.34q0 .34-.15.6-.08.53-.08.98l.82-1.04q.06-.05.1-.05.08 0 .08.08 0 .05-.04.1-.25.37-1 1.31l-.06 1.29q-.04 1-.29 1.41-.23.41-.85.41-.27 0-.51-.16-.23-.16-.23-.57 0-.4.3-.81.31-.43 1.12-1.3zm-.56-1.32q-.22 0-.47.35-.25.34-.25.8 0 .44.13.72.13.28.33.28t.38-.32q.18-.33.47-1.12l.01-.34q-.06-.12-.26-.24-.2-.13-.34-.13zm.49 2.6q-.9.98-.9 1.57 0 .27.09.44.1.18.26.18.25 0 .36-.28.1-.28.15-1.13z"/>
    <path d="M-84.87 31.42l.05-.89q0-.85.08-.93l.28-.23q.2-.15.3-.15.09 0 .11.03.02.03.02.12 0 .35-.15.7-.12.73-.12 1.2 0 .46.15.46.19 0 .43-.32.25-.31.5-.94.07-.8.1-.86l.23-.23q.17-.16.28-.16.12 0 .12.3 0 .08-.04.3-.04.24-.1.34-.09.22-.09 1.37 0 .22.05.22.14-.01.37-.34.24-.33.47-.84.24-.52.29-.52.05 0 .05.06 0 .23-.23.7-.62 1.34-1.05 1.34-.31 0-.47-.12-.06-.06-.06-.35 0-.28.03-.63-.26.54-.51.82-.25.28-.57.28-.31 0-.41-.16-.1-.17-.1-.57z"/>
    <path d="M-81 32.15q-.45 0-.7-.33-.27-.34-.27-.77 0-.87.36-1.31.37-.44.95-.44.27 0 .44.15.18.14.18.4 0 .47-.4.8-.4.31-.98.33.03.3.2.54.19.22.42.22.24 0 .43-.11.2-.11.35-.32.34-.44.57-1l.1-.2q.04-.06.08-.06.05 0 .05.06 0 .4-.49 1.2-.52.84-1.3.84zm-.42-1.36q.47-.08.68-.3.22-.23.22-.58 0-.36-.23-.36-.28 0-.47.39-.19.38-.2.85z"/>
    <path d="M-77.7 30q-.02.54-.67.54l-.32-.03q-.22-.04-.43-.04-.2 0-.33.02l-.14.01q-.17 0-.16-.16 0-.17.16-.24.11-.05.74-.05t.8-.07q.2-.07.27-.07.08 0 .08.08zM-76.7 31.68v.25q0 .22-.13.22-.19 0-.36-.04-.18-.06-.18-.15l.04-.62q.05-.54.05-.81v-.47q0-.38.08-.46.08-.08.28-.23.2-.15.3-.15.09 0 .11.03.02.03.02.12 0 .42-.15.79-.04.45-.04.63.42-.79.58-1.03.3-.46.53-.46.16 0 .28.11.14.12.14.3l-.01.33v.24l-.02.11.27-.36.32-.38.18-.17q.19-.18.33-.18.15 0 .28.1.13.12.13.28 0 .35-.08 1.04-.07.67-.07.85 0 .18.05.18.13-.01.37-.34t.47-.84q.24-.52.29-.52.05 0 .05.06 0 .23-.23.7-.63 1.34-1.05 1.34-.27 0-.43-.12-.06-.06-.06-.29 0-.24.04-.76.05-.53.05-.8 0-.26-.09-.26-.1 0-.45.35-.34.35-.37.5-.04.26-.04 1.16 0 .22-.12.22-.19 0-.35-.04-.16-.06-.16-.15l.05-.78q.04-.7.04-.97 0-.29-.1-.29-.08 0-.43.55-.35.54-.39.75-.03.22-.03.46z"/>
    <path d="M-72.1 32.15q-.44 0-.7-.33-.26-.34-.26-.77 0-.87.36-1.31.37-.44.94-.44.27 0 .45.15.17.14.17.4 0 .47-.4.8-.4.31-.98.33.03.3.2.54.2.22.43.22.24 0 .43-.11t.35-.32q.33-.44.57-1l.1-.2q.03-.06.07-.06.05 0 .05.06 0 .4-.48 1.2-.53.84-1.3.84zm-.42-1.36q.47-.08.69-.3.22-.23.22-.58 0-.36-.23-.36-.28 0-.47.39-.2.38-.2.85zM-69.16 31.42l.05-.89q0-.85.08-.93l.28-.23q.2-.15.29-.15.1 0 .12.03.02.03.02.12 0 .35-.15.7-.12.73-.12 1.2 0 .46.15.46.19 0 .43-.32.25-.31.5-.94.07-.8.1-.86l.23-.23q.17-.16.28-.16.12 0 .12.3 0 .08-.05.3-.04.24-.1.34-.08.22-.08 1.37 0 .22.05.22.13-.01.37-.34t.47-.84q.24-.52.29-.52.05 0 .05.06 0 .23-.23.7-.63 1.34-1.05 1.34-.31 0-.47-.12-.06-.06-.06-.35 0-.28.03-.63-.26.54-.51.82-.26.28-.57.28-.31 0-.42-.16-.1-.17-.1-.57z"/>
    <path d="M-65.6 31.68v.25q0 .22-.12.22-.2 0-.37-.04-.17-.06-.17-.15l.04-.62q.04-.54.04-.81v-.47q0-.38.08-.46.08-.08.28-.23.2-.15.3-.15.1 0 .11.03.03.03.03.12 0 .42-.16.79-.04.45-.04.63.42-.79.59-1.03.3-.46.53-.46.15 0 .28.11.13.12.13.3v.33l-.01.24-.01.11q.03-.06.27-.36l.32-.38.18-.17q.18-.18.32-.18.15 0 .28.1.14.12.14.28 0 .35-.08 1.04-.07.67-.07.85 0 .18.04.18.14-.01.38-.34.23-.33.46-.84.24-.52.3-.52.05 0 .05.06 0 .23-.23.7-.63 1.34-1.06 1.34-.27 0-.43-.12-.05-.06-.05-.29 0-.24.04-.76.04-.53.04-.8 0-.26-.08-.26-.1 0-.46.35-.34.35-.36.5-.05.26-.05 1.16 0 .22-.12.22-.18 0-.35-.04-.16-.06-.16-.15l.05-.78q.05-.7.05-.97 0-.29-.1-.29-.08 0-.43.55-.35.54-.4.75-.02.22-.02.46zM-58.96 30.18l.06-.4q0-.09-.05-.16-.06-.07-.14-.07-.3 0-.51.44-.22.44-.22.85 0 .4.17.65t.4.25q.25 0 .44-.11.2-.11.35-.32.33-.44.57-1l.1-.2q.04-.06.08-.06t.04.06q0 .26-.18.63-.18.36-.3.56-.13.2-.32.4-.4.45-.99.45-.45 0-.69-.31-.23-.33-.23-.7 0-.9.39-1.37.4-.47 1-.47.25 0 .4.13.15.13.15.3 0 .3-.11.45-.12.16-.27.16-.14 0-.14-.16z"/>
    <path d="M-55.88 32.15q-.31 0-.47-.12-.05-.06-.05-.28l.01-.61q-.2.51-.41.77-.2.24-.52.24-.31 0-.55-.3-.24-.3-.24-.93 0-.64.36-1.13.36-.5.95-.5.25 0 .57.34.06-.09.22-.2.17-.13.28-.13.12 0 .12.3 0 .08-.05.3-.04.24-.1.34-.06.18-.06 1.3 0 .2.04.2.14 0 .38-.33.23-.33.46-.84.24-.52.29-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34zm-.97-2.54q-.22 0-.47.34-.25.32-.25.77 0 .44.13.73.13.28.35.28.26 0 .77-1.3l.01-.22.03-.24q-.08-.13-.26-.24-.17-.12-.3-.12z"/>
    <path d="M-53.89 30.44q.43-.1.72-.26l.3-.16q.05 0 .05.08t-.15.2q-.34.24-.84.42.2.78.2 1.66 0 .74-.16 1.42-.1.38-.3.61-.2.24-.5.24-.25 0-.34-.22-.12-.26-.14-.5-.02-.37-.02-1.21 0-.85.13-2.04-.29-.2-.29-.5t.13-.46q.12-.16.32-.21.1-.7.21-1.2.11-.5.33-.8.23-.32.45-.32.25 0 .25.57 0 .88-.66 2 .17.23.31.68zm-.55.4q-.07.97-.07 2.23 0 1.27.13 1.27.24 0 .4-.62.16-.62.16-1.4 0-.77-.18-1.55-.24.07-.44.07zm.12-1.2q.23-.38.42-.9.19-.52.19-.87 0-.34-.07-.34-.13 0-.28.57-.15.58-.26 1.54zm0 .32l-.05.08-.04.4q.1.04.18.04l.14-.01q-.1-.31-.23-.5zm-.5-.25q-.12.04-.12.18 0 .14.07.25l.05-.43z"/>
    <path d="M-52.3 32.15q-.44 0-.7-.33-.27-.34-.27-.77 0-.87.37-1.31.36-.44.94-.44.27 0 .45.15.17.14.17.4 0 .47-.4.8-.4.31-.98.33.03.3.2.54.19.22.43.22.23 0 .42-.11.2-.11.35-.32.34-.44.58-1l.1-.2q.03-.06.07-.06.05 0 .05.06 0 .4-.49 1.2-.52.84-1.29.84zm-.42-1.36q.47-.08.68-.3.22-.23.22-.58 0-.36-.23-.36-.27 0-.46.39-.2.38-.21.85zm.86-2.72q0-.06-.04-.12t-.04-.1q0-.04.14-.11t.23-.07q.09 0 .17.1.08.09.08.26 0 .27-.34.53-.16.12-.37.2-.2.1-.31.1-.1 0-.1-.08 0-.04.12-.1.46-.23.46-.6z"/>
  </g>`;
let bmcHeader = `<svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 608.71 153" fill="none">${bmcData}</svg>`;
let bmcFooter = `<svg xmlns="http://www.w3.org/2000/svg" height="4rem" viewBox="0 0 608.71 153" fill="none">${bmcData}</svg>`;

export default { bmcHeader, bmcFooter, strings, pageDetails };
