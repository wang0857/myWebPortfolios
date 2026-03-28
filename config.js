import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { copyrightPlugin } from '@vuepress/plugin-copyright'

export default defineUserConfig({
    bundler: viteBundler(),
    plugins: [
        copyrightPlugin({
            author: 'Ruo-Fang Wang',
            global: true,
            triggerLength: 50,
        }),
    ],
    theme: defaultTheme({
        // default theme config
        logo: '/images/otter-solid-dark.svg',
        logoDark: '/images/otter-solid-white.svg',
        locales: {
            '/': {
                selectLanguageText: 'Languages',
                selectLanguageName: 'English',
                navbar: [
                    {
                        text: 'Home',
                        link: '/',
                    },
                    {
                      text: 'About Me',
                      link: '/about.md',
                    },
                    {
                      text: 'My Web Portfolio',
                      link: '/portfolio',
                      children: [
                          '/portfolio/imageColorPicker.md',
                          '/portfolio/weatherIn7Days.md',
                          '/portfolio/frontEndMentor.md',
                          '/portfolio/contactBook.md',
                          '/portfolio/notifications.md',
                          '/portfolio/scrambleWords.md',
                          '/portfolio/apod.md'
                      ]
                    },
                    {
                      text: 'Contact Me',
                      link: '/contact.md',
                    },
                ],
                sidebar: {
                    '/': [
                        {
                            children: [
                                '/about.md',
                                '/portfolio/',
                                '/contact.md'
                            ]
                        }
                    ],
                    '/portfolio/': [
                        {
                            children: [
                                '/portfolio/',
                                '/portfolio/imageColorPicker.md',
                                '/portfolio/weatherIn7Days.md',
                                '/portfolio/frontEndMentor.md',
                                '/portfolio/contactBook.md',
                                '/portfolio/notifications.md',
                                '/portfolio/scrambleWords.md',
                                '/portfolio/apod.md',
                                '/contact.md'
                            ]
                        }
                    ]
                }
            },
            '/zh-tw/': {
                selectLanguageText: '選擇語言',
                selectLanguageName: '繁體中文',
                navbar: [
                    {
                        text: '首頁',
                        link: '/zh-tw/',
                    },
                    {
                      text: '關於我',
                      link: '/zh-tw/about.md',
                    },
                    {
                      text: '我的網頁作品集',
                      link: '/zh-tw/portfolio',
                      children: [
                          '/zh-tw/portfolio/imageColorPicker.md',
                          '/zh-tw/portfolio/weatherIn7Days.md',
                          '/zh-tw/portfolio/frontEndMentor.md',
                          '/zh-tw/portfolio/contactBook.md',
                          '/zh-tw/portfolio/notifications.md',
                          '/zh-tw/portfolio/scrambleWords.md',
                          '/zh-tw/portfolio/apod.md'
                      ]
                    },
                    {
                      text: '聯絡我',
                      link: '/zh-tw/contact.md',
                    },
                ],
                sidebar: {
                    '/zh-tw': [
                        {
                            children: [
                                '/zh-tw/about.md',
                                '/zh-tw/portfolio/',
                                '/zh-tw/contact.md'
                            ]
                        }
                    ],
                    '/zh-tw/portfolio/': [
                        {
                            children: [
                                '/zh-tw/portfolio/',
                                '/zh-tw/portfolio/imageColorPicker.md',
                                '/zh-tw/portfolio/weatherIn7Days.md',
                                '/zh-tw/portfolio/frontEndMentor.md',
                                '/zh-tw/portfolio/contactBook.md',
                                '/zh-tw/portfolio/notifications.md',
                                '/zh-tw/portfolio/scrambleWords.md',
                                '/zh-tw/portfolio/apod.md',
                                '/zh-tw/contact.md'
                            ]
                        }
                    ]
                }
            }
        },
    }),
    locales: {
        '/': {
            lang: 'en-US',
            title: "Ruo-Fang's Web Portfolio",
            description: 'Use VuePress to generate a static site for my web portfolio.'
        },
        '/zh-tw/': {
            lang: 'zh-TW',
            title: "Karen網頁作品集",
            description: '用VuePress製做我的網頁作品集'
        }
    },
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }]
    ],
    base: '/myWebPortfolios/',
})
