<template>
    <div :class="['shadow-xl shadow-neutral-lightGray p-6 rounded-md',cardThemeCard]">
        <div class="grid grid-cols-2 grid-rows-2 w-fit">
            <img :src="'./assets/images/' + avator" :class="['row-span-2 rounded-full border-2',cardThemeAvator]">
            <p>{{ name }}</p>
            <p>{{ status }}</p>            
        </div>

        <p>{{ introduction }}</p>
        <p>{{ quote }}</p>

    </div>
</template>
<script>
export default{
    props: {
        name:String,
        status:String,
        introduction:String,
        quote:String,
        theme:String,
        avator:String
    },
    inject:['cardThemes'],
    computed: {
        cardTheme(){
            return this.cardThemes[this.theme]
        },
        cardThemeCard(){
            return this.cardTheme.card
        },
        cardThemeAvator(){
            return this.cardTheme.avator
        }
    }

}
</script>