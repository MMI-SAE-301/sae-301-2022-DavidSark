<script setup lang="ts">
import { colors } from "@/types-svg";
defineProps<{
    name?: string;
    label?: string;
}>();
</script>

<template>

    <FormKit :name="name" :label="label" value='#FFFFFF' type="radio" :options="colors" :sections-schema="{
        inner: { $el: null },
        decorator: { $el: null },
    }" legend-class="text-white " input-class="peer sr-only" options-class="flex gap-1">
        <template #label="context">
            <div class="h-6 w-6 my-2  rounded-full border-2 peer-checked:border-jaune-0"
                :style="{ backgroundColor: context.option.value }">
            </div>
            <span class="sr-only">{{ context.option.label }}</span>
        </template>

    </FormKit>

</template>