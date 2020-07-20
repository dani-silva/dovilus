const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/src/pages/404.js"))),
  "component---src-pages-components-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/src/pages/components.js"))),
  "component---src-pages-cotizar-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/src/pages/cotizar.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/src/pages/index.js"))),
  "component---src-pages-marketing-digital-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/src/pages/marketing-digital.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/src/pages/page-2.js"))),
  "component---src-pages-pagina-web-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/src/pages/pagina-web.js"))),
  "component---src-pages-tienda-en-linea-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/src/pages/tienda-en-linea.js"))),
  "component---src-pages-web-js": hot(preferDefault(require("/home/daniel/Dovlius/dovlius/dovlius/src/pages/web.js")))
}

