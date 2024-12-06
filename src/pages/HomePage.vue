<script lang="ts" setup>
  import Button from 'primevue/button';
  import { useRouter } from 'vue-router';
  import myImg from '@/assets/dreamy-3.png';
  const router = useRouter();
</script>

<template>
  <!-- hero start -->
    <div class="flex lg:flex-row flex-col gap-4 bg-surface-0 dark:bg-surface-900">
        <div class="flex-1 flex items-center justify-center">
            <div class="p-6 pt-12 lg:p-12">
                <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left">
                    We create the screens your <br /><span class="text-primary">visitors deserve to see</span>
                </h1>
                <p class="text-surface-700 dark:text-surface-200 leading-normal mb-8 text-center lg:text-left">
                    Dreamerz Do builds stylefull pages to get your message accross.
                </p>
                <div class="flex items-center justify-center">
                    <Button label="Learn More" type="button" class="w-1/2" @click="router.push({name: 'LearnMore'})"/>
                </div>
            </div>
        </div>
        <div class="flex-1 overflow-hidden">
            <img :src="myImg" alt="hero-1" class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]" />
        </div>
    </div>
    <!-- hero end -->
    <!-- features start -->
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 text-center">
        <div class="mb-4 font-bold text-3xl">
            <span class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-6xl mb-6 text-center">One place, </span>
            <span class="text-primary-600 dark:text-primary-400 font-bold text-4xl lg:text-6xl mb-6 text-center">Many solutions</span>
        </div>
        <div class="text-surface-700 dark:text-surface-0/70 mb-[3rem] text-lg">You choose</div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3.5 gap-y-6">
            <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
                >
                    <i class="pi pi-desktop text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
                </span>
                <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Build for Developers</div>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">
                  Buy the code, update content, sell the page to your customers
                </p>
            </div>
            <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
                >
                    <i class="pi pi-lock text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
                </span>
                <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Build for SMEs</div>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">
                  Buy the template, update the content, sell what you sell on your domain
                </p>
            </div>
            <div class="w-full p-4">
                <span
                    class="w-16 h-16 mb-6 rounded-lg flex items-center justify-center mx-auto bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
                >
                    <i class="pi pi-check-circle text-2xl lg:text-3xl text-primary-500 dark:text-primary-400" />
                </span>
                <div class="text-surface-900 dark:text-surface-0 text-xl mb-2 font-medium">Easy to Use</div>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal max-w-sm mx-auto text-center">
                  You provide the content, we provide the code
                </p>
            </div>
        </div>
        <div class="flex items-center justify-end mt-6">
            <Button label="Learn More" type="button" class="w-full" @click="router.push({name: 'LearnMore'})"/>
        </div>
    </div>
    <!-- features end -->
    <!-- pricing start -->
    <div class="px-6 py-20 md:px-12 lg:px-20">
        <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-6xl mb-6 text-center">Pricing Plans</div>
        <div class="text-surface-700 dark:text-surface-0/70 text-xl mb-12 text-center leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        <div class="flex lg:flex-row flex-col gap-8 lg:gap-4 xl:gap-12 max-w-7xl mx-auto">
            <div
                class="w-full flex-1 py-4 px-4 lg:px-6 flex rounded-lg flex-col bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
            >
                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Basic</div>
                <div class="text-surface-600 dark:text-surface-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                <div class="flex items-center gap-2">
                    <span class="font-bold text-2xl text-surface-900 dark:text-surface-0">$9</span>
                    <span class="font-medium text-surface-600 dark:text-surface-300">per month</span>
                </div>
                <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-600" />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Arcu vitae elementum </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Dui faucibus in ornare </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Morbi tincidunt augue </span>
                    </li>
                </ul>
                <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                <Button label="Buy Now" class="px-5 py-3" />
            </div>
            <div
                class="w-full flex-1 py-4 px-4 lg:px-6 flex rounded-lg flex-col bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
            >
                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Premium</div>
                <div class="text-surface-600 dark:text-surface-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                <div class="flex items-center gap-2">
                    <span class="font-bold text-2xl text-surface-900 dark:text-surface-0">$29</span>
                    <span class="font-medium text-surface-600 dark:text-surface-300">per month</span>
                </div>
                <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Arcu vitae elementum </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Dui faucibus in ornare </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Morbi tincidunt augue </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Duis ultricies lacus sed </span>
                    </li>
                </ul>
                <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                <Button label="Buy Now" class="px-5 py-3" />
            </div>
            <div
                class="w-full flex-1 py-4 px-4 lg:px-6 flex rounded-lg flex-col bg-surface-0 dark:bg-surface-800 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_0px_2px_0px_rgba(0,0,0,0.06),0px_4px_10px_0px_rgba(0,0,0,0.03)]"
            >
                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Enterprise</div>
                <div class="text-surface-600 dark:text-surface-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                <div class="flex items-center gap-2">
                    <span class="font-bold text-2xl text-surface-900 dark:text-surface-0">$49</span>
                    <span class="font-medium text-surface-600 dark:text-surface-300">per month</span>
                </div>
                <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Arcu vitae elementum </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Dui faucibus in ornare </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Morbi tincidunt augue </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Duis ultricies lacus sed </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Imperdiet proin </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-green-500 text-lg" />
                        <span class="text-surface-800 dark:text-surface-100 leading-6"> Nisi scelerisque </span>
                    </li>
                </ul>
                <div class="my-4 w-full h-px bg-surface-300 dark:bg-surface-700" />
                <Button label="Buy Now" class="px-5 py-3" />
            </div>
        </div>
    </div>     
    <!-- pricing end -->
</template>