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
    name: 'HighlightsList',
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
              title: 'Vue - Business Contact Book',
              imgSrc: '/images/vue-cb-homepage.png',
              tags: ['Vue.js', 'Vue-Router', 'Local storage'],
              description: 'A creation of a user-friendly web app for streamlined network management and contact organization. Featuring a seamless dark mode, it ensures an optimal user experience. Data efficiency is prioritized through Local Storage. Expertly designed with Adobe XD, powered by Vue, SCSS, Bootstrap, and Vite, it offers a responsive, empowering solution.',
              ariaLabel: 'Vue - Business Contact Book',
              link: '/portfolio/contactBook.html'
            },
            {
              title: 'React - Weather in 7 Days',
              imgSrc: '/images/weather-light.png',
              tags: ['React', 'APIs', 'Chart.js', 'Data Visualization', 'Light / Dark Themes'],
              description: 'A versatile weather forecast web app, enabling users to plan trips and outfits with a 7-day outlook. The app offers seamless mode switching (light/dark). Integrated Chart.js for intuitive data visualization. Designed UI with Adobe XD and developed using React, SCSS, Bootstrap, and Chart.js. Employed location and weather APIs for data retrieval.',
              ariaLabel: 'React - Weather in 7 Days',
              link: '/portfolio/weatherIn7Days.html'
            },
            {
              title: 'Redesigned Astronomy Picture of the Day (APOD)',
              imgSrc: '/images/apod-home.png',
              tags: ['Vanilla JS', 'NASA APOD API', 'Local Storage'],
              description: 'A revamped NASA APOD web app for an enriched user experience. Integrated NASA\'s APOD API, featuring a specialized dark mode for an immersive astronomy experience. Built with Javascript, SCSS, and Bootstrap for seamless functionality and aesthetics.',
              ariaLabel: 'Astronomy Picture of the Day (APOD)',
              link: '/portfolio/apod.html'
            }
          ],
          'zh-tw': [
            {
              title: 'Vue - 職員聯絡簿',
              imgSrc: '/images/vue-cb-homepage.png',
              tags: ['Vue.js', 'Vue-Router', 'Local storage'],
              description: '打造一個員工資料友善管理的網頁應用程式。透過Local Storage存取資料，完成資料的留存、搜尋、更改、刪除的功能。使用 Adobe XD 精心設計，以Vue、SCSS、Bootstrap 和 Vite開發完成。',
              ariaLabel: 'Vue - Business Contact Book',
              link: '/zh-tw/portfolio/contactBook.html'
            },
            {
              title: 'React - 7天天氣預報',
              imgSrc: '/images/weather-light.png',
              tags: ['React', 'APIs', 'Chart.js', '資料視覺化', '明暗主題切換'],
              description: '一個多功能的天氣預報網頁應用程式，讓使用者能夠預先安排未來7天的生活計畫和搭配服裝。應用程式提供明亮和暗色的主題切換，提供使用者在不同光線的情況下有更舒適的體驗。整合了 Chart.js 以實現直觀的資料視覺化。採用位置和天氣 API 進行資料擷取，使用 Adobe XD 設計 UI，和使用 React、SCSS、Bootstrap 和 Chart.js 開發完成。',
              ariaLabel: 'React - Weather in 7 Days',
              link: '/zh-tw/portfolio/weatherIn7Days.html'
            },
            {
              title: '重新設計的每日天文圖片（APOD）',
              imgSrc: '/images/apod-home.png',
              tags: ['Vanilla JS', 'NASA APOD API', 'Local Storage'],
              description: '對 NASA APOD 網頁應用程式進行設計改版和開發，提供豐富的使用者體驗。整合 NASA 的 APOD API 和所有網頁資訊與功能，以暗色主題進行設計，提供身歷其境的天文體驗。使用 HTML、SCSS、Javascript 和 Bootstrap 構建，完成無JavaScript框架的網頁應用程式開發。',
              ariaLabel: 'Astronomy Picture of the Day (APOD)',
              link: '/zh-tw/portfolio/apod.html'
            }
          ]
        }
      }
    }
  }
</script>