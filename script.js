//runs on command line node.js powershell

/* -- first try (improved a bit)

let fileName = "apple_car_cider_tar_itch_rat_cried_helicopter_arc.txt";

const anagramFinder = (fileName) => {
  //seperate the file extension name (.txt)
  let withoutExtension = fileName.split(".").slice(0, -1).join("");
  //console.log(typeof withoutExtension): string
  //then seperate the words without the underscores and make the string an object
  let withoutUnderscore = withoutExtension.split("_");
   // console.log(withoutUnderscore)
   // output: ['apple', 'car', 'cider', 'tar', 'itch', 'rat', 'cried', 'helicopter', 'arc']
   // console.log(typeof withoutUnderscore): object

  //iterate over obj to collect each word of the filename and make each word a string
  for (i = 0; i < withoutUnderscore.length; i++) {
    // anchor the words to a var
    let strings = withoutUnderscore[i];
    //console.log(strings)
    //console.log(typeof strings) string string sting string ...
    //output for strings: apple, car, cider, tar, itch, rat, cried, helicopter, arc 

    //alphabetically order each letter in each word by splitting at each letter and sorting. then join to make the obj type = strings.
    let sortedStrings = strings.split("").sort().join("");
    //console.log(sortedStrings)
    //console.log(typeof sortedStrings) string string string string ...
    //output for sortedStrings: aelpp, acr, cdeir, art, chit, art, cdeir, ceehiloprt, acr

    //iterate over the obj again. this is a nested loop.
    for (j = 0; j < withoutUnderscore.length; j++) {
      //if a word matches a word from the first iteration, skip it and continue.
      if (i === j) {
        continue;
      }
      
      //nested strings keeps looping unitil the the obj has ran out
      let nestedStrings = withoutUnderscore[j];
      //console.log(nestedStrings)
      //output for nestedStrings:
      //car, cider, tar, itch, rat, cried, helicopter, arc, apple, cider, tar, itch, rat, cried, helicopter, arc, apple, car, tar, itch, rat, cried, helicopter, arc, apple, car, cider, itch, rat, cried, helicopter, arc, apple, car, cider, tar, rat, cried, helicopter, arc, apple, car, cider, tar, itch, cried, helicopter, arc, apple, car, cider, tar, itch, rat, helicopter, arc, apple, car, cider, tar, itch, rat, cried, arc, apple, car, cider, tar, itch, rat, cried, helicopter
     //console.log( typeof nestedStrings) : string string string string ...

      let sortedNestedStrings = nestedStrings.split("").sort().join("");
      //console.log(typeof sortedNestedStrings) : string string string string ...
      //console.log(sortedNestedStrings)
      //output for sortedNestedStrings:
      //acr, cdeir, art, chit, art, cdeir, ceehiloprt, acr, aelpp, cdeir, art, chit, art, cdeir, ceehiloprt, acr, aelpp, acr, art, chit, art, cdeir, ceehiloprt, acr, aelpp, acr, cdeir, chit, art, cdeir, ceehiloprt, acr, aelpp, acr, ... cdeirartartcdeirceehiloprtacraelppacrcdeirartchitcdeirceehiloprtacraelppacrcdeirartchitartceehiloprtacraelppacrcdeirartchitartcdeiracraelppacrcdeirartchitartcdeirceehiloprt


      if (sortedStrings === sortedNestedStrings) {
        //console.log(sortedStrings + " " + nestedStrings);
        //output for (sortedStrings + " " + nestedStrings) = acr arc, cdeir cried, art rat, art tar, cdeir cider, acr car
        //document.getElementById("para").innerHTML=word + ' ' + word2 + ' ';
      }
    }
  }
};

anagramFinder(fileName)

*/




//second try with callback functions map() reduce(), objects and descriptive variables


function group_anagrams(fileName) {
  //seperate the file extension name (.txt)
  let withoutExtension = fileName.split(".").slice(0, -1).join("");
  /*console.log(withoutExtension)
  apple_car_cider_tar_itch_rat_cried_helicopter_arc
  console.log(typeof withoutExtension): string*/

  //then seperate the words without the underscores and make the string an object
  let withoutUnderscore = withoutExtension.split("_");
  /*console.log( "test: " + withoutUnderscore);
  console.log(typeof withoutUnderscore)
  test: apple,car,cider,tar,itch,rat,cried,helicopter,arc 
  object*/

  /*the join method converts from an array to string
  the split method converts from a string to an array*/
  let sortedArr = withoutUnderscore.map((item) =>
    item.split("").sort().join("")
  );
  console.log(sortedArr);
  //[ 'aelpp', 'acr', 'cdeir', 'art', 'chit', 'art', 'cdeir', 'ceehiloprt', 'acr' ]
  //console.log(typeof sortedArr) : object 

  //store the sortedArr values into the Set object, 
  //This transforms the array into a set. A Set is similar to an array,but you can’t have duplicate values
  let setArr = new Set(sortedArr);
  //console.log(typeof setArr): object
  //console.log('Test: ' + setArr) -> Test: [object Set]
  //console.log('Test: ' + [...setArr]) -> Test: aelpp,acr,cdeir,art,chit,ceehiloprt

  //create an obj for the reduced index to be pushed into (for comparison in order to match the anagram to it's pair)
  let reducedObj = {};

  //iterate over setArr with setItem being the index
  for (let setItem of setArr) {
    //create a var that contains a reduced immutable (wont change the original) version of the sorted array (not the set).
    //this contains the reduced index that will be pushed into the reducedObj
    let indexArr = sortedArr.reduce((total, current, index) => {
      // if index === current value in array
      if (setItem === current) {
        //push the index to equal the total value
        total.push(index);

        //console.log(total) : [ 0 ], [ 1 ], [ 1, 8], [ 2 ], [ 2, 6 ], [ 3 ], [ 3, 5 ], [ 4 ], [ 7 ]
      }
      return total;
    }, []);

    //set the reducedObj index places equal to indexArray values so there arnt repetitions
    // console.log(indexArr):  [ 0 ], [ 1, 8], [ 2, 6 ], [ 3, 5 ], [ 4 ], [ 7 ]
    reducedObj[setItem] = indexArr;

    // console.log(reducedObj):
    /* { aelpp: [ 0 ] }  { aelpp: [ 0 ], acr: [ 1, 8 ] } 
      { aelpp: [ 0 ], acr: [ 1, 8 ], cdeir: [ 2, 6 ] } 
      { aelpp: [ 0 ], acr: [ 1, 8 ], cdeir: [ 2, 6 ], art: [ 3, 5 ] } 
      { aelpp: [ 0 ],
        acr: [ 1, 8 ],
        cdeir: [ 2, 6 ],
        art: [ 3, 5 ],
        chit: [ 4 ] } 
      { aelpp: [ 0 ],
        acr: [ 1, 8 ],
        cdeir: [ 2, 6 ],
        art: [ 3, 5 ],
  chit: [ 4 ],
  ceehiloprt: [ 7 ] }
  */
}

let resultArr = [];

//iterate over reducedObj
//where the index position is on the mapped original object, push that to the resultArr with the matched reducedObj index
for (let reduceItem in reducedObj) {
  resultArr.push(
    reducedObj[reduceItem].map((item) => withoutUnderscore[item])
  );
}

return resultArr;
}

console.log(
group_anagrams("apple_car_cider_tar_itch_rat_cried_helicopter_arc.txt")
);




