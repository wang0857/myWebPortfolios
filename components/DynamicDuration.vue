<template>
  <span>{{ duration }}</span>
</template>

<script>
export default {
  name: 'DynamicDuration',
  props: {
    from: {
      type: String,
      required: true // format: 'YYYY-MM'
    },
    to: {
      type: String,
      default: null // format: 'YYYY-MM', if null uses current date
    },
    lang: {
      type: String,
      default: 'en'
    }
  },
  data() {
    return {
      labels: {
        en: { year: 'yr', years: 'yrs', month: 'mo', months: 'mos' },
        'zh-tw': { year: '年', years: '年', month: '個月', months: '個月' }
      }
    }
  },
  computed: {
    duration() {
      const start = new Date(this.from)
      const end = this.to ? new Date(this.to) : new Date()

      let years = end.getFullYear() - start.getFullYear()
      let months = end.getMonth() - start.getMonth() + 1

      if (months < 0) {
        years--
        months += 12
      }

      const l = this.labels[this.lang] || this.labels['en']

      const yearStr = years > 0 ? `${years} ${years > 1 ? l.years : l.year}` : ''
      const monthStr = months > 0 ? `${months} ${months > 1 ? l.months : l.month}` : ''

      return [yearStr, monthStr].filter(Boolean).join(' ')
    }
  }
}
</script>