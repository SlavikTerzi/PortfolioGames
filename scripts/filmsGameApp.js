const images =[
    {
        id: 0,
        src: "https://i.pinimg.com/736x/5c/04/c1/5c04c1259bb6b62a033558c90f7f6fe0.jpg",
        answer: "Валл-и",
    },
    {
        id: 1,
        src: "https://i.pinimg.com/736x/a4/6b/04/a46b04c7354748d8a065269f6aff1303.jpg",
        answer: "Монстры на каникулах",
    },
    {
        id: 2,
        src: "https://i.pinimg.com/736x/95/fe/d9/95fed95dbe0426cf075aa0bb564da177.jpg",
        answer: "Лило и Стич",
    },
    {
        id: 3,
        src: "https://i.pinimg.com/736x/96/a4/4f/96a44f79c16ade0b75a7db25a5b3dfe9.jpg",
        answer: "Корпарация монстров",
    },
    {
        id: 4,
        src: "https://i.pinimg.com/736x/6f/2b/7f/6f2b7fe68ab9e631fc97d63494d688ce.jpg",
        answer: "Элементали",
    },
    {
        id: 5,
        src: "https://i.pinimg.com/736x/52/a0/fb/52a0fbf0bfd25dec6215f491829c8c65.jpg",
        answer: "Дамбо",
    },
    {
        id: 6,
        src: "https://i.pinimg.com/736x/1c/bb/8f/1cbb8f45429f9578bc961d142267a17e.jpg",
        answer: "Бемби",
    },
    {
        id: 7,
        src: "https://i.pinimg.com/736x/ae/35/59/ae3559f5a65e91bd5d07e84d5da3f253.jpg",
        answer: "Мумия 2",
    },
    {
        id: 8,
        src: "https://i.pinimg.com/736x/de/78/6c/de786c28436628effb606f34d55063d4.jpg",
        answer: "Гринч",
    },
    {
        id: 9,
        src: "https://i.pinimg.com/736x/55/58/8d/55588daaa19baa6f9ee7faddf0d87a91.jpg",
        answer: "Круэлла",
    },
    {
        id: 10,
        src: "https://i.pinimg.com/736x/b8/26/33/b82633fe4ec09e80dc6da45f08d86d03.jpg",
        answer: "Форсаж 1",
    },
    {
        id: 11,
        src: "https://i.pinimg.com/736x/1f/3f/ca/1f3fca1a681d319b6455b200d1439c22.jpg",
        answer: "Терминатор 2",
    },
    {
        id: 12,
        src: "https://i.pinimg.com/736x/13/6e/32/136e324958c20ad6d29bf3eff28a1f9a.jpg",
        answer: "Доктор Дулитл 2",
    },
    {
        id: 13,
        src: "https://i.pinimg.com/736x/20/a0/23/20a023a9c3098cb840fe03d4b415540f.jpg",
        answer: "Кто я?",
    },
    {
        id: 14,
        src: "https://i.pinimg.com/736x/6d/01/1c/6d011ce67ed84f3d92b37001761494ce.jpg",
        answer: "Кингсмен 2",
    },
    {
        id: 15,
        src: "https://i.pinimg.com/736x/67/29/0c/67290c626dedde101a502e56ef061f67.jpg",
        answer: "Полицейская академия",
    },
    {
        id: 16,
        src: "https://i.pinimg.com/736x/ab/6b/48/ab6b4839dc27a2a7aebb1ffc821cab80.jpg",
        answer: "Джуманджи",
    },
    {
        id: 17,
        src: "https://i.pinimg.com/736x/c2/7a/ba/c27aba4bd42d5c3afa9c0e008f56abda.jpg",
        answer: "Шерлок Холмс",
    },
    {
        id: 18,
        src: "https://i.pinimg.com/736x/1e/47/a8/1e47a824b93c8194b5a8927d887e073f.jpg",
        answer: "Ральф",
    },
    {
        id: 19,
        src: "https://i.pinimg.com/736x/29/80/1b/29801b32a3bb5326b10ed0670b587aaf.jpg",
        answer: "Пятый эллемент",
    },
    {
        id: 20,
        src: "https://i.pinimg.com/736x/6b/03/fd/6b03fd9bc77ca8248618f380e0f49bd7.jpg",
        answer: "Рая",
    },
    {
        id: 21,
        src: "https://i.pinimg.com/736x/96/61/fd/9661fdcd416c3b52ce8e64518c3af686.jpg",
        answer: "Чарли и шоколадная фабрика",
    },
    {
        id: 22,
        src: "https://i.pinimg.com/736x/68/12/bd/6812bdc7fb7d313570b38536d52b1b78.jpg",
        answer: "Волк с Уолл Стрит",
    },
    {
        id: 23,
        src: "https://i.pinimg.com/736x/40/07/f8/4007f8147b6e27824a85ca58772d8fe6.jpg",
        answer: "Фантастические твари",
    },
    {
        id: 24,
        src: "https://i.pinimg.com/736x/bc/30/72/bc30727eb66aa162cc88f5bf595ac878.jpg",
        answer: "Назад в будущее",
    },
    {
        id: 25,
        src: "https://i.pinimg.com/736x/30/02/0f/30020f234a3b3de77ca736e102d2eeda.jpg",
        answer: "Карате пацан",
    },
    {
        id: 26,
        src: "https://i.pinimg.com/736x/16/6b/72/166b725f7f07b7e41edeb16d5f68a2c2.jpg",
        answer: "Охотники за приведениями",
    },
    {
        id: 27,
        src: "https://i.pinimg.com/736x/27/8b/99/278b9967c7bc51c2c39f5ab8dc490c8e.jpg",
        answer: "Тупой и еще тупее",
    },

];




for(let i=0;i<images.length;i++){
    images[i].isBeen = false;
}



const players = [
    {
        id:0,
        name: "Player 5",
        points: 0,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWLc6xFckdrEejCbn7PFdZyWJdVWBlmUg8A&s",
        
    },
    {
        id:1,
        name: "Player 4",
        points: 0,
        img: "https://rode.land/images/stories/korona/korona-foto27.png",
    },
    {
        id:2,
        name: "Player 3",
        points: 0,
        img: "https://img.freepik.com/free-psd/black-isolated-car_23-2151852894.jpg?semt=ais_hybrid&w=740",
    },
    {
        id:3,
        name: "Player 2",
        points: 0,
        img: "https://cdn.pixabay.com/photo/2021/01/11/13/03/big-chungus-5908358_960_720.png",
    },
    {
        id:3,
        name: "Player 1",
        points: 0,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCRsgPtlXLCLRVNJ_o7AY-3yAwwIAdpiPQA&s",
    },
];

const createPlayers = ()=>{
    
    const playersBlock = document.querySelector('.players');
    playersBlock.innerHTML ="";
    for(let i = 0;i<players.length;i++){


        playersBlock.insertAdjacentHTML('afterbegin',`
            <div class="player">
                <div class="deleatePlayerBtn" title="Видалити гравця">X</div>
                <img class="playerImg" src="${players[i].img}" alt="">
                <div class="playerText">
                    <h4 class="playerName">${players[i].name}</h4>
                    <h4 class="playerPoint">Points - <span class="playerPointsNumber">${players[i].points}</span> </h4>
                </div>
                <div class="playerButton hidden">
                    <button class="trueBtn">Вірно</button>
                    <button class="falseBtn">Не вірно</button>
                </div>
            </div>

        `);

        
    }
};

createPlayers();

let playerNumberwhoseAnswer = 0;
let canPlayerAnswer = true;
let canPlayerOpenTheSquare = true;


document.querySelectorAll('.deleatePlayerBtn').forEach((e,index) => e.addEventListener("click", deleatePlayerBtn=>{

    deleatePlayerBtn.target.parentNode.remove();
    whoseAnswer();

}));




let numberOfImage = Math.round(Math.random()* images.length-1);
images[numberOfImage].isBeen = "true"

document.querySelector(".filmImage").src = images[numberOfImage].src;
const containerBlock = document.querySelector('.container');
function madeBlocks(){


    if(!document.querySelector('.nextImage').classList.contains('hiddenNextImage')){
        document.querySelector('.nextImage').classList.add('hiddenNextImage');
    }
    
    containerBlock.insertAdjacentHTML('beforeend','<div class="block hidden" style="background-size: 200% 200%;left:'+0+'px;top:'+0+'px; " ><b class="blockText">'+0+'</b></div>' );
    const filmImage = document.querySelector('.filmImage');

    const widthImage = filmImage.offsetWidth;
    const heightImage = filmImage.offsetHeight;
  


    let randomColor = null;
    let numberBlock = 1;


    let count = 0;
    const amountBlock = 7;
    const sqrSizeW = widthImage/amountBlock;
    const sqrSizeH = (heightImage/ Math.round(amountBlock*(heightImage/widthImage)));

    



    for(let top= 0;top<heightImage;top=top+sqrSizeH){
        for(let left = 0;left<widthImage;left=left+sqrSizeW){
            randomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
            containerBlock.insertAdjacentHTML('beforeend','<div class="block" style="background-size: 200% 200%;left:'+left+'px;top:'+top+'px; " ><b class="blockText">'+numberBlock+'</b></div>' );
            numberBlock+=1;
            count++;
            if(count===amountBlock){
                left = widthImage;
                count=0;
            }
        }
        
        
    }

    const block = document.getElementsByClassName('block');
    


    for(let i =0;i<numberBlock;i++){
        block[i].style.width = sqrSizeW+"px";
        block[i].style.height = sqrSizeH+"px";
        let randomColorFirst = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        let randomColorSecond = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        randomColor = "linear-gradient(70deg, "+randomColorFirst+", "+randomColorSecond+")"; 
        block[i].style.background = randomColor;
        
    }
    
    document.querySelectorAll('.block').forEach((e,index) => e.addEventListener("click", function(e){

        if(canPlayerOpenTheSquare){
            this.remove();
            canPlayerOpenTheSquare = false;
        }
        


    }));
   
    
}
const block = document.getElementsByClassName('block');
madeBlocks();



document.querySelector('.nextImage').addEventListener("click",e=>{
    
    
    numberOfImage = Math.round(Math.random()* images.length-1);
   
    document.querySelector(".filmImage").src = images[numberOfImage].src;
    images[numberOfImage].isBeen = true;
    madeBlocks();
    canPlayerAnswer = true;
    
});


function whoseAnswer (){
    document.querySelectorAll('.player').forEach((player, index) => {
        if(index===playerNumberwhoseAnswer){
            player.style.background = "linear-gradient(30deg,rgba(217, 196, 9, 0.3) 47%, rgba(255, 81, 0, 0.3) 100%)";
            

            document.querySelectorAll('.playerButton').forEach((e,i) =>{
                if(index === i){
                    e.classList.remove('hidden');
                }else{
                    e.classList.add('hidden');
                }
            });

        }else{
            player.style.background="transparent";
        }
    });

    
}



function checkingTheAnswer (){

    document.querySelectorAll('.trueBtn').forEach((e,index) => e.addEventListener("click", btn=>{

        if(canPlayerAnswer){
            players[players.length-1 - index].points +=1;

            document.querySelectorAll('.playerPointsNumber').forEach((e,i)=>{
                if(index===i){
                    e.innerHTML = players[players.length-1 - index].points;
                }
            });

            
            
            
            whoseAnswer();

            while(block.length) {
                block[0].parentNode.removeChild(block[0]);
            }
            document.querySelector('.nextImage').classList.remove('hiddenNextImage');
            canPlayerAnswer = false;
            canPlayerOpenTheSquare = true;
        }


        
        
    }));

    document.querySelectorAll('.falseBtn').forEach((e,index) => e.addEventListener("click", e=>{
        if(canPlayerAnswer){
            playerNumberwhoseAnswer+=1;
            if(playerNumberwhoseAnswer>players.length-1){
                playerNumberwhoseAnswer = 0;
            }
            whoseAnswer();
            canPlayerOpenTheSquare = true;
        }
        
        
    }));
    
    
}
checkingTheAnswer();
whoseAnswer();
