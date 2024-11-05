<template>
    <div :class="['shadow-xl shadow-neutral-lightGray p-10 rounded-lg flex flex-col gap-6', cardThemeCard, renderClass]">
        <div class="grid grid-cols-[auto_auto] grid-rows-2 gap-x-4 w-fit font-medium">
            <img alt="" :src="'./assets/images/' + avator" :class="['row-span-2 rounded-full border-2 w-[28px] self-center', cardThemeAvator]">
            <p class="self-end">{{ name }}</p>
            <p class="self-start opacity-50 text-[calc(11rem/13)]">{{ status }}</p>
        </div>
        <div class="flex flex-col gap-8">
            <p class="font-semibold text-[calc(20rem/13)]">{{ introduction }}</p>
            <p class="font-medium opacity-70 leading-[calc(20rem/13)]">{{ quote }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        status: String,
        introduction: String,
        quote: String,
        theme: String,
        avator: String,
        renderClass: String
    },
    inject: ['cardThemes'],
    computed: {
        cardTheme() {
            return this.cardThemes[this.theme]
        },
        cardThemeCard() {
            return this.cardTheme.card
        },
        cardThemeAvator() {
            return this.cardTheme.avator
        }
    }

}
</script>