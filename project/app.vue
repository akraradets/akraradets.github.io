<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
    <!-- <NuxtWelcome /> -->
</template>

<script setup lang="ts">
// Set up theme from cookie
import { useTheme } from 'vuetify';
import { useCookie } from 'nuxt/app';

const theme = useTheme();
const cookie = useCookie<string>('theme');
// If cookie not set, default to light
cookie.value = cookie.value || 'light'
theme.global.name.value = cookie.value
</script>