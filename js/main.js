function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    const textSpan = document.querySelector('.textSpan');
    const buttonColor = document.querySelector('.buttonColor');
    circle.style.background = color;
    textSpan.style.color = color;
    buttonColor.style.background = color;
}

