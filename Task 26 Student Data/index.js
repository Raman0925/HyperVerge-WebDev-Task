let object = {"name":"Raman",
                "email":"ramankumarkannaujiya@gmail.com",
                "age" : "18"
             
}
console.log(object)
object.age = 10;
console.log(object)

function greet(){
    return "hello "+object.name
}
console.log(greet())

object["address"] = {
                    "country":"india",
                    "city":"Mumbai",
                    "pincode":"272302"
}
console.log(object.address.country)
console.log(object.address.city)

let friend = {
    "name":""
    
}
