<script setup lang="ts">
import { Dialog, InputText, Button } from "primevue";
import logo from "../assets/logo_white_text.svg"

import { useSignUpStore } from "../store/useSignUpStore";
const signUpStore = useSignUpStore()
</script>

<template>
  <div class="card flex justify-center">
    <Dialog v-model:visible="signUpStore.isSignupVisible" pt:root:class="!border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
      <template #container="{ closeCallback }">
        <div class="flex flex-col justify-center items-center px-8 py-8 gap-6 rounded-2xl" style="background-image: radial-gradient(circle at left top, var(--p-cyan-600), var(--p-cyan-700))">
          <img width="200px" :src="logo" alt="Dreamerz do logo">
          <div class="inline-flex flex-col gap-2">
              <label for="username" class="text-primary-50 font-semibold">Email</label>
            <InputText id="username" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"></InputText>
          </div>
          <div class="inline-flex flex-col gap-2">
            <label for="password" class="text-primary-50 font-semibold">Password</label>
            <InputText id="password" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" type="password"></InputText>
          </div>
          <div class="flex flex-row items-center gap-4 w-full">
            <Button label="Cancel" @click="closeCallback" text class="!p-4 !w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"></Button>
            <Button label="Create account" @click="closeCallback" text class="!p-4 !w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"></Button>
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>
