function sleep_in(weekday,vacation) {
    if(vacation == true){
        return vacation;
    }
    if(vacation == false && weekday == true){
        return vacation;
    }
    if(weekday == false && vacation == false){
        return true;
    }
}

function monkey_trouble(param1, param2) {
    if(param1 && param2 == true){
        return true;
    }
    if(param1 == false && param2 == false){
        return true;
    }
    if(param1 == true && param2 == false){
        return false;
    }
    if(param1 == false && param2 == true){
        return false;
    }
}

function string_times(word, num) {
    var x = '';
    if (num > 0) {
        for (var i = 0; i < num; i++) {
            x += word;
        }
    }
    return x;

}

function front_times(word, num){
    var x = '';
    var newWord = word.substring(0,3);
    if (num > 0) {
        for (var i = 0; i < num; i++) {
            x += newWord;
        }
    }
    return x;

}

function string_bits(str){
    var x = '';
    var y = str.length;
    for(var i = 0; i < y; i+2){
        if(i%2==0) {
            x += str.substring(i, i + 1);
        }
    }
    return x;
}

function caughtSpeeding(speed, birth){
    var numTickets = 0;

    if(birth==true){
        if(speed<=65){
            numTickets+=0;
        }
        if(65<speed && speed<=85){
            numTickets+=1;
        }
        if(speed>85){
            numTickets+=2
        }
    }else{
        if(speed<=60){
            numTickets+=0;
        }
        if(60<speed && speed<=80){
            numTickets+=1;
        }
        if(speed>80){
            numTickets+=2
        }
    }
    return numTickets;
}

function fizz_buzz(num){
    var x = '';
    if(num % 3 == 0){
        x += 'Fizz';
    }
    if(num % 5 == 0){
        x += 'Buzz';
    }
    if(num % 3 != 0 && num % 5 != 0){
        x = num + '!';
    }
    return x;
}

function teaParty(tea, candy){
    var x = 0;

    if(tea < 5 || candy < 5){
        x = 0;
    }else {
        x+=1;
        if(tea/candy >= 2 || candy/tea >=2){
            x+=1;
        }
    }
    return x;
}

function blackjack(x, y){
    var bJack = '';

    if(x > 21 && y > 21){
        bJack = 0;
    }else{
        if(x>21 && y<21){
            bJack = y;
        }
        if(y>21 && x<21){
            bJack = x;
        }
        if(x<=21 && y<=21) {
            if (21 - x > 21 - y) {
                bJack = y;
            }
            if (21 - x < 21 - y) {
                bJack = x;
            }
        }
    }
    return bJack;
}

function loneSum(x,y,z) {
    var sum = '';
    if(x!=y && y!=z && z!=x){
        sum = x+y+z;
    }else{
        if(x==y){
            sum = z;
        }
        if(y==z){
            sum = x;
        }
        if(z==x){
            sum = y;
        }
        if(z==x && x==y && y==z){
            sum = 0;
        }
    }
    return sum;
}

function firstLast6(arr){
    var nums = '';
    if(arr[0]==6 || arr[arr.length-1]==6){
        nums = true;
    }else{
        nums = false;
    }
    return nums;
}

function has23(arr){
    for(var i = 0; i<2; i++){
        if(arr[i] == 2|| arr[i] == 3){
            return true;
        }
    }
    return false;
}

function fix23(arr){
    for(var i = 0; i<3; i++) {
        if (arr[i] == 2 && arr[i + 1] == 3){

        }
    }
}


//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(yes, 3);
    document.getElementById("output").innerHTML += front_times(soccer, 6);
    document.getElementById("output").innerHTML += string_bits(matthew);
    document.getElementById("output").innerHTML += caughtSpeeding(70,true);
    document.getElementById("output").innerHTML += fizz_buzz(33);
    document.getElementById("output").innerHTML += teaParty(10, 5);
    document.getElementById("output").innerHTML += blackjack(21, 33);
    document.getElementById("output").innerHTML += loneSum(5, 6, 8);
    //test third method, etc
}
