<script  setup>
defineProps({
    labeltext :{
        type:String,
        default:"Label sin texto"
    },
    outerblockclass : {
        type:String,
        default:"mb-4"
    },
    labelclass:{
        type:String,
        default:"block mb-2 font-bold text-gray-700"
    },
})     
</script>
<template>
    <div :class="outerblockclass">
        <label :class="labelclass">{{ labeltext }}</label>
        <slot/>
        <slot name="error"></slot>
    </div>
</template>