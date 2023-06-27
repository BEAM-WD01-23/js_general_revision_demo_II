//general revision on javascript
//i
        //in-built object methods
        let data = {
            name: 'Marko',
            age: 40,
            height: 170, 
            hobies:{
                sport: 'football, swimming',
                cuisine: 'cooking, going-out',
                travel: 'visiting, musium, meeting people'
            }
        }
            let objValues = Object.values(data);
            let objKeys = Object.keys(data);
            let objEntries = Object.entries(data);
            //console.log(objEntries);
            //
//ii    functions
        //a block of code that performs a particular task ...
        //three important aspect of a function: -function declaration, -logic -function-call
        function showName(){
            //console.log('hi, my name is Daniel');
        }
        showName();
        //
        function showName(name){
            //console.log('hi, my name is ' + name);
        }
        // showName('Katarina');
        // showName('Daniel');
        // showName('Mahmoud');
        // showName('Piter');
        //
        //arrow-function =>
        
        const showName1 = (name) => {
            //console.log('hi, my name is ' + name);
        }
        showName1('Silvia');
        //hoisting
        //
        function calculateIt(a,b,c){
            return (a*b)+c
            //return a*(b+c)//18
           
        }
        let result = calculateIt(3,4,2);
        //console.log(result);//14
        //
        function checkTemprature(temperatrue){
            // let temperatrue = 10;
            if(temperatrue <= 0){
                console.log('it is very cold outside');
            }else{
                console.log('It is fresh outside')
            }
        }
        //checkTemprature(0);
        //
//iii   callback
        //using callback we transform our code into asynchronous ... 
        function hi(){
            //console.log('Hi from the main function');

            setTimeout(function(){
                //console.log('this callback, it ll be shown after 2 seconds');
            },2000)
        }
        hi()
        //
        function showCountry(country, callback){
            //console.log('this is ' + country);
            callback()
        }
            function myCallback(){
                //console.log('Hi, I am the callback function')
            }
            showCountry('Egypt', myCallback)
            //
        //
        function myFunction(name, age, profession, callback){
            //console.log('inside the main function, before callback call');
            callback(name, age, profession)
        }
        function myCallbackFunciton(name, age, profession){
            //console.log(name, age, profession);
        }
        myFunction('Marko', 40, 'Lawyer', myCallbackFunciton);//Marko 40 Lawyer

    //higher-order 
    //are functions that can accept other functions as arguments or return functions as their results.
    function higherOrderFunction(callback){
        //add logics here ...
        //console.log('my first logic');
        callback()
    }
    function callbackFuncion(){
        //console.log('this is callback')
    }
    higherOrderFunction(callbackFuncion)
    //
    //in-built higherorder functions ( map(), reduce(), filter(), forEach() ...)
    const number = [4,54,6,9,77,4,3];
        let myMap = number.map((item)=>{
            //  let result = item*2;
            let result = item + 1;
            //console.log(result)
        });
        //
        function myFilter(...givenNumbers){//with rest param ...
            let my_filter = givenNumbers.filter((item)=>{
                return item % 2 === 1
            })
            //console.log(my_filter);
        }
        myFilter(4,54,6,9,77,4,3);
        //
        //reduce
        function reduceIt(numbs){
            let addNumbers = numbs.reduce((current_value, initial)=>{
                return initial + current_value
            },0)
           // console.log(addNumbers)
        }
        //reduceIt([4,54,6,9,77,4,3]);//157
        //
        let students = [
            {name: 'Claudia', age: 17, grade: 70, espIdentifier: 'blue'},
            {name: 'Kebede', age: 18, grade: 90, espIdentifier: 'blue'},
            {name: 'Daniel', age: 17, grade: 85, espIdentifier: 'red'},
            {name: 'Katarina', age: 17, grade: 70, espIdentifier: 'blue'},
            {name: 'David', age: 16, grade: 50, espIdentifier: 'red'},
            {name: 'Christine', age: 18, grade: 60, espIdentifier: 'red'},
            {name: 'Timo', age: 19, grade: 80, espIdentifier: 'blue'},
            {name: 'Mark', age: 17, grade: 40, espIdentifier: 'red'},
        ];
        //console.log(students)
        //with for ... loop
            for(let a=0; a<students.length; a++){
                if(students[a].grade >40 && students[a].grade <60){
                   // console.log(students[a])
                }
            }
       //with filter
       let filterIt = students.filter((item)=>{
            if(item.espIdentifier === 'blue'){
                //console.log(item)
            }
       })
//
//iv closure
       //
       function bigClosure(){
        let car = 'Fiat';
        function one(){
            console.log('first function ' + car)
        }
        //
        function two(){
            console.log('second function ' + car)
        }
        one()
        two()
       }
       //bigClosure()
       //
       function outerFunction(arg){
            function innerFunction1(){
                let convertToCapital = arg.toUpperCase()
                console.log(convertToCapital)
            }
            //
            function innerFunction2(){
                let showLength = arg.length;
                console.log(showLength)
            }
            //
            function innerFunction3(){
                let toArray = arg.split('');
                let toReverse = toArray.reverse();
                let toJoin = toReverse.join('');
                console.log(toJoin);
            }
            return{
                one:innerFunction1,
                two:innerFunction2,
                three: innerFunction3
            }
            // innerFunction1('hello')
            // innerFunction2('hello')
            // innerFunction3('hello')
       }
        let my_closure = outerFunction('hello');
        // my_closure.one()
        // my_closure.two()
        // my_closure.three()
        //
        function closureExplained(){
            function one(one, two){
                console.log(one + two)
            }
            //
            function two(arg){
                console.log(arg.slice(2,5))
            }
            one(3,7);//10
            two('random string')//ndo
           }
            //closureExplained()


//v
           // recursion, is a function that calls itself or be executed when a specific conditon is true. usually if ... else ...

           function reduceIt(add, numbs){
            if(add === 'add'){
                let addNumbers = numbs.reduce((current_value, initial)=>{
                    return initial + current_value
                },0)
                //console.log(addNumbers)
            }else{
                //console.log('sorry, I can not add values')
            }
            
            }
        reduceIt('subt', [4,54,6,9,77,4,3]);//157
        //
        //for loop
        function addIt(arr){
            let sum = 0;
            for(let a=0; a<arr.length; a++){
                sum += arr[a]
                if(sum >= 100){
                        console.log(sum)
                  }else{
                    console.log('sorry I can not calculate the sum')
                  }
            }
        }
        addIt([4,54,6,9,77,4,3]);//157
//vi
        //rest param, facilitate association b/n parameters and arguments, it creates an array and make iteration simple ...
        function addIt(...arr){
            let sum = 0;
            for(let a=0; a<arr.length; a++){
                sum += arr[a]
                if(sum >= 100){
                        //console.log(sum)
                  }else{
                    //console.log('sorry I can not calculate the sum')
                  }
            }
        }
        addIt(4,54,6,9,77,4,3);//157
        //
        function subtractIt(a, b, c){
            return a - b - c
        }
        let result3 = subtractIt(5,8,4,5,7,8,9);       
        //console.log(result3);// result = -7 & ignores arguments after the third one
        //
        function restExplained(...one){
           // console.log(one)
        }
        restExplained(1,2,3,4);
        //
        function restExplained1(one, two, ...three){
            // console.log('this is parameter ' + one);//one
            // console.log('this is parameter ' + two);//two
            // console.log('this is parameter ' + three);//three,four,five
        }
        restExplained1('one', 'two','three','four','five');
       




        