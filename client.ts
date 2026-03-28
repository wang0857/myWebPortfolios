import { defineClientConfig } from '@vuepress/client'
import FeaturesList from './components/FeaturesList.vue'
import FeaturesCard from './components/FeaturesCard.vue'
import HighlightsList from './components/HighlightsList.vue'
import Footer from './components/Footer.vue'
import DynamicDuration from './components/DynamicDuration.vue'
import MainLayout from './layouts/MainLayout.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('FeaturesList', FeaturesList)
    app.component('FeaturesCard', FeaturesCard)
    app.component('HighlightsList', HighlightsList)
    app.component('Footer', Footer),
    app.component('DynamicDuration', DynamicDuration),
    app.component('MainLayout', MainLayout)
  },
  rootComponents: [ MainLayout ],
})