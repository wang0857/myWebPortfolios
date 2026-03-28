<template>
  <div class="grid-container">
    <FeaturesCard
      v-for="(feature, index) in features[lang]"
      :key="index"
      v-bind="feature"
    />
  </div>
</template>

<script>
  export default {
    name: 'FeaturesList',
    props: {
      lang: {
        type: String,
        default: 'en'
      }
    },
    data() {
      return {
        features: {
          en: [
            {
              title: 'Image Color Picker',
              imgSrc: '/images/image-color-picker.png',
              tags: ['React', 'React Redux', 'Redux Toolkit', 'React Error Boundary', 'MUI'],
              description: 'Extract color values from temporarily uploaded images and capture the perfect palette with ease.',
              ariaLabel: 'Image Color Picker',
              link: '/portfolio/frontEndMentor.html#todo-app'
            },
            {
              title: 'Todo app',
              imgSrc: '/images/todo-app-desktop-light.png',
              tags: ['React', 'React Redux', 'Redux Toolkit'],
              description: 'Enjoy a seamless, user-friendly app with adaptable layouts and interactive elements. Effortlessly manage todos, toggle light/dark modes, and even reorder items with a drag-and-drop feature for enhanced productivity.',
              ariaLabel: 'Todo app',
              link: '/portfolio/frontEndMentor.html#todo-app'
            },
            {
              title: 'Calculator app',
              imgSrc: '/images/calculator-app-theme-2-desktop.png',
              tags: ['React', 'SCSS mixins', 'Multiple themes'],
              description: 'A web app calculator with three switchable color themes, developed using React and SCSS mixins. The default theme adapts to users\'  browser settings, accommodating both light and dark modes.',
              ariaLabel: 'Calculator app',
              link: '/portfolio/frontEndMentor.html#calculator-app'
            },
            {
              title: 'Launch countdown timer',
              imgSrc: '/images/launch-countdown-timer-desktop.png',
              tags: ['Vanilla JS', 'CSS animations'],
              description: 'Experience a fun and immersive 14-day countdown timer with flipping card animations, enhancing the overall user experience.',
              ariaLabel: 'Launch countdown timer',
              link: '/portfolio/frontEndMentor.html#launch-countdown-timer'
            },
            {
              title: 'Expenses chart component',
              imgSrc: '/images/expenses-chart-desktop.png',
              tags: ['Vanilla JS', 'Chart.js', 'Data Visualization'],
              description: 'Utilize Chart.js to craft a customized bar chart component displaying weekly expenses and the monthly percentage increase or decrease. The chart features built-in animations provided by Chart.js.',
              ariaLabel: 'Expenses chart component',
              link: '/portfolio/frontEndMentor.html#expenses-chart-component'
            },
            {
              title: 'Tip calculator app',
              imgSrc: '/images/tip-calculator-desktop.png',
              tags: ['Vue.js', 'Calculator'],
              description: 'A small, useful app that calculates tips and the total amount per person when hanging out with friends.',
              ariaLabel: 'Tip calculator app',
              link: '/portfolio/frontEndMentor.html#tip-calculator-app'
            }
          ],
          'zh-tw': [
            {
              title: '圖片取色器',
              imgSrc: '/images/image-color-picker.png',
              tags: ['React', 'React Redux', 'Redux Toolkit', 'React Error Boundary', 'MUI'],
              description: '透過上傳暫存圖片來獲取色彩參數，輕鬆擷取您心儀的色彩。',
              ariaLabel: 'Image Color Picker',
              link: '/zh-tw/portfolio/frontEndMentor.html#待辦事項應用程式'
            },
            {
              title: '待辦事項應用程式',
              imgSrc: '/images/todo-app-desktop-light.png',
              tags: ['React', 'React Redux', 'Redux Toolkit'],
              description: '體驗一款無縫、友善使用者的應用程式，具有響應佈局和互動元素。輕鬆管理待辦事項，切換淺色/深色模式，甚至使用拖放功能重新排序項目，提升工作效率。',
              ariaLabel: 'Todo app',
              link: '/zh-tw/portfolio/frontEndMentor.html#待辦事項應用程式'
            },
            {
              title: '計算機應用程式',
              imgSrc: '/images/calculator-app-theme-2-desktop.png',
              tags: ['React', 'SCSS mixins', '多種主題色切換'],
              description: '使用 React 和 SCSS mixins 開發，可切換3種主題色的計算機網頁應用程式。預設主題會根據使用者瀏覽器的設定（淺色或深色）呈現初始主題色。',
              ariaLabel: 'Calculator app',
              link: '/zh-tw/portfolio/frontEndMentor.html#計算機應用程式'
            },
            {
              title: '啟動倒數計時器',
              imgSrc: '/images/launch-countdown-timer-desktop.png',
              tags: ['Vanilla JS', 'CSS animations'],
              description: '體驗一款有趣且身臨其境的14天倒數計時器，搭配翻轉卡片動畫，提升整體使用者體驗。',
              ariaLabel: 'Launch countdown timer',
              link: '/zh-tw/portfolio/frontEndMentor.html#啟動倒數計時器'
            },
            {
              title: '開支圖表元件',
              imgSrc: '/images/expenses-chart-desktop.png',
              tags: ['Vanilla JS', 'Chart.js', '資料視覺化'],
              description: '使用 Chart.js 製作一個定制的長條圖元件，顯示每週的開支和每月百分比增減。該圖表使用 Chart.js 提供的內建動畫效果。',
              ariaLabel: 'Expenses chart component',
              link: '/zh-tw/portfolio/frontEndMentor.html#開支圖表元件'
            },
            {
              title: '小費計算器應用程式',
              imgSrc: '/images/tip-calculator-desktop.png',
              tags: ['Vue.js', '計算機'],
              description: '一個小而實用的應用程式，當和朋友一起出去時，可以計算小費和每人的總金額。',
              ariaLabel: 'Tip calculator app',
              link: '/zh-tw/portfolio/frontEndMentor.html#小費計算器應用程式'
            }
          ]
        }
      }
    }
  }
</script>