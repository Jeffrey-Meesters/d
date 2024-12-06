import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSignUpStore = defineStore('signup', () => {
  const isSignupVisible = ref(false)

  return { isSignupVisible }
})