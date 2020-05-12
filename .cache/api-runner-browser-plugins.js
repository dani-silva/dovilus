module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-122115546-1","head":true,"anonymize":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"dovlius","short_name":"starter","start_url":"/","background_color":"#0070BA","theme_color":"#0070BA","display":"minimal-ui","icon":"src/images/logo.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
