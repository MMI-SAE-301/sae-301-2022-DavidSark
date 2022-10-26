<script setup lang="ts">
import LoginLogoutVue from '@/components/LoginLogout.vue';
import headerVue from '@/components/header.vue';
</script>

<template>
    <div>
        <div>
            <headerVue></headerVue>
            <div class="text-white text-center text-xl">
                <p class="mx-5 lg:text-3xl ">Choississez un moyen de connexion </p>
            </div>
            <LoginLogoutVue></LoginLogoutVue>
        </div>
    </div>
</template>