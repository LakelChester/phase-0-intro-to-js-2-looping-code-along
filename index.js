// Code your solutions in this file
const emptyArray =[]
const names =["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event){

    for (let i = 0; i < names.length; i++) {

       emptyArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      
    }

    return emptyArray;      
}




function countDown(number){
    let downCount = 10; 
    while (downCount >= 0){
        console.log(downCount--)
    }

}









