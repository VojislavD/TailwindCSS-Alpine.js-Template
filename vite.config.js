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
      }
    }
  }
})