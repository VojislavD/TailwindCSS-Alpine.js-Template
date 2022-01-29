// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        buttons: resolve(__dirname, './pages/buttons.html'),
        checkbox: resolve(__dirname, './pages/formElements/checkbox.html'),
        input: resolve(__dirname, './pages/formElements/input.html'),
        radio: resolve(__dirname, './pages/formElements/radio.html'),
        select: resolve(__dirname, './pages/formElements/select.html'),
        switch: resolve(__dirname, './pages/formElements/switch.html'),
        textarea: resolve(__dirname, './pages/formElements/textarea.html'),
        bar_charts: resolve(__dirname, './pages/charts/bar_charts.html'),
        line_charts: resolve(__dirname, './pages/charts/line_charts.html'),
        other_charts: resolve(__dirname, './pages/charts/other_charts.html'),
        formLayouts: resolve(__dirname, './pages/formLayouts.html'),
        tables: resolve(__dirname, './pages/tables.html'),
        infoModals: resolve(__dirname, './pages/modals/info.html'),
        confirmationModals: resolve(__dirname, './pages/modals/confirmation.html'),
        authenticationModals: resolve(__dirname, './pages/modals/authentication.html'),
        maps: resolve(__dirname, './pages/maps.html'),
        cards: resolve(__dirname, './pages/cards.html'),
        tabs: resolve(__dirname, './pages/tabs.html'),
        accordions: resolve(__dirname, './pages/accordions.html'),
        messages: resolve(__dirname, './pages/messages.html'),
        calendar: resolve(__dirname, './pages/calendar.html'),
        inbox: resolve(__dirname, './pages/email/inbox.html')
      }
    }
  }
})