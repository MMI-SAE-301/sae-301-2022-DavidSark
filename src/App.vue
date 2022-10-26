<script setup lang="ts">
import headerVue from '@/components/header.vue';
import footerVue from '@/components/footer.vue';
</script>

<template>
  <div>
    <div class="bg-noir-0 h-screen ">

      <div class="bg-[url('/images/fond_grain.png')] h-screen ">
        <headerVue class="mt-10"></headerVue>


        <div class="flex flex-col lg:flex-row-reverse items-center justify-center 1440:mx-40 ">


          <div class=" items-center  lg:mr-12  ">
            <img class="w-520 px-4 lg:px-0" src="images/mk_accueil.png" />
          </div>
          <div class="lg:flex lg:flex-col lg:items-start  1440:text-xl 1440:w-4/5">
            <div class="my-4 lg:ml-8">
              <p class="text-white font-inter text-center text-2xl lg:text-4xl">SmartWatch</p>
            </div>

            <div class="lg:ml-8">
              <p class="text-white font-inter text-center text-xl lg:text-3xl">Serie P</p>
            </div>

            <div class="mx-8 mt-4 lg:w-9/12">
              <p class="text-white shrink-0 inline-block text-sm lg:text-base font-inter ">
                Découvrez la nouvelle gamme de montre
                connecté
                SmartWatch Serie P de TiKTaK..
                Nouveau design, nouvelles fonctionnalités mais surtout
                entiérement personnalisable selon vos envies !</p>
            </div>

            <div class="text-center mt-6">
              <button
                class=" lg:text-lg lg:ml-8 text-black font-inter text-sm bg-white py-1 px-8 rounded-full hover:bg-jaune-0">
                Personnaliser
              </button>
            </div>
          </div>
        </div>


        <div class="flex justify-center">
          <div class="my-20 w-4/5 border-b-default border-white"></div>
        </div>


        <div class="lg:flex lg:justify-evenly">
          <div class="">
            <div class="flex justify-center">
              <div class="w-40 md:w-60">
                <img class="" src="images/montre_noir.png" />
              </div>
            </div>

            <div class="text-center ">
              <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
              <p class="font-bold text-xl text-white mt-2 lg:text-xl">Boîtier en aluminium noir,</p>
              <p class="font-bold text-xl text-white lg:text-xl">stellaire, boucle sport</p>
              <p class="font-thin text-sm text-white my-3">À partir de 299€</p>
              <button class="text-black font-inter text-xl bg-jaune-0 py-1 px-8 rounded-full">
                Personnaliser
              </button>
            </div>
          </div>

          <div class="mt-12 lg:m-0">
            <div class="flex justify-center">
              <div class="w-40 md:w-60">
                <img src="images/montre_rouge.png" />
              </div>
            </div>

            <div class="text-center ">
              <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
              <p class="font-bold text-xl text-white mt-2 lg:text-xl">Boîtier en aluminium noir,</p>
              <p class="font-bold text-xl text-white lg:text-xl">stellaire, boucle sport</p>
              <p class="font-thin text-sm text-white my-3">À partir de 299€</p>
              <button class="text-black font-inter text-xl bg-jaune-0 py-1 px-8 rounded-full">
                Personnaliser
              </button>
            </div>
          </div>

          <div class="mt-12 lg:m-0">
            <div class=" flex justify-center">
              <div class="w-40 md:w-60">
                <img src="images/montre_jaune.png" />
              </div>
            </div>

            <div class="text-center ">
              <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
              <p class="font-bold text-xl text-white mt-2 lg:text-xl">Boîtier en aluminium noir,</p>
              <p class="font-bold text-xl text-white lg:text-xl">stellaire, boucle sport</p>
              <p class="font-thin text-sm text-white my-3">À partir de 299€</p>
              <button class="text-black font-inter text-xl bg-jaune-0 py-1 px-8 rounded-full">
                Personnaliser
              </button>
            </div>
          </div>
        </div>


        <div class="flex justify-center">
          <div class="my-20 w-4/5 border-b-default border-white"></div>
        </div>


        <div class="lg:flex lg:justify-center ">
          <div class="flex justify-center">
            <div class="w-64 mb-12 md:w-490">
              <img class="" src="images/double_mk.png" />
            </div>
          </div>

          <div class="lg:mt-20">
            <p class="text-white lg:mt-0 lg:text-4xl font-bold font-inter text-base text-center">Pas à votre goût ?</p>
            <div class="text-xl mx-10 lg:text-xl lg:mt-8 mt-4 text-white text-center">
              <p class="lg:text-left">Personnaliser à volonté votre SmartWatch</p>
              <p class="hidden lg:block text-left">Serie P pour qu'elle corresponde à votre</p>
              <p class="hidden lg:block text-left ">Style grâce à l'interface de personnalisation</p>
            </div>
            <div class="flex justify-center">
              <button
                class=" mt-4 text-black lg:text-2xl lg:mt-12 font-inter text-base bg-jaune-0 py-1 px-8 rounded-full ">
                Interface de personnalisation
              </button>
            </div>
          </div>
        </div>


        <div class="flex justify-center">
          <div class="mt-20 w-4/5 border-b-default border-white"></div>
        </div>

        <footerVue></footerVue>

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