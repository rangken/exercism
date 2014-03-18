var anagram = function(word){
    var sWord = word.toLowerCase().split('').sort().join('');

    this.match = function(list){
        var results = [];
        list.forEach(function(i) {
            if (word.length != i.length || word.toLowerCase() == i.toLowerCase()){
                return;
            }
            var sorted = i.toLowerCase().split('').sort().join('');
            if (sWord == sorted){
                results.push(i);
            };
        });
        return results;
    };
};

module.exports = anagram;