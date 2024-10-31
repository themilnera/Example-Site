let i = 0;

document.querySelector(".button").addEventListener("click", (e) => {
    i++;
    console.log(i);
    document.querySelector(".button-response").innerHTML =`<h3>${i}</h3>`;
    if(i > 10){
        document.querySelector(".other-response").innerHTML = `<h3>See, that's fun, isn't it?</h3>`
    }
    if(i > 20){
        document.querySelector(".other-response").innerHTML = `<h3>Don't get too carried away</h3>`
    }
    if(i > 30){
        document.querySelector(".other-response").innerHTML = `<h3>Wow thirty times, is that enough?</h3>`
    }
    if(i > 40){
        document.querySelector(".other-response").innerHTML = `<h3>There's 40...</h3>`
    }
    if(i > 50){
        document.querySelector(".other-response").innerHTML = `<h3>Fifty, how many times are you going to do this?</h3>`
    }
    if(i > 100){
        document.querySelector(".other-response").innerHTML = `<h3>Real dedication now, 100 times is... Kind of a lot?</h3>`
    }
    if(i > 200){
        document.querySelector(".other-response").innerHTML = `<h3>Do you just want to see what I'll say about this?</h3>`
    }
    if(i > 500){
        document.querySelector(".other-response").innerHTML = `<h3>At this point I'm just waiting until you feel like stopping</h3>`
    }
    if(i > 1000){
        document.querySelector(".other-response").innerHTML = `<h3>Ok, you've got a 1000 now, is that enough?</h3>`
    }
    if(i > 2000){
        document.querySelector(".other-response").innerHTML = `<h3>Please stop</h3>`
    }
    if(i > 5000){
        document.querySelector(".other-response").innerHTML = `<h3>I'm growing old watching you click the button</h3>`
    }
    if(i > 10000){
        document.querySelector(".other-response").innerHTML = `<h3>Dear god, get a job or something</h3>`
    }
    if(i > 20000){
        document.querySelector(".other-response").innerHTML = `<h3>Wow, you're still going? I fell asleep</h3>`
    }
    if(i > 100000){
        document.querySelector(".other-response").innerHTML = `<h3>I'm genuinely worried about you</h3>`
    }
});