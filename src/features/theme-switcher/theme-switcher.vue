<script setup lang="ts">
import {
  MoonIcon,
  SunIcon
} from "lucide-vue-next"

const colorMode = useColorMode()

const toggleTheme = () => {
  if (colorMode.value  === 'light') {
    colorMode.preference = 'dark'
  } else if (colorMode.value === 'dark') {
    colorMode.preference = 'light'
  } else if (colorMode.value === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    colorMode.preference = prefersDark ? 'light' : 'dark'
  }
}
</script>

<template>
  <Button variant="ghost" size="icon" @click="toggleTheme">
    <SunIcon class="size-5 dark:hidden"/>
    <MoonIcon class="size-5 hidden dark:block"/>
  </Button>
</template>