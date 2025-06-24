// exe 1
function doubleValues(arrey){
    newArrey = arrey.map((num)=>{return num*2})
    return newArrey
}

arr  = [1,2,3,4,5,6]

// console.log(doubleValues(arr))

// exe 2

function onlyEvenValues(arr){
    return arr.filter((num)=>{if(num%2==0){return num}})
}

const new1 = onlyEvenValues(arr)
// new1.forEach(element => {console.log(element)});

// exe 3
function showFirstAndLast(arr){
    if(typeof arr[0] == "string" && typeof arr[arr.length-1]=="string"){
        return newArr = [arr[0]+" "+arr[arr.length-1]]
    }
    else{
        return newArr = ["enter valid arr (only strings)"];
    }
}

const arr12 = ["ahaya",12, "sara","kolo","teller"]
const n = showFirstAndLast(arr12)
// n.forEach(element => {console.log(element)});
 // exe 4


 function vowelCount(str)
 {
    var result={}

    for (let index = 0; index < str.length; index++){        
        if(str[index]=="a"|str[index]=="i"|str[index]=="u"|str[index]=="o")
            {
                if(result[str[index]]){
                    result[str[index]]+= 1; 
                }
                else{
                    result[str[index]] = 1; 
                }
            }
            }
            return result     

 }

const res = vowelCount("haaaellouuuuuuuworld")
console.log(res)

