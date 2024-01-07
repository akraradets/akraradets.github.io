<template>
  <p>{{ $route.params.slug }}</p>
  <ContentDoc />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'document'
})
</script>