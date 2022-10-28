<script setup lang="ts">
import { ref } from 'vue'
const menuVisible = ref(true);
</script>

<template>
    <div>
        <!-- Menu responsive -->

        <div class="overflow-y-hidden bg-[url('assets/images/fond_grain.png')]  h-full w-screen fixed "
            :class="{ hidden: menuVisible }">
            <div class="flex justify-end mt-4">
                <button v-if="!menuVisible" v-on:click="menuVisible = !menuVisible" class="mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <ul class="ml-8 font-inter leading-extra-loose text-center text-xl ">
                <li>
                    <router-link class="text-white no-underline hover:text-jaune-0" to="/">
                        <p>Accueil</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-white no-underline hover:text-jaune-0" to="/produitview">
                        <p class="text-inter">Nouveauté</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-white no-underline hover:text-jaune-0" to="/personnalisationview">
                        <p class="text-inter">Personnalisation</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-white no-underline hover:text-jaune-0" to="/personnalisationview">
                        <p class="text-inter">Vos montres</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-white no-underline hover:text-jaune-0" to="/produitview">
                        <p class="text-inter">Promotions</p>
                    </router-link>
                </li>
                <li>
                    <div class="flex justify-center">
                        <router-link class="text-white no-underline hover:text-jaune-0" to="/loginlogoutview">
                            <img src="../assets/images/user.svg" />
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>

        <div class="mx-8 ">
            <div class="hidden lg:flex justify-between my-12  ">
                <div class="flex items-center ">
                    <RouterLink class=" font-yeseva text-5xl text-white " to="/">TiKTaK..</RouterLink>
                </div>

                <div class=" hidden text-white lg:flex items-center space-x-6">
                    <router-link class=" no-underline" to="/produitview">
                        <p class="font-inter hover:border-b-default border-b-white">Nouveauté</p>
                    </router-link>
                    <router-link class="text-white no-underline" to="/personnalisationview">
                        <p class="font-inter hover:border-b-default border-b-white ">Personnalisation
                        </p>
                    </router-link>
                    <router-link class="text-white shrink-0 no-underline" to="/personnalisationview">
                        <p class="font-inter hover:border-b-default  border-b-white ">Vos montres</p>
                    </router-link>
                    <router-link class="text-white  no-underline" to="/produitview">
                        <p class="font-inter hover:border-b-default border-b-white ">Promotions</p>
                    </router-link>
                    <router-link class="text-white  no-underline" to="/loginlogoutview">
                        <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M28.7158 28.875V26.125C28.7158 24.6663 28.1286 23.2674 27.0833 22.2359C26.038 21.2045 24.6203 20.625 23.1421 20.625H11.9946C10.5164 20.625 9.09868 21.2045 8.0534 22.2359C7.00813 23.2674 6.4209 24.6663 6.4209 26.125V28.875"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M17.5684 15.125C20.6466 15.125 23.1421 12.6626 23.1421 9.625C23.1421 6.58743 20.6466 4.125 17.5684 4.125C14.4901 4.125 11.9946 6.58743 11.9946 9.625C11.9946 12.6626 14.4901 15.125 17.5684 15.125Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="lg:hidden mb-12">
            <div class="flex items-center justify-between">
                <div class="mx-4 mt-4">
                    <p class="text-white font-yeseva text-4xl">TiKTaK..</p>
                </div>
                <button v-on:click="menuVisible = !menuVisible" class="mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20"
                        fill="currentColor" :class="{ hidden: !menuVisible }">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>



    </div>
</template>