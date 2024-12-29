<script setup>
defineProps({
    labelclass:{
        type:String,
        default:"w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
    },
})
</script>

<template>
    <div>
        <button :class="labelclass" type="submit"> <slot/> </button>
    </div>
</template>