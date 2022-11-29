let box = document.querySelectorAll(".smallbox")
images = {
    0: "https://i.pinimg.com/originals/2d/a5/cc/2da5cccdaa10e142846390f3851feb46.gif",
    1: "https://media.tenor.com/gqirMS2_4xgAAAAM/bob-bobtheminion.gif",
    2:"http://31.media.tumblr.com/76ac55cf69d34dcbd045b1571847ae8d/tumblr_ncfkhf1eyl1qzdfclo1_400.gif",
    3:"https://i.gifer.com/embedded/download/VwNj.gif"
}

console.log(box)
for (let element of box) {
    element.addEventListener('click', function showImage() {
        if (element.children.length ===0) {
            const rand = Math.floor(Math.random() * 10)
            const newChild = document.createElement('img')
            newChild.src = images[rand % 4]
            element.appendChild(newChild)
        }
        
    })
}
let reset =document.getElementById('reset')
reset.addEventListener('click',fn)

function fn(){
   for(let element of box){
    if(element.children.length===1)
       element.children[0].remove()
   }
}