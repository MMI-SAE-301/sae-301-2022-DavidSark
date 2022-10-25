<script setup lang="ts">
import headerVue from '@/components/header.vue';
import footerVue from '@/components/footer.vue';
</script>

<template>
  <div>
    <div class="bg-noir-0 h-screen overflow-y ">

      <div class="bg-[url('/images/fond_grain.png')] h-screen ">
        <headerVue></headerVue>

        <div class="flex">
          <div class=" mt-40 w-2/5 lg:w-1/2 ">
            <div class="">
              <p class="text-white font-inter text-4xl ml-52">SmartWatch</p>
            </div>

            <div class="mt-4  ">
              <p class="text-white font-inter text-3xl ml-52">Serie P</p>
            </div>

            <div class="mt-4 pt-9">
              <p class="text-white font-inter text-2xl lg:text-base ml-52">Découvrez la nouvelle gamme de montre
                connecté
                SmartWatch Serie P de TiKTaK..
                Nouveau design, nouvelles fonctionnalités mais surtout
                entiérement personnalisable selon vos envies !</p>
            </div>

            <div class="flex">
              <div class="mt-4 pt-20">
                <button
                  class=" lg:text-lg text-black font-inter text-2xl ml-52 bg-white py-2 px-10 rounded-full hover:bg-jaune-0">
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


        <div class="flex justify-evenly">
          <div class="mt-28">
            <img src="images/montre_noir.png" />
            <div class="text-center mt-12">
              <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
              <p class="font-bold text-2xl text-white mt-2">Boîtier en aluminium noir,</p>
              <p class="font-bold text-2xl text-white">stellaire, boucle sport</p>
              <p class="font-thin text-xl text-white my-3">À partir de 299€</p>
              <button class="text-black font-inter text-2xl bg-jaune-0 py-2 px-10 rounded-full">
                Personnaliser
              </button>
            </div>
          </div>

          <div class="mt-28">
            <img src="images/montre_rouge.png" />
            <div class="text-center mt-12">
              <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
              <p class="font-bold text-2xl text-white mt-2">Boîtier en aluminium noir,</p>
              <p class="font-bold text-2xl text-white">stellaire, boucle sport</p>
              <p class="font-thin text-xl text-white my-3">À partir de 299€</p>
              <button class="text-black font-inter text-2xl bg-jaune-0 py-2 px-10 rounded-full">
                Personnaliser
              </button>
            </div>
          </div>

          <div class="mt-28">
            <img src="images/montre_jaune.png" />
            <div class="text-center mt-12">
              <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
              <p class="font-bold text-2xl text-white mt-2">Boîtier en aluminium noir,</p>
              <p class="font-bold text-2xl text-white">stellaire, boucle sport</p>
              <p class="font-thin text-xl text-white my-3">À partir de 299€</p>
              <button class="text-black font-inter text-2xl bg-jaune-0 py-2 px-10 rounded-full">
                Personnaliser
              </button>
            </div>
          </div>
        </div>



        <div class="mt-40 mx-44 border-b-default border-white"></div>


        <div class="mt-28">
          <div class="flex justify-evenly ">
            <img src="images/double_mk.png" />
            <div>
              <p class="text-white mt-28 font-bold font-inter text-3xl">Pas à votre goût</p>
              <div class="text-2xl font-bold my-14 text-white">
                <p>Vous pouvez personnaliser à volonté</p>
                <p>la SmartWatch Serie P pour qu'elle </p>
                <p>corresponde à vos goûts grâce à </p>
                <p>l'interface de personnalisation !</p>
              </div>
              <button class="text-black font-inter text-2xl bg-jaune-0 py-2 px-10 rounded-full">
                Interface de personnalisation
              </button>
            </div>
          </div>
        </div>

        <div class="mt-40 mx-44 border-b-default border-white"></div>

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