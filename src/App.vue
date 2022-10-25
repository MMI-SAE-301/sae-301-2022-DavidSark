<script setup lang="ts">
import headerVue from '@/components/header.vue';
</script>

<template>
  <div>
    <div class="bg-noir-0 h-screen overflow-y ">

      <div class="bg-[url('/images/fond_grain.png')] h-screen ">
        <headerVue></headerVue>

        <div class="flex">
          <div class=" mt-40 w-2/5 ">
            <div class="">
              <p class="text-white font-inter text-4xl ml-52">SmartWatch</p>
            </div>

            <div class="mt-4  ">
              <p class="text-white font-inter text-3xl ml-52">Serie P</p>
            </div>

            <div class="mt-4 pt-9">
              <p class="text-white font-inter text-2xl ml-52">Découvrez la nouvelle gamme de montre connecté
                SmartWatch Serie P de TiKTaK..
                Nouveau design, nouvelles fonctionnalités mais surtout
                entiérement personnalisable selon vos envies !</p>
            </div>

            <div class="flex">
              <div class="mt-4 pt-20">
                <button class="text-black font-inter text-2xl ml-52 bg-white py-2 px-10 rounded-full hover:bg-jaune-0">
                  Personnaliser
                </button>
              </div>
            </div>
          </div>

          <div class="mt-36 mx-36">
            <img src="images/mk_accueil.png" />
          </div>
        </div>


        <div class="mt-40 mx-44 border-b-default border-white"></div>




      </div>
    </div>
  </div>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view />
  </Suspense>
</template>


<style>
body {
  overflow-x: hidden;
  background-image: url('images/fond_grain.png');
}
</style>