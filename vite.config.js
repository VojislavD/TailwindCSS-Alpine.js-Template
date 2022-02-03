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
        inbox: resolve(__dirname, './pages/email/inbox.html'),
        viewMessage: resolve(__dirname, './pages/email/viewMessage.html'),
        newMessage: resolve(__dirname, './pages/email/newMessage.html'),
        invoices: resolve(__dirname, './pages/invoices.html'),
        basicSignIn: resolve(__dirname, './pages/authentication/basic/signIn.html'),
        basicSignUp: resolve(__dirname, './pages/authentication/basic/signUp.html'),
        basicForgotPassword: resolve(__dirname, './pages/authentication/basic/forgotPassword.html'),
        basicResetPassword: resolve(__dirname, './pages/authentication/basic/resetPassword.html'),
        basicEmailVerification: resolve(__dirname, './pages/authentication/basic/emailVerification.html'),
        illustrationSignIn: resolve(__dirname, './pages/authentication/illustration/signIn.html'),
        illustrationSignUp: resolve(__dirname, './pages/authentication/illustration/signUp.html'),
        illustrationForgotPassword: resolve(__dirname, './pages/authentication/illustration/forgotPassword.html'),
        illustrationResetPassword: resolve(__dirname, './pages/authentication/illustration/resetPassword.html'),
        illustrationEmailVerification: resolve(__dirname, './pages/authentication/illustration/emailVerification.html'),
        coverSignIn: resolve(__dirname, './pages/authentication/cover/signIn.html'),
        coverSignUp: resolve(__dirname, './pages/authentication/cover/signUp.html'),
        coverForgotPassword: resolve(__dirname, './pages/authentication/cover/forgotPassword.html'),
        coverResetPassword: resolve(__dirname, './pages/authentication/cover/resetPassword.html'),
        coverEmailVerification: resolve(__dirname, './pages/authentication/cover/emailVerification.html'),
        profile: resolve(__dirname, './pages/profile.html')
      }
    }
  }
})