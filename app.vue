<template>
  <div>
    <h1>Nuxt 3 App</h1>
      <client-only>
    <smart-camera-web></smart-camera-web>
  </client-only>
  </div>
</template>

<script lang="ts" setup>
if (process.client) {
  import('@smileid/web-components/smart-camera-web')
}
</script>
