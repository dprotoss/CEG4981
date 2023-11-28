const stuff = Vue.createApp({
    data(){
        return {
            age: 23,
            isFlashing: false
        }
    },
methods: {
    async toggleFlash() {
        this.isFlashing = !this.isFlashing;
        const res = await helloRequest();
        const square = document.getElementById('squareThang');
        
        console.log("squareID:", square);
        console.log("toggle flash debug:", res);

        if (res === "Hello World!") {
            square.style.backgroundColor = "green";
            console.log("I made it inside the if statement!");
        }
    }
}
})


async function sendRequest(endpoint){
    try {
        const response = await fetch(`http://192.168.2.3${endpoint}`);
        const data = await response.text();
        return data; // This will be a Promise that resolves to 'data'
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

async function helloRequest() {
    try {
        const data = await sendRequest("/hello");
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function stopRequest() {
    try {
        const data = await sendRequest("/stop");
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function startRequest() {
    console.log("I EXIST");
    try {
        const data = await sendRequest("/start");
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}



stuff.mount('#app')
