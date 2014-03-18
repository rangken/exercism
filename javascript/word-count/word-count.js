
module.exports = function(phrase){
    //phrase = phrase.replace(/[.,^$*+?()[{\|:!@&%]/g,"");
    phrase = phrase.replace(/\W+/g," ").replace(/\s$|^\s/g,"");
    var word_lst = phrase.split(/\s+/g);
    var word_dic = {};
    for(idx in word_lst){
        var word = word_lst[idx].toLowerCase();
        if( typeof(word_dic[word]) === 'function'){
            word_dic[word] = 0;
        }
        if( word_dic[word] === undefined){
            word_dic[word] = 1
        }else{
            word_dic[word] += 1;
        }
    }
    return word_dic;
};
