<template>
    <div>
        <div class="bg-noir-0">
            <div class="hidden lg:flex justify-around bg-[url('/images/fond_grain.png')] space-x-12">
                <div class="flex items-center py-5 px-2">
                    <p class="font-yeseva text-5xl mr-96 text-white">TiKTaK..</p>
                </div>

                <div class=" hidden text-white lg:flex items-center space-x-6">
                    <router-link class=" no-underline" to="/">
                        <code class="font-inter hover:border-b-default border-b-white ">Nouveauté</code>
                    </router-link>
                    <router-link class="text-white no-underline" to="/connexion">
                        <code class="font-inter hover:border-b-default border-b-white">Personnalisation</code>
                    </router-link>
                    <router-link class="text-white  no-underline" to="/liste">
                        <code class="font-inter hover:border-b-default border-b-white">Vos montres</code>
                    </router-link>
                    <router-link class="text-white  no-underline" to="/liste-fetch">
                        <code class="font-inter hover:border-b-default border-b-white">Promotions</code>
                    </router-link>
                    <router-link class="text-white no-underline" to="/edit/new">
                        <code><img class="hover:border-b-default border-b-white" src="public/images/user.svg"/></code>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>