// print the first name of male users 

const allUsers = [{
    firstName: "Ansh", 
    gender: "male"
}, {
    firstName: "Anil", 
    gender: "male"
}, {
    firstName: "Shaina", 
    gender: "female"
}]

for (let i = 0; i < allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }
}

for (let i = allUsers.length-1; i >= 0; i--){
    console.log(allUsers[i])
}   