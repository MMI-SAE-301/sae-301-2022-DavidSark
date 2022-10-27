<script setup lang="ts">
import headerVue from '@/components/header.vue';
import footerVue from '@/components/footer.vue';
import FormMontreVue from '@/components/FormMontre.vue';
import { user } from '@/supabase';
import ListeView from '@/pages/ListeView.vue';
</script>

<template>
    <div>
        <div class="bg-[url('../assets/images/fond_grain.png')] h-screen ">
            <headerVue class=""></headerVue>
            <p class="text-white text-center mt-12 lg:text-2xl" v-if="!user">
                <RouterLink class="border-b-jaune-0 border-b" to="loginlogoutview">Connectez-vous</RouterLink> pour
                pouvoir personnsaliser
                votre montre
            </p>

            <div v-else="user">
                <div class="">
                    <p class="text-center font-inter text-white text-xl">Bienvenue sur l'interface de personnalisation
                    </p>
                    <p class="text-center font-inter text-white text-md mt-4">Choississez une partie et une couleur à
                        modifier</p>
                </div>

                <div class="flex justify-center ">

                    <div>
                        <FormMontreVue></FormMontreVue>
                    </div>
                </div>

                <!-- <div class="flex justify-center">
                <button
                    class=" mt-4 text-black lg:text-2xl lg:mt-12 font-inter text-base bg-jaune-0 py-1 px-8 rounded-full ">
                    Enregistrer
                </button>
            </div> -->


                <div class="flex justify-center">
                    <div class="mt-20 w-4/5 border-b-default border-white"></div>
                </div>

                <div class="">
                    <div class="text-center text-white text-xl my-4">
                        <p class="text-2xl">Vos montres</p>
                    </div>
                    <div>
                        <ListeView></ListeView>
                    </div>

                    <!-- <div class="lg:flex lg:justify-evenly mb-6">
                        <div class="">
                            <div class="flex justify-center">
                                <div class="w-40 md:w-60">
                                    <img class="" src="images/montre_noir.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:flex lg:justify-evenly">
                        <div class="">
                            <div class="flex justify-center">
                                <div class="w-40 md:w-60">
                                    <img class="" src="images/montre_jaune.png" />
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>

            <div class="flex justify-center">
                <div class="mt-10 w-4/5 border-b-default border-white"></div>
            </div>

            <footerVue></footerVue>
        </div>
    </div>
</template>

