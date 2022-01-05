var someElement = document.querySelector("body");
console.log(someElement.ariaValueMax);
someElement.addEventListener('click', function (event) {
    var target = event.target;
    console.log(event, target.innerHTML);
});
