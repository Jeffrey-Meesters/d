<script setup lang="ts">
import { Button } from 'primevue';
import LoginPanel from './components/LoginPanel.vue'

import logo_letters from "./assets/DREAMERZdo.svg"
import logo from "./assets/logo_white_text.svg"
</script>

<template>
  <nav class="h-[80px] flex items-center px-4">
    <img :src="logo_letters" alt="Dreamerz do logo">
  </nav>
  <main>
    <LoginPanel class="z-50"/>
    <RouterView />
  </main>
  <footer class="flex items-center justify-between gap-2 px-4 bg-surface-0 dark:bg-surface-900">
    <div class="w-1/2">
      <img width="100" :src="logo" alt="logo Dreamerz Do"> <br>
      © 202X Amsterdam. All rights reserved
    </div>
    <div class="w-1/2 flex flex-row gap-2 justify-end">
      <Button icon="pi pi-home" aria-label="Home page" />
      <Button icon="pi pi-facebook" aria-label="Facebook" />
      <Button icon="pi pi-twitter" aria-label="X / formerly twitter" />
      <Button icon="pi pi-instagram" aria-label="Instagram" />
    </div>
  </footer>
</template>