<template>
  <v-app-bar :elevation="2" color="primary" density="compact">
    <v-container class="mx-auto d-flex align-center justify-center">
      <!-- <v-app-bar-title> -->
        <v-btn class="hidden-lg-and-up pull-btn" icon="mdi-menu" @click.stop="store.isOpen = !store.isOpen; console.log(store.isOpen)"></v-btn>
        <v-icon icon="mdi-alpha-a-circle" />
        <v-icon icon="mdi-alpha-s-box-outline" />
      <!-- </v-app-bar-title> -->
      
      <v-btn href="/">Home</v-btn>
      <v-btn href="/projects">Projects</v-btn>
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
import { useTheme } from 'vuetify';
import { useCookie } from 'nuxt/app'
import { onMounted } from 'vue';
import { useDrawerStore } from '@/stores/drawer'
const store = useDrawerStore();

const theme = useTheme();
const cookie = useCookie<string>('theme');
var isDark = cookie.value
const setTheme = () => {
  theme.global.name.value = cookie.value
  isDark = cookie.value
}

const toggleTheme = () => {
  const selected_theme = cookie.value != 'light' ? 'light' : 'dark'
  cookie.value = selected_theme
  setTheme()
}


onMounted(() => {
  
  setTheme()

})
</script>