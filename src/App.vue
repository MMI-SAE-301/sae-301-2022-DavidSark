<script setup lang="ts">
import headerVue from '@/components/header.vue';
import footerVue from '@/components/footer.vue';
</script>

<template>
  <div>
    <div class="bg-noir-0 h-screen ">

      <div class="bg-[url('/images/fond_grain.png')] h-screen ">
        <headerVue class="mt-10"></headerVue>


        <div class="flex flex-col lg:flex-row-reverse items-center justify-center">


          <div class="w-3/4 items-center lg:mr-12">
            <img src="images/mk_accueil.png" />
          </div>
          <div class="lg:flex lg:flex-col lg:items-start">
            <div class="my-4 lg:ml-8">
              <p class="text-white font-inter text-center text-4xl">SmartWatch</p>
            </div>

            <div class="lg:ml-8">
              <p class="text-white font-inter text-center text-3xl">Serie P</p>
            </div>

            <div class="mx-8 mt-4 lg:w-9/12">
              <p class="text-white shrink-0 inline-block font-inter ">
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


        <!-- <div class="flex">
          <div class=" mt-40 w-2/5 lg:w-1/2 ">
            <div class="">
              <p class="text-white font-inter text-4xl ml-52">SmartWatch</p>
            </div>

            <div class="mt-4  ">
              <p class="text-white font-inter text-3xl ml-52">Serie P</p>
            </div>

            <div class="mt-4 pt-9">
              <p class="text-white shrink-0 inline-block font-inter text-2xl lg:text-base ml-52">
                Découvrez la nouvelle gamme de montre
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


        <div class="flex justify-center">
          <div class="mt-40 w-4/5 border-b-default border-white"></div>
        </div>


        <div class="flex justify-evenly">
          <div class="mt-28 lg:w-72">
            <img src="images/montre_noir.png" />
            <div class="text-center mt-12 ">
              <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
              <p class="font-bold text-2xl text-white mt-2 lg:text-xl">Boîtier en aluminium noir,</p>
              <p class="font-bold text-2xl text-white lg:text-xl">stellaire, boucle sport</p>
              <p class="font-thin text-xl text-white my-3">À partir de 299€</p>
              <button class="text-black font-inter text-2xl bg-jaune-0 py-2 px-10 rounded-full">
                Personnaliser
              </button>
            </div>
          </div>

          <div class="mt-28 lg:w-72">
            <img src="images/montre_rouge.png" />
            <div class="text-center mt-12">
              <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
              <p class="font-bold text-2xl text-white lg:text-xl mt-2">Boîtier en aluminium noir,</p>
              <p class="font-bold text-2xl text-white lg:text-xl">stellaire, boucle sport</p>
              <p class="font-thin text-xl text-white my-3">À partir de 299€</p>
              <button class="text-black font-inter text-2xl bg-jaune-0 py-2 px-10 rounded-full">
                Personnaliser
              </button>
            </div>
          </div>

          <div class="mt-28 lg:w-72">
            <img src="images/montre_jaune.png" />
            <div class="text-center mt-12">
              <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
              <p class="font-bold text-2xl text-white mt-2 lg:text-xl">Boîtier en aluminium noir,</p>
              <p class="font-bold text-2xl text-white lg:text-xl">stellaire, boucle sport</p>
              <p class="font-thin text-xl text-white my-3">À partir de 299€</p>
              <button class="text-black font-inter text-2xl bg-jaune-0 py-2 px-10 rounded-full">
                Personnaliser
              </button>
            </div>
          </div>
        </div>



        <div class="flex justify-center">
          <div class="mt-40 w-4/5 border-b-default border-white"></div>
        </div>

        <div class="mt-28">
          <div class="flex justify-evenly ">
            <div class="w-490">
              <img class="" src="images/double_mk.png" />
            </div>

            <div>
              <p class="text-white lg:mt-0 mt-28 font-bold font-inter text-3xl">Pas à votre goût</p>
              <div class="text-2xl font-bold my-14 text-white">
                <p>Personnaliser à volonté la SmartWatch</p>
                <p>Serie P pour qu'elle corresponde </p>
                <p>à vos goûts grâce à l'interface </p>
                <p>de personnalisation !</p>
              </div>
              <button class="text-black font-inter text-2xl bg-jaune-0 py-2 px-10 rounded-full">
                Interface de personnalisation
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="mt-40 w-4/5 border-b-default border-white"></div>
        </div> -->

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