<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <TheWelcome />
  <RouterLink to="/game">New Game</RouterLink>
</template>
