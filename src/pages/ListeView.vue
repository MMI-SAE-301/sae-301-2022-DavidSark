<script setup lang="ts">
import montreSvg from "@/components/montreSvg.vue";
import { supabase } from "@/supabase";


const props = defineProps<{
    max?: number;
}>();
const { data: montre, error } = await supabase
    .from("montre")
    .select("*")
    .limit(props.max ?? 100);
if (error) {
    console.log("n'a pas pu récupérer les montres", { error });
}
</script>
<template>
    <section>
        <h1 class="text-2xl text-white text-center">Si elle n'est pas commandée, vous pouvez la modifier.</h1>

        <ul>
            <li v-for="x in montre" :key="x.id">
                <router-link :to="{ name: 'montre-edit-id', params: { id: x.id_montre } }">
                    <montreSvg class="w-64" v-bind="x" />
                </router-link>
            </li>
        </ul>


        <!-- <div class=" flex flex-col lg:flex-row lg:justify-evenly justify-center items-center">
            <div class="w-64 " v-for="x in exemple0" :key="x.bracelet">
                <RouterLink :to="{
                    name: 'montre-exemple-data',
                    params: { data: JSON.stringify(x) },
                }"></RouterLink>
                <montreSvg class="w-64" v-bind="x" />
            </div>
        </div> -->

    </section>
</template>