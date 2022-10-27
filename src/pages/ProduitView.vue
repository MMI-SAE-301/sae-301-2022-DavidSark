<script setup lang="ts">
import headerVue from '../components/header.vue';
import footerVue from '@/components/footer.vue';
import montreSvgVue from '@/components/montreSvg.vue';
</script>

<template>

    <div>
        <div class="bg-[url('assets/images/fond_grain.png')] h-screen">

            <headerVue></headerVue>

            <div>
                <div class="flex flex-col items-center justify-center lg:flex-row mt-20 lg:mt-36">
                    <img class="w-40 md:w-60 lg:mr-10 lg:w-96  " src="assets/images/montre_rouge.png" />

                    <div class="">

                        <p class="text-jaune-0 text-center font-inter lg:text-left">Nouveauté</p>
                        <p class="text-white font-inter text-center lg:text-left">SmartWatch Serie P</p>


                        <div class="text-white font-inter text-center lg:my-6 lg:text-left">
                            <p>Boîtier en aluminium noir</p>
                            <p>Bracelet boucle Sport</p>
                        </div>

                        <div class="text-white font-inter text-sm my-4 mx-4 lg:mx-0 ">
                            <div class="md:w-96 md:flex md:mx-auto lg:mx-0">
                                <p class="">Extrêmement léger, le boîtier en aluminium est constitué d’un
                                    alliage de qualité
                                    aérospatiale
                                    100
                                    % recyclé.
                                </p>
                            </div>
                        </div>
                        <div class="text-white font-inter text-sm my-4 mx-4 lg:mx-0">
                            <div class="md:w-96 md:flex md:mx-auto lg:mx-0">
                                <p>Constitué d’un silicone extensible et doux, le bracelet Boucle unique est conçu pour
                                    offrir
                                    un
                                    maximum de confort, sans fermoir ni attache.</p>
                            </div>
                        </div>

                        <div class="lg:flex lg:flex-row justify-evenly">
                            <div class="flex justify-center ">

                                <button
                                    class=" mt-4 text-black lg:h-fit font-inter text-base bg-jaune-0 py-1 px-8 rounded-full ">
                                    <RouterLink to="/personnalisationview">Personnaliser</RouterLink>
                                </button>

                            </div>

                            <div class="flex justify-center ">
                                <button class=" mt-4 text-black lg:h-fit  font-inter text-base bg-jaune-0 py-1 px-8
                    rounded-full ">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                        <div class="md:w-fit md:mx-auto">

                            <div class="text-white mt-12  ">

                                <div class="flex mx-3 mt-7 mb-4 lg: lg:m-0">
                                    <img src="assets/images/truck.svg" />
                                    <p class="ml-4">Livraison sous 24h</p>
                                </div>
                                <div class="flex mx-3 mb-4  lg:m-0 ">
                                    <img src="assets/images/box.svg" />
                                    <p class="ml-4">Livraison offerte dès 50€ d'achat</p>
                                </div>

                                <div class="flex mx-3 mb-4 lg:m-0">
                                    <img src=".assets/images/gift.svg" />
                                    <p class="ml-4">Cadeau offert des 90€ d'achat</p>
                                </div>
                                <div class="flex mx-3 lg:mx-0 lg:px">
                                    <img class="" src="assets/images/circle.svg" />
                                    <p class="ml-4">Retour simple et rapide</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="my-20 w-4/5 border-b-default border-white"></div>
            </div>

            <div class="lg:mb-12">
                <p class="text-white font-inter text-center">Découvrez aussi </p>
            </div>

            <div class=" lg:m-0 lg:flex lg:justify-center">
                <div>
                    <div class="mt-12 lg:mt-0">
                        <div class="lg:flex lg:items-center">
                            <div class="lg:mr-60">
                                <div class=" flex justify-center ">
                                    <div class="w-40 md:w-60">
                                        <img src="assets/images/montre_jaune.png" />
                                    </div>
                                </div>

                                <div class="lg:flex lg:flex-row lg:mb-12 lg:justify-evenly ">
                                    <div class="text-center ">
                                        <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
                                        <p class="font-bold text-xl text-white mt-2 lg:text-xl">Boîtier en aluminium
                                            noir,
                                        </p>
                                        <p class="font-bold text-xl text-white lg:text-xl">stellaire, boucle sport</p>
                                        <p class="font-thin text-sm text-white my-3">À partir de 299€</p>
                                        <button class="text-black font-inter text-xl bg-jaune-0 py-1 px-8 rounded-full">
                                            <RouterLink to="personnalisationview">Personnaliser</RouterLink>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="mt-12 lg:mt-0">
                                    <div class=" flex justify-center ">
                                        <div class="w-40 md:w-60">
                                            <img src="assets/images/montre_noir.png" />
                                        </div>
                                    </div>

                                    <div class="lg:flex lg:flex-row lg:mb-12 lg:justify-evenly ">
                                        <div class="text-center ">
                                            <p class="text-jaune-0 font-medium text-xl">Nouveauté</p>
                                            <p class="font-bold text-xl text-white mt-2 lg:text-xl">Boîtier en aluminium
                                                noir,
                                            </p>
                                            <p class="font-bold text-xl text-white lg:text-xl">stellaire, boucle sport
                                            </p>
                                            <p class="font-thin text-sm text-white my-3">À partir de 299€</p>
                                            <button
                                                class="text-black font-inter text-xl bg-jaune-0 py-1 px-8 rounded-full">
                                                <RouterLink to="personnalisationview">Personnaliser</RouterLink>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="flex justify-center">
                <div class="mt-10 w-4/5 border-b-default border-white"></div>
            </div>
            <footerVue></footerVue>
        </div>
    </div>

</template>
