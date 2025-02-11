paddingValue = 3;
count = 0; 
const clickFunct = () => { 
    paddingValue += 1.5;
    count++;
    if(count == 1){ 
        document.querySelector('.message').innerHTML = "Why, I know you love me";
    }else if(count== 2){ 
        document.querySelector('.message').innerHTML = "Please baby, say yes";
    }else if(count == 3){ 
        document.querySelector('.message').innerHTML = "Pretty pleaseeeeeeeeeeeeeee";
    }else if(count >= 4){ 
        document.querySelector('.yes-btn').innerHTML = "Say, Yes please, I'm begging you";
    };
    console.log(paddingValue);
    document.querySelector('.yes-btn').style.padding = `${paddingValue}rem`;
    // document.querySelector('.holder').innerHTML = "hello this is me, holder";
    document.querySelector('.heartholder').innerHTML = `<dotlottie-player src="https://lottie.host/4db9d7f2-9039-4860-abd5-7c354ecc99a6/UF4UC1fXlN.lottie" background="transparent" speed="1" style="width: 150px; height: 150px" loop autoplay></dotlottie-player>`;

}

console.log('hello');

const yesFunct = ()=>{
    // document.querySelector('.yes-btn').style.padding = `3rem`;
    document.querySelector('.container').innerHTML = `<p class='yes-reply'>Yayyyyyyyy!! I love you sooooo sooo muchhhh</p>`;
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }
}

const createHeart = () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }