<script setup>
defineProps({
    label:{
        type:String,
        default:"Lista de nombres de trabajos"
    },
    labelclass:{
        type:String,
        default:"block mb-2 font-bold text-gray-700",
    },
    inputtype:{
        type:String,
        default:"text",
    },
    inputname: {
        type:String,
        default:"name",
    },
    inputid: {
        type:String,
        default:"name",
    },
    inputclass: {
        type:String,
        default:"w-full px-3 py-2 mb-2 border rounded",
    },
    placeholder: {
        type:String,
        default:"Ejemplo: Desarrollador frontend",
    },
});

</script>
<template>
<div class="mb-4">
    <label class="block mb-2 font-bold text-gray-700">Lista de tipos de trabajos</label>
    <input
    type="text"
    id="name"
    name="name"
    class="w-full px-3 py-2 mb-2 border rounded "
    placeholder="Ejemplo: Desarrollador frontend"
    required
    />
</div>

</template>