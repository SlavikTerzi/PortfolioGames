let clicks = 0;
let players = [
    {
        id: 0,
        name: "Славик",
        points: 0 ,
        img:"https://w7.pngwing.com/pngs/235/163/png-transparent-ghost-drawing-halloween-ghost-pics-white-marine-mammal-fictional-character.png",

    },

    // {
    //     id: 1,
    //     name: "Кірілл",
    //     points: 0 ,
    //     img:"img/2.png",

    // },

];



const questions = [
    {
        id: 0,
        theme: "Дитячі Загадки",
        cost: 200,
        question: "Цвіте на обличчі та зростає від радості",
        answer: "Посмішка",
    },
    {
        id: 1,
        theme: "Дитячі Загадки",
        cost: 300,
        question: "Що можна тримати у лівій руці, але не можна у правій",
        answer:"Правий лікоть",
    },
    {
        id: 2,
        theme: "Дитячі Загадки",
        cost: 400,
        question: "Вдень мовчить, а вночі кричить' ",
        answer:"Сова",
    },
    {
        id: 3,
        theme: "Дитячі Загадки",
        cost: 500,
        question: "Де є міста, але немає будинків, є ріки, але немає води, є ліси, але немає дерев? ",
        answer:"Мапа",
    },
    {
        id: 4,
        theme: "Шерлок Домс",
        cost: 200,
        question: '<img src="https://images.glavred.info/2024_11/thumb_files/1200x0/1730560814-6060.jpg?r=254631" alt="" style="height:calc(var(--index)*15);">',
        answer:'<img src="https://images.glavred.info/2024_11/thumb_files/1200x0/1730560839-7588.jpg?r=713765" style="height:calc(var(--index)*15);">',
    },
    {
        id: 5,
        theme: "Шерлок Домс",
        cost: 300,
        question: '<img src="img/theme2_secondQuestion.png" alt="" style="height:calc(var(--index)*15);">',
        answer:'<img src="img/theme2_secondQuestion_answer.png" style="height:calc(var(--index)*15);">',
    },
    {
        id: 6,
        theme: "Шерлок Домс",
        cost: 400,
        question: 'Серійний вбивця викрадав людей і змушував їх приймати 1 з 2 таблеток: перша не приносила шкоди, а друга миттєво вбивала. Таблетку, що залишилася вбивця завжди приймав сам. Викрадений ковтав обрану таблетку, запивав водою і тут же помирав, а вбивці завжди діставалася нешкідлива таблетка. Чому вбивці ні разу не попалася таблетка з отрутою?',
        answer:'Обидві таблетки були абсолютно нешкідливим, а отрута була в склянці з водою, призначеній для жертви',
    },
    {
        id: 7,
        theme: "Шерлок Домс",
        cost: 500,
        question: 'У неділю вранці поліцію викликають у великий будинок, оскільки власника знайшли мертвим. Чоловік сказав, що спав, дворецький сказав, що прибирав машину, садівник сказав, що збирав овочі, покоївка сказала, що забирала пошту, а кухар сказала, що готувала сніданок. Хто вчинив злочин?',
        answer:'Покоївка — у неділю пошта не приходить',
    },
    {
        id: 8,
        theme: "Рок Килим",
        cost: 300,
        question: '<audio controls ><source src="audio/1.mp3" type="audio/mpeg" /></audio>',
        answer:'Adele - Skyfall',
    },
    {
        id: 9,
        theme: "Рок Килим",
        cost: 300,
        question: '<audio controls ><source src="audio/2.mp3" type="audio/mpeg" /></audio>',
        answer:'Imagine Dragons - Radioactive',
    },
    {
        id: 10,
        theme: "Рок Килим",
        cost: 300,
        question: '<audio controls ><source src="audio/3.mp3" type="audio/mpeg" /></audio>',
        answer:'Eminem - Lose Yourself (Cover by Our Last Night)',
    },
    {
        id: 11,
        theme: "Рок Килим",
        cost: 300,
        question: '<audio controls ><source src="audio/4.mp3" type="audio/mpeg" /></audio>',
        answer:'Måneskin - Beggin (Rock Cover by Our Last Night)',
    },
    {
        id: 12,
        theme: "Фільм у Аніме",
        cost: 200,
        question: '<img src="img/anime1.png"" height="300px">',
        answer:'<img src="https://static.hdrezka.ac/i/2021/3/6/v6113f7f005baab50d60m.jpeg" style="height:calc(var(--index)*15);">',
    },
    {
        id: 13,
        theme: "Фільм у Аніме",
        cost: 300,
        question: '<img src="img/anime2.jpg" alt="" height="300px">',
        answer:'<img src="https://static.hdrezka.ac/i/2021/11/2/kcad758381af1ow79z45o.jpeg" style="height:calc(var(--index)*15);">',
    },
    {
        id: 14,
        theme: "Фільм у Аніме",
        cost: 400,
        question: '<img src="img/anime3.webp" alt="" height="300px">',
        answer:'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1DJVHXrM2qQTao6MtZ0Wwc-O88QISM1qBg&s" style="height:calc(var(--index)*15);">',
    },
    {
        id: 15,
        theme: "Фільм у Аніме",
        cost: 500,
        question: '<img src="img/anime4.webp" alt="" style="height:calc(var(--index)*15);">',
        answer:'<img src="https://gdb.rferl.org/b9a79b9f-65bb-4ecc-a127-0ec907e76561_w1200_r1.jpg" style="height:calc(var(--index)*15);">',
    },
    {
        id: 16,
        theme: "КакаРеали",
        cost: 200,
        question: 'У Серіалі Гострі кртузи є персонаж Томас Шелбі. Як звати актора який виконав цю роль?',
        answer:'Кілліан Мерфі',
    },
    {
        id: 17,
        theme: "КакаРеали",
        cost: 300,
        question: 'Як звати старшого брата Шерлока Холмса?',
        answer:'Майкрофт',
    },
    {
        id: 18,
        theme: "КакаРеали",
        cost: 400,
        question: 'Поширене та популярне явище сучасного мистецтва, яке використовується (трапляється) переважно в літературі, кіно, телебаченні та анімації; спосіб організації та побудови художніх творів, котрий полягає в тому, що твір складається з багатьох окремих частин, зазвичай відносно невеликого розміру. Що це?',
        answer:'Серіал',
    },
    {
        id: 19,
        theme: "КакаРеали",
        cost: 500,
        question: 'Як звати кращого друга Джої у телесеріалі "Друзі"?',
        answer:'Чендлер',
    }

];



addPlayers();

document.querySelectorAll('.question').forEach( (el,index) => el.addEventListener("click", function(e){
    let points = 0;
    
    if(this.classList.contains('question-used')){
    
        clicks = clicks + 1;
        if(clicks === 3){
            this.classList.remove('question-used');
            clicks = 0;
        }

    }else{
        let answerId = 0;
        document.querySelector('.question-main-block').classList.add('active');
        this.classList.add('question-used');
        document.querySelector('.bg').classList.add('active');
        addPlayersInQuestion();
        for(let i=0;i<questions.length;i++){
            
            if(index === questions[i].id){
                document.querySelector('.question-theme').innerHTML = questions[i].theme;
                document.querySelector('.question-text').innerHTML = questions[i].question ;
                document.querySelector('.question-cost').innerHTML = "Вартість питання - " + questions[i].cost;
                points = questions[i].cost;
                answerId = i;
            }
        }
        document.querySelector('.question-text').addEventListener("click",function(){

            this.innerHTML = questions[answerId].answer;
        
        });
         winer(points);   
    }
    
}));



document.querySelector('.side-menu-burger').addEventListener("click",() =>{
    
    let menu = document.getElementsByClassName('side-menu');

    if( menu[0].style.left === "0px"){
         menu[0].style.left = "-300px";
    }else{
         menu[0].style.left = "0px";
    }

    
});

let closeBlock = document.querySelector('.question-close-btn');

closeBlock.addEventListener('click', function(){
    let questionBlock = document.querySelector('.question-main-block');
    
    questionBlock.classList.remove('active');
    document.querySelector('.bg').classList.remove('active');

});


function addPlayers(){
    
    let playersBlock = document.querySelector('.players');
    playersBlock.innerHTML = "";
    for(let i=1;i<players.length;i++){
       
        playersBlock.innerHTML = playersBlock.innerHTML + ' <div class="player"><img src="'+players[i].img+' " alt="" class="player-photo"><h4 class="player-name">'+players[i].name+'</h4><h4 class="player-points" >'+players[i].points+'</h4></div>';
    }
}

function addPlayersInQuestion(){
    
    let playersBlock = document.querySelector('.question-players');
    
    playersBlock.innerHTML = "";
    
    for(let i=1;i<players.length;i++){
        playersBlock.innerHTML = playersBlock.innerHTML + ' <div class="player player-hov"><img src="'+players[i].img+' " alt="" class="player-photo"><h4 class="player-name">'+players[i].name+'</h4><h4 class="player-points" >'+players[i].points+'</h4></div>';
    }
}

document.querySelector('.side-menu-add-player-btn').addEventListener('click',function(e){

    const playerName = document.querySelector('.input-name').value;
    let playerImg = document.querySelector('.input-img').value;

    if(playerImg===""){
        playerImg="img/2.png";
    }

    document.querySelector('.input-name').value = "";
    document.querySelector('.input-img').value = "";
    const playerId = players.length;
    if(playerName.length>0 && playerImg.length>0){
        let checkName = false;
        for(let i = 1;i<players.length;i++){
            if(players[i].name === playerName ){
                checkName = true;
            }
        }
        if(checkName !== true){
            players.push({
                id: playerId,
                name: playerName,
                points: 0,
                img: playerImg,
            });
        
            addPlayers();
            
        }else{
            alert("Гравець з таким іменем вже існує");
        }
    }else{
        alert("Данні не вказано!");
        
    }
});


document.querySelector('.side-menu-add-points-btn').addEventListener('click',()=>{

    const playerName = document.querySelector('.input-extra-points-name').value;
    const playerExtraPoints = +document.querySelector('.input-extra-points').value;
    
    
    players.forEach(el => {
        if(el.name.toLowerCase() === playerName.toLowerCase()){ 
            el.points += playerExtraPoints; 
            
        }
    });


    

    addPlayers();

});


function winer(points){
    document.querySelectorAll('.player').forEach((el,index)=> el.addEventListener('click', function(e){

        let checkBlock = el.closest('.question-block')
        
        if(checkBlock !== null){
            players[index+1].points = players[index+1].points + points;
            addPlayers();
            addPlayersInQuestion();
        }
    
    } ));
}



