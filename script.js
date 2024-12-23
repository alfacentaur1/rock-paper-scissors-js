let bot_guess_doc = document.getElementById("bot");
let user_points_doc = document.getElementById("user_points");
let bot_points_doc = document.getElementById("bot_points");

//0 - paper
//1 - rock
//2 - scissors
let array_list = ["paper","rock","scissors"];
function counter(arg){
    let bot_guess = Math.floor(Math.random() * 3);
    let player_guess = null;
    if (arg == "paper"){
        player_guess = 0;
    }else if(arg=="rock"){
        player_guess = 1;
    }else{
        player_guess = 2;
    }
    while (player_guess == bot_guess){
        bot_guess = Math.floor(Math.random() * 3) ;
    }
    console.log(bot_guess)
    if(player_guess == 0 && bot_guess == 1){
        user_points_doc.innerHTML = parseInt(user_points_doc.innerHTML)+1;
        bot_guess_doc.innerHTML = array_list[bot_guess];
    }
    else if(player_guess == 0 && bot_guess == 2){
        bot_points_doc.innerHTML = parseInt(bot_points_doc.innerHTML)+1;
        bot_guess_doc.innerHTML = array_list[bot_guess];
    }
    else if(player_guess == 1 && bot_guess == 0){
        bot_points_doc.innerHTML = parseInt(bot_points_doc.innerHTML)+1;
        bot_guess_doc.innerHTML = array_list[bot_guess];
    }
    else if(player_guess == 1 && bot_guess == 2){
        user_points_doc.innerHTML = parseInt(user_points_doc.innerHTML)+1;
        bot_guess_doc.innerHTML = array_list[bot_guess];
    }
    else if(player_guess == 2 && bot_guess == 0){
        user_points_doc.innerHTML = parseInt(user_points_doc.innerHTML)+1;
        bot_guess_doc.innerHTML = array_list[bot_guess];
    }
    else if(player_guess == 2 && bot_guess == 1){
        bot_points_doc.innerHTML = parseInt(bot_points_doc.innerHTML)+1;
        bot_guess_doc.innerHTML = array_list[bot_guess];
    }
}