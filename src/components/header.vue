<script setup lang="ts">
import { ref } from 'vue'
const menuVisible = ref(true);
</script>

<template>
    <div>
        <div class="">
            <div class="hidden lg:flex justify-around  space-x-12">
                <div class="flex items-center py-5 px-2">
                    <p class="font-yeseva text-5xl mr-96 text-white">TiKTaK..</p>
                </div>

                <div class=" hidden text-white lg:flex items-center space-x-6">
                    <router-link class=" no-underline" to="/">
                        <p class="font-inter hover:border-b-default border-b-white ">Nouveauté</p>
                    </router-link>
                    <router-link class="text-white no-underline" to="/connexion">
                        <p class="font-inter hover:border-b-default border-b-white">Personnalisation</p>
                    </router-link>
                    <router-link class="text-white shrink-0 no-underline" to="/liste">
                        <p class="font-inter hover:border-b-default  border-b-white">Vos montres</p>
                    </router-link>
                    <router-link class="text-white  no-underline" to="/liste-fetch">
                        <p class="font-inter hover:border-b-default border-b-white">Promotions</p>
                    </router-link>
                    <router-link class="text-white no-underline" to="/edit/new">
                        <img class="hover:border-b-default border-b-white" src="public/images/user.svg" />
                    </router-link>

                </div>
            </div>
        </div>

        <div class="lg:hidden flex items-center">
            <button v-on:click="menuVisible = !menuVisible" class="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black" viewBox="0 0 20 20"
                    fill="currentColor" :class="{ hidden: !menuVisible }">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div class="" :class="{ hidden: menuVisible }">
            <button v-if="!menuVisible" v-on:click="menuVisible = !menuVisible" class="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h4 class="text-xl">
                <Bars3Icon class="inline-block h-5 w-5 text-blue-500" />
                Naviguer à travers le menu
            </h4>
            <ul class="ml-8">
                <li>
                    <router-link class="text-black no-underline hover:text-indigo-400" to="/">
                        <code class="font-mono">Accueil</code>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-black no-underline hover:text-indigo-400" to="/simple">

                        <code class="font-mono">Simple.vue</code>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-black  no-underline hover:text-indigo-700" to="/liste">
                        <code class="font-mono">Liste.vue</code>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-black  no-underline hover:text-indigo-400" to="/liste-fetch">
                        <code class="font-mono">Liste-Fetch</code>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-black  no-underline hover:text-indigo-400" to="/offre/1">
                        <code class="font-mono">Offre nbr1</code>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-black  no-underline hover:text-indigo-400" to="/offre/2">
                        <code class="font-mono">Offre nbr2</code>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-black  no-underline hover:text-indigo-400" to="/edit/new">
                        <code class="font-mono">New.vue</code>
                    </router-link>
                </li>

                <li>
                    <router-link class="text-black  no-underline hover:text-indigo-400" to="/liste-supabase">
                        <code class="font-mono">Liste-Supabase</code>
                    </router-link>
                </li>

                <li>
                    <router-link class="text-black  no-underline hover:text-indigo-400" to="/authentification">
                        <code class="font-mono">Authentification</code>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-black  no-underline hover:text-indigo-400" to="/edit/id ">
                        <code class="font-mono">Edit</code>
                    </router-link>
                </li>

            </ul>
        </div>

    </div>
</template>