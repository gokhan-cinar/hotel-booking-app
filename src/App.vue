<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>-->
   <div class="wrapper">
     <div class="language">
       <button class="language--link" @click="setLocale('en')">en</button>
       <button class="language--link" @click="setLocale('tr')">tr</button>
     </div>
     <router-view/>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      setLocale(locale) {
        import(`./locale/${locale}.json`).then(msg => {
          this.$i18n.setLocaleMessage(locale, msg)
          this.$i18n.locale = locale
        })
      }
    },
  }
</script>
