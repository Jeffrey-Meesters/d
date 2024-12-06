<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
const router = useRouter();

import { useSignUpStore } from "@/store/useSignUpStore";
const signUpStore = useSignUpStore()
</script>

<template>
  <div class="flex justify-center flex-col gap-4 bg-surface-0 dark:bg-surface-900 pt-6">
    <h1 class="text-center">
      <span class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-6xl mb-6 text-center">One place, </span>
      <span class="text-primary-600 dark:text-primary-400 font-bold text-4xl lg:text-6xl mb-6 text-center">Many solutions</span>
    </h1>
    <h2 class="text-surface-900 dark:text-surface-0 font-bold text-xl text-center">
      An entrepreneur that needs a website <span class="text-primary-600 dark:text-primary-400">or</span> a developer that wants to sell websites?
    </h2>
  </div>
  <div class="flex justify-center pt-6 gap-4 bg-surface-0 dark:bg-surface-900 p-4">
    <div>
      <p class="max-w-[500px]">
        <span class="text-primary-600 dark:text-primary-400">What's inside</span> here is for you the ability to customize existing templates with your own content and brand colors. <br>
        After which you can download them and host them yourself. <br>
        <span class="text-primary-600 dark:text-primary-400">Or</span> you let us host them for you.
      </p>
      <Button 
        label="Look inside" 
        type="button" 
        class="max-w-[200px] mt-4"
        @click="signUpStore.isSignupVisible = true"
      />
    </div>
    <div>
      <p>
        Have some more questions? <br>
        We'd like to answer them!
      </p>
      <Button 
        label="Contact" 
        type="button" 
        class="max-w-[200px] mt-4"
        @click="router.push({name: 'signUp'})"
      />
    </div>
  </div>
  <div class="flex justify-center flex-col gap-4 pt-6">
    <h2 class="text-center">
      <span class="text-primary-600 dark:text-primary-400 font-bold text-3xl lg:text-3xl mb-6 text-center">See </span>
      <span class="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-3xl mb-6 text-center">it here</span>
    </h2>
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3.5 gap-y-6">
        <div class="w-full p-4">
          <span
            class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
          >
            <i class="pi pi-image text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
          </span>
          <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium text-center">Add content</div>
        </div>
        <div class="w-full p-4">
          <span
            class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
          >
            <i class="pi pi-image text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
          </span>
          <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium text-center">Change colors</div>
        </div>
        <div class="w-full p-4">
          <span
            class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
          >
            <i class="pi pi-image text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
          </span>
          <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium text-center">Download</div>
        </div>
        <div class="w-full p-4">
          <span
            class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
          >
            <i class="pi pi-image text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
          </span>
          <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium text-center">Host</div>
        </div>
      </div>
    </div>
  </div>
</template>