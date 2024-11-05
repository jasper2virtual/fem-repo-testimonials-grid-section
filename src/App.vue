<template>
  <div class="flex flex-col min-h-screen min-w-[320px] bg-neutral-lightGrayishBlue p-4">
    <main class="grow grid place-content-center">
      <div class="container mx-auto flex flex-col gap-6
      tablet:grid tablet:grid-cols-[repeat(2,255px)] tablet:grid-rows-4
      desktop:grid desktop:grid-cols-[repeat(4,255px)] desktop:grid-rows-2
      ">
        <card v-for="card in cards" :key="card.id" :name="card.name" :status="card.status"
          :introduction="card.introduction" :quote="card.quote"
          :theme="card.theme" :avator="card.avator"
          :renderClass="['max-w-[327px] tablet:max-w-none',card.renderClass]"
          ></card>
      </div>
    </main>
    <footer>
      <attribution></attribution>
    </footer>
  </div>
</template>
<script>
import attribution from './components/Attribution.vue';
import card from './components/Card.vue';
export default {
  components: {
    attribution,
    card
  },
  inject: ['cards']
}
</script>