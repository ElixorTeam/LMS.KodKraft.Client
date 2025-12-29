<script setup lang="ts">
import type {ItemNavbar} from "~/widgets/navbar/model/config";

const props = defineProps<{
  items: ItemNavbar[]
}>()
</script>

<template>
  <div class="flex items-center justify-self-end lg:gap-2">
    <template v-for="item in props.items" :key="item.link">
      <Button variant="ghost" class="px-2.5" size="sm">
        <NuxtLink :to="item.link" class="relative items-center">
          {{ item.title }}
        </NuxtLink>
      </Button>
    </template>
  </div>
</template>