<script  setup>
 defineProps({
    message:{
        type:String,
        default:""
    }
 })
</script>

<template>
    <span v-if="message" class="text-red-700 "> <i class="ml-1 mr-1 pi pi-exclamation-triangle"></i>{{ message }}</span>
</template>

