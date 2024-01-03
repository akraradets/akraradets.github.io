<template>
  <v-app-bar :elevation="2" color="primary">
    <v-container class="mx-auto d-flex align-center justify-center">
      <!-- <v-app-bar-title> -->
      <v-icon icon="mdi-alpha-a-circle" />
      <v-icon icon="mdi-alpha-s-box-outline" />
      <!-- </v-app-bar-title> -->
      <v-btn href="/">Home</v-btn>
      <v-btn href="/document">Document</v-btn>
      <v-spacer></v-spacer>


      <v-btn id="menu-activator" icon="mdi-dots-vertical"></v-btn>
      <v-menu activator="#menu-activator" :close-on-content-click="false">
        <v-card>
          <v-list>
            <v-list-subheader>Setting</v-list-subheader>
            <v-list-item>
              <v-switch @click="toggleTheme" 
                false-icon="mdi-white-balance-sunny" 
                true-icon="mdi-weather-night"
                false-value="light" 
                true-value="dark" 
                label="Switch Theme" 
                v-model="isDark"></v-switch>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useTheme } from 'vuetify';
import { useCookies } from 'vue3-cookies'
const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]



const theme = useTheme();
const cookies = useCookies().cookies;
var isDark = 'light'
const setTheme = () => {
  theme.global.name.value = cookies.get('theme')
  isDark = cookies.get('theme')
}
const toggleTheme = () => {
  const selected_theme = cookies.get('theme') != 'light' ? 'light' : 'dark'
  cookies.set('theme', selected_theme)
  setTheme()
}

onMounted(() => {
  // check if cookie is set. if not set to light (default)
  if (cookies.isKey('isDark') == false) {
    cookies.set('isDark', 'light');
  }
  setTheme()
})

//
</script>