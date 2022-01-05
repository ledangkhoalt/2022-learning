const someElement = document.querySelector("body") as HTMLBodyElement;

console.log(someElement.ariaValueMax);

someElement.addEventListener('click', (event)=>{
    const target = event.target as HTMLBodyElement;
    console.log(event, target.innerHTML);
});