/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

// Theme
import { type ThemeDefinition } from 'vuetify'
import colors from 'vuetify/util/colors'

const lightTheme: ThemeDefinition = {
  colors:{
    primary: colors.pink.lighten2,
    secondary: '#62f0c1',
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors:{
    primary: colors.pink.darken2,
    secondary: '#62f0c1',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'light',
    themes:{
      'light': lightTheme,
      'dark': darkTheme
    }
  }
  //
})
