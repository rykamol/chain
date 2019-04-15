
// 1. Const and let

// 2. Arrow function example

    // let result = (val,val2)=>val+val2;
    // console.log(result(40,39))

// Arrow function example end



// 3. Example of default parameter

    // function getSummation(a,b="adsfadsf"){
    //     return a+b;
    // }
    // let result = getSummation(3)
    // console.log(result)

// Example of default parameter end



// 4. Template literral example

    // let string = "This is a sample string.";
    // var finalString= `Dont get worrried to see this text. ${string}`;
    // console.log(finalString)

// Template literral example end 



// 5. Destructing Assignment 
   
    // For object 
        // const address = {
        //     house:{
        //         houseName:'KCR vila',
        //         houseNo: 404
        //     },
        //     country: 'Bangladesh',
        //     city: 'Dhaka',
        //     region: 'Asia'
        // }
        // var b = address.house.houseName;
        // console.log(b)
        // const {city,region:regionName,house:{houseName},house} = address;
        // console.log(city,regionName,houseName,house)
    // For object end 

    // For array
        // const array= [0,2,3,32,23,3,4,5,6,67,76,7,7,778];
        // const [ek,dui,tin,,pach] = array;

        // console.log(ek,dui,tin,pach);
    // For array end 

    // Function parameter for object
        // function printValue({city}){
        //     console.log(city);
        // }

        // const address={
        //     city: 'Dhaka',
        //     country: 'Bangladesh',
        //     region: 'Asia'
        // }
        // printValue(address) 
    // Function parameter for object end

    // Function parameter for array
        // const array= [undefined,2,3,32,23,3,4,5,6,67,76,7,7,778];
        // function printNumber([first='default',second]){
        //     console.log(first,second)
        // }
        // printNumber(array)
    // Function parameter for array end 

// Destructing Assignment  end



// 6. Enhance object literral
    // const name="Kamol";
    // const address = "Dhaka";    
    // const person={
    //     name,    //name:name
    //     address  // address:address
    // }    
    // console.log(person);
// 6. Enhance object literral end 



// 7. Loop 
    // const array= [1,2342,341,3245,235,253,653,234123,3421421,2134,2134];
    // // array.forEach((val)=>console.log(val))
    // array.forEach(function(val){
    //     console.log(val);
    // })

    // for(let val of array){
    //     console.log(val);
    // }
// Loop end
 
// 8. Promise

// 9. Module

// 10. Spread and rest
    // For spread operator -> def: allow to itarable (array/object/string) to be extented into single argument/element.
        // For array 
            // const array1 = [1,2,3,4,5,6,7,8,9];
            // const array2 = [...array1,10,11,12,13,14,15];
            // // console.log(array1);
            // // console.log(array2);
            // const arr3= [...array1]
            // console.log(arr3);
        // For array end

        // For object 
            // const person={
            //     address: 'Dhaka',
            //     ps: 'Mirpur',
            //     postCode: '1216'
            // }
            
            // const person2= {
            //     ...person,
            //     road: 54565,
            //     houseNo: 'H564',
            //     // if i want to override any property  then 
            //     address: 'Dinajpur'
            // }
            // console.log(person2);
        // For object end 

        // For string    // after using speread it will convert an array 
            //  const string="This is good";
            //  const string2 = [...string];
            //  console.log(string2);
        // For string end 
    // For spread operator end 

    // For rest example -> def: allow to the remaining elements into and array
        // Usring array property
            // const [first,second,third,...other] = [1,2,3,4,5,6,7,8,9,10];
            // console.log(other);
        // Using array property end 

        // Using object property
            // const {a,b,...othersVal} = {
            //     a: "first",
            //     b: "second",
            //     c: "third",
            //     d: "fourth",
            //     e: "fifth",
            //     f: "sixth"
            // }
            // console.log(othersVal);
        // Using object property
    // For rest example end 
// Spread and rest end 


// Set in js    
    
// Set in js end 



