const stuff = Vue.createApp({
    data(){
        return {
            age: 23,
            isFlashing: false
        }
    },
methods: {
    toggleFlash(){
        this.isFlashing = !this.isFlashing
    }
}
})


stuff.mount('#app')
