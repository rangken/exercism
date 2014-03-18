String.prototype.format = function() {
    var formatted = this;
    for (var arg in arguments) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

var BASIC_STR = "{0} bottles of beer on the wall, {1} bottles of beer.";
var BASIC_ONE_STR = "{0} bottle of beer on the wall, {1} bottle of beer.";
var BASIC_EMPTY_STR = "No more bottles of beer on the wall, no more bottles of beer.";
var ONE_MORE_STR = "Take one down and pass it around, {0} bottles of beer on the wall.";
var TWO_STR = "Take one down and pass it around, {0} bottle of beer on the wall.";
var ONE_STR = "Take it down and pass it around, no more bottles of beer on the wall.";
var EMPTY_STR= "Go to the store and buy some more, 99 bottles of beer on the wall.";

var beerSong = {};

beerSong.verse = function(num){
    var result = "";
    if( num == 0 ){
        result += BASIC_EMPTY_STR;
    }else if( num == 1){
        result += BASIC_ONE_STR.format(num,num);
    }else{
        result += BASIC_STR.format(num,num);
    }
    result += "\n";
    if( num == 0 ){
        result += EMPTY_STR;
    }else if( num == 1 ){
        result += ONE_STR;
    }else if( num == 2 ){
        result += TWO_STR.format(num-1);
    }else{
        result += ONE_MORE_STR.format(num-1);
    }
    result += "\n";
    console.log(result);
    return result;
};

beerSong.sing= function(num, until){
    if(until == undefined){
        until = 0;
    }
    result = "";
    for(i =0; i < num-until+1; i+=1){
        result += this.verse(num-i);
        if(i != num-until){
            result += "\n";
        }
    }
    return result;
};

module.exports = beerSong;


