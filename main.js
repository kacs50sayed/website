let myNeme = "مرحبا بكم في موقع انذار للمراقبة"
    ;
let index = 1;

function witeText() {

    document.querySelector("h1").textContent = myNeme.slice(0, index)

    index++

    if (index > myNeme.length) {
        index = 1;
    }

}
setInterval(function () {
    witeText();
}, 500);


//.select.Landig.page.Element
let landing = document.querySelector(".landing");


// Get Array of imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg",];


setInterval(() => {

    // Get Random Nember
    let randomNeumber = Math.floor(Math.random() * imgsArray.length);

    // Chane Background imgs Ur1 
    landing.style.backgroundImage = 'url("imgs/' + imgsArray[randomNeumber] + '")';

}, 7000);


