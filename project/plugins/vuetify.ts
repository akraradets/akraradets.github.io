// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'
import { createVuetify } from 'vuetify'


// Theme
import { type ThemeDefinition } from 'vuetify'
import colors from 'vuetify/util/colors'

const lightTheme: ThemeDefinition = {
  colors:{
    primary: colors.brown.darken2,
    secondary: colors.blueGrey.lighten1,
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors:{
    primary: colors.brown.darken4,
    secondary: colors.blueGrey.darken4,
  }
}

export default defineNuxtPlugin((app) => {
  var vuetify = createVuetify({
    blueprint: md3,
    theme: {
      defaultTheme: 'light',
      themes: {
        'light': lightTheme,
        'dark': darkTheme,
      }
    },
    ssr: true,
  })
  app.vueApp.use(vuetify)
})