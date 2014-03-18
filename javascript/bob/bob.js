
var Bob = function() {
    this.hey = function(phrase){
        if(phrase.trim() === ''){
            return 'Fine. Be that way!';
        }
        else if(/[A-Z]/.test(phrase) == true && !/[a-z]/.test(phrase)){
            return 'Woah, chill out!';
        }
        else if(/\?$/.test(phrase)){
            return "Sure.";
        }
        return "Whatever.";
    };
    
    return {
        hey : this.hey
    };
};

module.exports = Bob;
/*
var isQuestion = function(phrase) {
    return phrase.length > 0 && phrase.lastIndexOf('?') === phrase.length - 1;
};

var isYelled = function(phrase) {
    return phrase.toUpperCase() === phrase && phrase.toUpperCase() !== phrase.toLowerCase();
};
*/