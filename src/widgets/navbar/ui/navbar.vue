<script setup lang="ts">
import {navbarItems} from "~/widgets/navbar/model/config";
import NavbarItems from "~/widgets/navbar/ui/navbar-items.vue";
import {ThemeSwitcher} from "~/features/theme-switcher";
</script>

<template>
  <NavbarItems :items="navbarItems" />
  <ThemeSwitcher></ThemeSwitcher>
</template>