import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import cards from './assets/cards.yaml'
import cardThemes from './assets/cardThemes.yaml'

const app=createApp(App)
app.provide('cards',cards)
app.provide('cardThemes',cardThemes)
app.mount('#app')
