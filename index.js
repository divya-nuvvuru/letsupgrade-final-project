let cards=[
    {
        image:"http://www.petsworld.in/blog/wp-content/uploads/2014/09/cat.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"http://www.petsworld.in/blog/wp-content/uploads/2014/09/cat.jpg",
        value:1,
        status:"closed"   
    
    },
    {
        image:"https://abreathofhope.org/wp-content/uploads/2016/05/impossibly-cute-puppy-8.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://abreathofhope.org/wp-content/uploads/2016/05/impossibly-cute-puppy-8.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/4b/e2/55/4be25577837e0c06e90caa5e1f20e01a.jpg",
        value:3,
        status:"closed"
    },
    {

        image:"https://i.pinimg.com/736x/4b/e2/55/4be25577837e0c06e90caa5e1f20e01a.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/05/60/34/056034020b1d4186ef0f09776bef74c8.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/05/60/34/056034020b1d4186ef0f09776bef74c8.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEOfWwuJiXwIWkUKSYjIw5CP9Pp1veJcsdycVxagHelq2KEFmgmZwz56SPH8rBDuTxZ48&usqp=CAU",
        value:5,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEOfWwuJiXwIWkUKSYjIw5CP9Pp1veJcsdycVxagHelq2KEFmgmZwz56SPH8rBDuTxZ48&usqp=CAU",
        value:5,
        status:"closed"
    },

]



//durnsten shuffling algorithm

let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}
let cardCopy=cards;

function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
            <div class="overlay ${card.status}" onclick="openCard(${index})">

             </div>
        </div>
        
        `;

    });

    document.getElementById('cards').innerHTML=cardsString;

}
displayCards(cards);



let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    //  console.log(cards);
    
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
      val2=cards[index].value;
      
      if(val1===val2){
          score++;
          document.getElementById('score').innerText=score;

          
          val1=null;
          val2=null;
          cardCount=1;
      }

      else{
            alert("GAME OVER");
            location.reload();
      }
      
    }
    displayCards(cards);
    

}
