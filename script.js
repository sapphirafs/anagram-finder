//runs on command line node.js powershell

//----------------------------------------------------------------------------------

let fileName = "apple_car_cider_tar_itch_rat_cried_helicopter_arc.txt";

const anagramFinder = (fileName) => {


//seperate the file extension name (.txt)
let text1 = fileName.split('.').slice(0,-1).join("");
//then seperate the words without the underscores and make the string an array
let text2 = text1.split('_')
	//iterate to collect each word of the filename
	for (i = 0; i < text2.length; i++){
    	// anchor the words to a var
    	let word = text2[i];
        
        //output for word: applecarcidertaritchratcriedhelicopterarc
   
        //alphabetically order each letter in each word by splitting at each letter and sorting. then join to make the array a string.
        let sorted = word.split("").sort().join("")
        
        //output for sorted(with added underscores for readability): aelpp_acr_cdeir_art_chit_art_cdeir_ceehiloprt_acr_
        
        //iterate over text2 again. this is a nested loop.
        for(j = 0; j < text2.length; j++){
            //if a word matches a word from the first iteration, skip it and continue.
            if (i===j){
            continue;
            }
            //word2 is equal to a nested array that keeps looping unitil the 'word' array has ran out
            let word2 = text2[j]
            //output for word2 (underscores arnt in the actual code, its just for readability):
             //car_cider_tar_itch_rat_cried_helicopter_arc_apple_cider_tar_itch_rat_cried_helicopter_arc_apple_car_tar_itch_rat_cried_helicopter_arc_apple_car_cider_itch_rat_cried_helicopter_arc_apple_car_cider_tar_rat_cried_helicopter_arc_apple_car_cider_tar_itch_cried_helicopter_arc_apple_car_cider_tar_itch_rat_helicopter_arc_apple_car_cider_tar_itch_rat_cried_arc_apple_car_cider_tar_itch_rat_cried_helicopter_

            let sorted2 = word2.split("").sort().join("");
            //output for sorted2: acr_cdeir_art_chit_art_cdeir_ceehiloprt_acr_aelppcdeirart_chitartcdeirceehiloprtacraelppacrartchitartcdeirceehiloprtacraelppacrcdeirchitartcdeirceehiloprtacraelppacrcdeirartartcdeirceehiloprtacraelppacrcdeirartchitcdeirceehiloprtacraelppacrcdeirartchitartceehiloprtacraelppacrcdeirartchitartcdeiracraelppacrcdeirartchitartcdeirceehiloprt
            
            if (sorted === sorted2){
                console.log(word + ' ' + word2)
                //document.getElementById("para").innerHTML=word + ' ' + word2 + ' ';
            }
                    
            
            }
        }
        
	}
    
    anagramFinder(fileName)

//
//console.log(anagramFinder(fileName))
//output: car arc
//cider cried
//tar rat
//rat tar
//cried cider
//arc car

 //document.getElementById("label").innerHTML

//still needs working on to output the words that are not anagrams and to make the valuetypes not undefined. Also i need to connect the
//script to the DOM. I would rearrange things to start the UI up through react 



