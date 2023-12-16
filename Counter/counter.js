
let cv = document.querySelector('#cv');
let d = document.querySelector('#d');
let r = document.querySelector('#r');
let i = document.querySelector('#i');

let inr = ()=>{
    cv.innerHTML = +(cv.innerHTML) + 1;
}
let dec = ()=>{
    cv.innerHTML = +(cv.innerHTML) - 1;
}
let res = ()=>{
    cv.innerHTML = 0;
}


i.onclick = inr;
d.onclick = dec;
r.addEventListener('click',res)



