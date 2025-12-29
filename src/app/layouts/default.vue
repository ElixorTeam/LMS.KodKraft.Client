<script setup lang="ts">
import { LayoutHeader } from "~/widgets/page-layout"
</script>

<template>
  <div class="w-screen font-sans bg-background text-foreground antialiased scroll-smooth">
    <LayoutHeader />
    <slot />
  </div>
</template>
