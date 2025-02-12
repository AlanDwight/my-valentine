paddingValue = 3;
count = 0; 
const clickFunct = () => { 
    paddingValue += 1.5;
    count++;
    if(count == 1){ 
        document.querySelector('.message').innerHTML = "Why, I know you love me";
        document.querySelector('.no-btn').innerHTML = "Nope!";
    }else if(count== 2){ 
        document.querySelector('.message').innerHTML = "Please baby, say yes";
        document.querySelector('.no-btn').innerHTML = "Nah!!";
    }else if(count == 3){ 
        document.querySelector('.message').innerHTML = "Pretty pleaseeeeeeeeeeeeeee";
        document.querySelector('.no-btn').innerHTML = "Ewww!!";
    }else if(count == 4){ 
        document.querySelector('.yes-btn').innerHTML = "Say, Yes please, I'm begging you";
        document.querySelector('.no-btn').innerHTML = "Hmmmm NO!";
    }else if(count >= 5){ 
        document.querySelector('.yes-btn').innerHTML = "Are you seriously gonna say 'No' forever?!! Please!!!";
    };
    console.log(paddingValue);
    document.querySelector('.yes-btn').style.padding = `${paddingValue}rem`;
    // document.querySelector('.holder').innerHTML = "hello this is me, holder";
    document.querySelector('.heartholder').innerHTML = `<dotlottie-player src="https://lottie.host/4db9d7f2-9039-4860-abd5-7c354ecc99a6/UF4UC1fXlN.lottie" background="transparent" speed="1" style="width: 150px; height: 150px" loop autoplay></dotlottie-player>`;

}

console.log('hello');

const yesFunct = ()=>{
    // document.querySelector('.yes-btn').style.padding = `3rem`;
    document.querySelector('.container').innerHTML = `<p class='yes-reply'>Yayyyyyyyy!! Koko love you sooooo sooo muchhhh! Shin Shin!</p>`;
    const ele = document.createElement('div');
    ele.className = 'yes-holder';
    document.querySelector('.container').appendChild(ele);
    document.querySelector('.yes-holder').innerHTML = '<img class="bubuAndDudu" src="/img/83e36d1b26dab6e03bb578e183b6a453.jpg" alt="">';

    document.querySelector('.container').insertBefore(document.querySelector('.yes-holder'),document.querySelector('.yes-reply'));


    console.log('hello');
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