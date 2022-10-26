<script setup lang="ts">
import headerVue from '../components/header.vue';
import footerVue from '@/components/footer.vue';
import montreSvgVue from '@/components/montreSvg.vue';
</script>

<template>
    <div>
        <div class="bg-[url('/images/fond_grain.png')] h-screen ">
            <headerVue class=""></headerVue>

            <div>
                <p class="text-center text-white text-3xl">Prévisualisation :</p>
            </div>

            <div class="flex justify-center ">
                <div>
                    <montreSvgVue class="w-60"></montreSvgVue>
                </div>
            </div>

            <div class="">
                <p class="text-center text-white text-xl">Bienvenue sur l'interface de personnalisation</p>
                <p class="text-center text-white text-md mt-4">Choississez une partie et une couleur à modifier</p>
            </div>


        </div>
    </div>
</template>

