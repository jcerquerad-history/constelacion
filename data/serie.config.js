const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://jcerquerad-history.github.io",
  "baseurl": "/constelacion",
  "title": "Constelación de Imágenes",
  "subtitle": "Constelación de imágenes para una interpretación de la identidad nacional: 1920 – 1940 ",
  "credits": "Javier Cerquera D.",
  "copyright": "2026",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text"
      },
      {
        "key": "descripcion",
        "label": "Descripcion",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "fecha",
      "autor",
      "ciudad",
      "descripcion"
    ]
  }
};
export default config;