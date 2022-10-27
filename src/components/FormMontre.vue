<script setup lang="ts">
import { ref } from "vue";
import { supabase, user } from "@/supabase";
import { useRouter } from "vue-router";
import MontreVue from '@/components/montreSvg.vue';
import { type montreParams } from "@/types-svg";
import FormKitListColors from "@/components/FormKitListColors.vue"
import { materiaux } from "@/types-svg"

const router = useRouter();

const montre = ref<montreParams>(props.data ?? {});

const props = defineProps(["id"]);
if (props.id) {
    let { data, error } = await supabase
        .from("montre")
        .select("*")
        .eq("id_montre", props.id);
    if (error) console.log("n'a pas pu charger le table montre :", error);
    else montre.value = (data as any[])[0];
}

async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("montre").upsert(dataForm);
    if (error || !data) {
        node.setErrors([error?.message]);
    }
    else {
        node.setErrors([]);
        router.push('/');
    }
};

</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <div class="">
            <MontreVue class="w-52" v-bind="montre" id="profil" />
        </div>
        <div class="">
            <FormKit type="form" v-model="montre" @submit="upsertMontre" submit-label="Commander" :submit-attrs="{
                classes: {
                    input: `text-black bg-jaune-0 px-5 py-1 my-4 text-xl 1440:text-2xl rounded-full bouton`,
                    label: `text-white`
                }
            }">
                <FormKitListColors name="bracelet" label="Sélectionnez un couleur pour le bracelet" />
                <FormKitListColors name="boitier" label="Sélectionnez un couleur pour le boitier" />
                <FormKitListColors name="ecran" label="Sélectionnez un couleur pour l'écran" />


                <!-- <FormKit name="id_materiaux" label="Materiau du boitier" type="radio" value="" :options="materiaux"
                    :sections-schema="{
                        inner: { $el: null },
                        decorator: { $el: null },
                    }" input-class="peer sr-only" options-class="my-3 flex gap-6" outer-class="my-10"
                    legend-class="font-inter text-white">

                    <template #label="context">
                        <img class="h-20 w-20 rounded border-tertiaire_fonce border-2 peer-checked:border-jaune-0 "
                            :src="context.option.image" :alt="context.option.label">
                        <span>{{ context.option.label }}</span>
                    </template>

                </FormKit> -->
                <p class="text-white text-xs">Une fois commander,<br /> la modification n'est plus possible</p>
            </FormKit>
        </div>
    </div>
</template>
