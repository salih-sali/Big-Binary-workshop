let box = document.querySelectorAll(".smallbox")
images = {
    0: "bob-bobtheminion.gif",
    1: "minion2.gif",
    2:"VwNj.gif",
    3:"what-minions.gif"
}

let randarr=[0,2,1,3,2,1,3,0,0,2,1,2,3,3,1,0]
randarr=shuffleArray(randarr)
let visited=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
console.log(box)
let a=-1,s=0,q=0
let score=0;
let choices=[]
let emotion = document.querySelector('p');


for (let element of box) {

    element.addEventListener('click', function showImage() {
       
      
          const id=element.id
          console.log(id)
          if(visited[id-1]===0){
          var myimg = element.getElementsByTagName('img')[0];
          console.log(randarr[id - 1] )
          myimg.src=images[randarr[id - 1]]
          visited[id-1]=1
          q++
          console.log(visited)
          console.log(" Q = "+q)
            choices.push(this.id)
            if(choices.length>=2)
             choices=matchchoices(choices);
            //  setTimeout(fn1,3000)
          }

          if(q===16){
     setTimeout(won,500)
    
    }
}
    )
}

function won(){
    alert("you won with score "+score+ ".....")
    for(let element of box)
    {
        var myimg = element.getElementsByTagName('img')[0];
        myimg.src="./celebrate2.gif"

    }
}
let reset =document.getElementById('reset')
reset.addEventListener('click',resetfn)

function resetfn(){
   for(let element of box)
    {
        var myimg = element.getElementsByTagName('img')[0];
        myimg.src="./qnbox.gif"

    }
   console.log("done")
   a=-1
   s=0
   q=0
    score=0;
   choices=[]
   randarr=shuffleArray(randarr)
   visited=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}



function matchchoices(choices){

    console.log("cc"+choices)
    if(images[randarr[choices[0]-1]]===images[randarr[choices[1]-1]])
    {
    console.log("Match")
    score++;
   
    emotion.innerText = score;
}
    else{
        visited[choices[0]-1]=0
        visited[choices[1]-1]=0
        q=q-2
        score--;
        if (score<=0)
            score = 0;
        emotion.innerText = score;
        console.log(" no match "+choices)
        console.log("call........")
        //call(choices);
        setTimeout(resetTwoBox,900,choices)
        
    }

    choices=[]
    return choices;
}


function resetTwoBox(temp)
{
    console.log("reseting...."+ temp)
    var myimg= document.getElementById(temp[0]).getElementsByTagName('img')[0];
    myimg.src="qnbox.gif"
     myimg= document.getElementById(temp[1]).getElementsByTagName('img')[0];
    myimg.src="qnbox.gif"
}


  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1));         
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }


let know =document.getElementById('know')
know.addEventListener('click',knowfn)

function knowfn(){
    alert(" Rules\n 1) Their are 4 different images\n 2) you need to find a pair of 2 similar images to earn 1 score\n 3) if you fail in finding a pair (that is you picked 2 different images)\n    you loose 1 score\n 4) At the end when you find all the pair, you can see the score you\n     earned\n 5) The score will be 8 for the best move \n  ~~~~~~ GOOD LUCK ~~~~~~")
    
}