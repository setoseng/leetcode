var numJewelsInStones = function(J, S) {
    let count = 0;
    for (var x in S){
      for (var y in J){
        if (S[x] === J[y]){
          count++;
        }
      }
    }
    console.log(count);

};

numJewelsInStones("aA" , "aAAbbbb");
