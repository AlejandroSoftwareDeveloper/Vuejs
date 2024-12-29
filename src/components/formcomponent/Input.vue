<script setup>
defineProps({
    labeltext:{
        type:String,
        default:"Nombre"
    },
    type:{
        type:String,
        default:"text"
    },
    id:{
        type:String,
        default:"name"
    },
    value:{
        type:String,
        default:""
    }
});

</script>
<template>
<div class="mb-4">
    <label class="block mb-2 font-bold text-gray-700">{{ labeltext }}</label>
    <input
    :type="type"
    :id="id"
    :name="id"
    class="w-full px-3 py-2 mb-2 border rounded "
    placeholder="Ejemplo: Desarrollador frontend"
    required
    />
    <slot />
</div>

</template>