<script setup lang="ts">
import LoginLogoutVue from '@/components/LoginLogout.vue';
import headerVue from '@/components/header.vue';
import { supabase, user } from '../supabase';
</script>

<template>
    <div>
        <div>
            <headerVue></headerVue>
            <LoginLogoutVue></LoginLogoutVue>
        </div>
    </div>
</template>