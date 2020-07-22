                // Assignment 8 Javascript

// ========================================================================

                    // Chapter 1 to 67

// ==========================================================================

// =============================================================================
// Alert (chapter 1)

// question 1

// alert("Assalamualaikum");

// question 2
// alert("Error ! Please enter a valid password");

// question 3
// alert(" Welcome to JS land... \n Happy coding!");  

// question 4
// alert("Welcome to JS land.");
// alert("Happy coding!\n Prevent this page from creating additional dialouge");

// question 5
// console.log("i can run JS through my web browser console")

// question 6(used script tag to connenct javascript file  in head tag)

// question 7

// it is placed in head and body tag

// =======================================

// Variables for strings (chapter 2)
// ========================================

// question 1
// var UserName=("hasan");
// console.log(UserName)

// // question 2

// var myName=("Syed Muhammad Talha Hasan");
// console.log(myName)

// question 3

// var message=("Hello World");
// alert(message)

// question 4

// var studentName=("Hasan");
// var age=("25");
// var qualification= ("certified mobile app developer");
// alert(studentName);
// alert(age);
// alert(qualification);

// question 5

// alert(" PIZZA \n PIZZ \n PIZ \n PI \n P \n ");

// question 6

// var email=("my email address is example@example.com");
// alert(email)

// question 7
// var book=("A smarter way to learn javascript");
// alert(book)

// question 8
// var i=("Yeah! I can write HTML contents through javascript ");
// document.write(i)

// question 9
// var j=("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");
// alert(j)

// ========================================

// Variables for Numbers (chapter 3)

// =================================
// question 1

// var age=15;
// alert("I am "+age+" years old")

// question 2

// var times=14;
// alert("You have visited this site "+times+" times")

// question 3
// var birthYear=1984;
// document.write('my birth year is '+birthYear)

// question 4
// var a="kamran";
// var b= "T-shirt";
// var c= 10;
// document.write("<b>"+a+ " ordered "+c+" "+b+" from XYZ Clothing Store.")

// =============================================
// Variable names legal and illegal(chapter 4)
// ===============================================

// question 1
// var a,b,c;
// a=10;
// b=5;
// c=7;
// console.log(a,b,c)

// question 2
// legal names
// 1 book,2 sky,3 chair,4 cat,5 earth.
// illegal names
// 1 let,2 const,3 alert,4 var,5 console.

// question 3

// document.write("Rules for naming JS variables"+"<br>"+"Variable names can only contain numbers,$ and_ . For example $my_1stVariable"+"<br>"+"Variables must begin with a letter, $ or _. For example $name, _name or name"+"<br>"+"Variable names are case sensitive"+"<br>"+"Variable names should not be JS keywords");

// =============================================
// Variable names legal and illegal(chapter 5)
// ===============================================

// question 1

// var number1= 10;
// var number2= 15;
// document.write("sum of 10 and 15 is ",number1+number2)

// question 2

// var number1= 10;
// var number2= 15;
// document.write("Difference of 10 and 15 is ",number1-number2)

// var number1= 10;
// var number2= 10;
// document.write("division of 10 and 15 is ",number1/number2)

// var number1= 10;
// var number2= 15;
// document.write("modulus of 10 and 15 is ",number1%number2)

// question 3

// did not understand

// question 4

// var ticketPrice=600;
// var num=5;
// document.write("total cost to buy 5 tickets to a movie is ",ticketPrice*num)

// question 5

// document.write("2" + "x" + "1" + "=" + 2*1 + "<br>")
// document.write("2" + "x" + "2" + "=" + 2*2 + "<br>")
// document.write("2" + "x" + "3" + "=" + 2*3 + "<br>")
// document.write("2" + "x" + "4" + "=" + 2*4 + "<br>")
// document.write("2" + "x" + "5" + "=" + 2*5 + "<br>")
// document.write("2" + "x" + "6" + "=" + 2*6 + "<br>")
// document.write("2" + "x" + "7" + "=" + 2*7 + "<br>")
// document.write("2" + "x" + "8" + "=" + 2*8 + "<br>")
// document.write("2" + "x" + "9" + "=" + 2*9 + "<br>")
// document.write("2" + "x" + "10" + "=" + 2*10 + "<br>")

// question 6
// did not understand

// question 7

// var item1=650;
// var item2=100;
// var qty1=3;
// var qty2=7;
// var shipping=100
// document.write("total cost of your items is ",item1*qty1+item2*qty2+shipping)

// question 10
// var number1= 6;

// document.write("add 5 is equal to ",number1+5 + "<br>");
// document.write("multiply by 10  is equal to ",number1*10 + "<br>");
// document.write("divide by 2  is equal to ",number1/2 + "<br>");

// question 11

// var a=2020;
// var b=1984;
// document.write(" <b> Calculate age "+"<br>")
// document.write("current year is ",a+"<br>")
// document.write("Birth year is  ",b+"<br>")
// document.write("Your age is ",a-b)

// question 13
// var a=15;
// var b=65;
// var c=3;

// document.write(" favorite snack : Chocolate chips "+"<br>")
// document.write("current age: 15 ","<br>")
// document.write("estimated maximum age : 65 ","<br>")
// document.write("Amount of snacks per day  : 3","<br>")
// document.write("You will need ",+(b-a)*c+" chocolate chips to last you until the ripe old age of 65")

// =============================================
// Variable names legal and illegal(chapter 6to9)
// ===============================================

// Question 1

// var a= 10;
// document.write("the value of a is ",a +"<br>")
// document.write("the value of ++a is ",++a+"<br>")
// document.write("the value of a++ is ",a+++"<br>")
// document.write("the value of --a is ",--a+"<br>")
// document.write("the value of a-- is ",a--+"<br>")

// Question 2

// var a =2;
// var b=1;
// var result=--a - --b + ++b + b--;
// document.write("a=2" +"<br>"+ "b=1"+"<br>"+"  then --a  -  --b  +  ++b  +  b--  is equal to  ",result)

// Question 3

// var name = prompt("Assalamualaikum", "name");

// Question 4

// var myVar = prompt("enter number");
// var myString = "";
// for (i=1; i<=10; i++) {
// myString += myVar+ " x " +i+ " = " +(i*myVar)+ "<br/>";
// }
// document.write(myString);



// ==================================================
// chapter (9to 11)
// ====================================================

// Question 1

// var cities = ["karachi","islamabad","lahore"];

// for (var i = 0; i < cities.length; i++){
//        if (cities[i] === "karachi")
//        alert(cities[i] +"  welcome to city of light")
// }

// Question 2
// var x = prompt("What is your gender?");
// if (x === "female") {
// alert("Good morning mam!");

// }
// else{
//     alert("Good morning sir")
// }

// Question 3


// var x=prompt("enter signal colors");
// if (x === "red") {
// alert("Must stop");
// }
// else if (x === "yellow"); {
// alert("Ready to move");
// }
// else{
// alert("Move now");
// }


// question 4

// var Fuel = prompt("enter your fuel consumption");
//  if (Fuel < .25) {
// alert("Please refiil the fuel in your car!");
//  }
//  else {
//      alert("Go ahead");
//      }

// Question 5

// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }

// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }

// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }

// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === materialCost + laborCost){ alert("The cost equals"); }

// if (true){ alert("True"); } if (false){ alert("False"); }

// if("car" < "cat"){ alert("car is smaller than cat"); }

// Question 7

// var a = prompt("guess the secret number"); 
// if (a === "5"){ alert("Bingo! Correct answer"); }
// if (a==="6"){alert("Close enough to the correct answer"); }

// Question 8

// var i=prompt("enter any number to check it is divisible by 3 or not");
// var j= i/3; if (j === i/3){ alert("divided by 3 is equal to "+j); }

// extra question for practice

// var i=+ prompt("enter any number to make it even");
// var j= i+(i+2); if (j === i+(i+2)){ alert("it is a even number "+j); }

// question 9

// var even=prompt("enter num");{
// 	if (even%2 == 0)
// 		alert(+even+" is an even number");
// 	else
//     alert(+even+" is an odd number ");
// }

// question 10

// var temp=prompt("enter today's temperature");
// if (temp > 40) {
//     alert("Today's weather is too hot");
//     }
// if (temp > 30) {
//     alert("The Weather today is Normal.");
//     }
// if (temp > 20) {
//     alert("Today’s Weather is cool.");
//     }
//  if (temp > 10) {
//      alert("Today’s weather is so Cool.");
//     }

// question 11

// var val1=prompt("enter first value")
// var sign=prompt("enter sign operator")
// var val2=prompt("enter second value")

// console.log(val1+sign+val2)

// if (sign==="+"){
//     alert((+val1)+(+val2))
// }
// else if (sign==="-"){
//     alert(val1-val2)
// }
// else if (sign==="*"){
//     alert(val1*val2)
// }
// else if (sign==="/"){
//     alert(val1/val2)
// }

// ==================================================
// chapter (12 to 13)
// ====================================================

// Question 1

// var A=65;
// var Z=90;
// var a=97;
// var z=122;
//  var b=prompt("enter number");
//  if (b==="65"){
//      alert("A")
//  }
//  if (b==="90"){
//     alert("Z")
// }
// if (b==="97"){
//     alert("a")
// }
// if (b==="122"){
//     alert("z")
// }

// Question 2

//  var a=prompt('enter number');

// if (a > 50 ) {
//     alert("it is larger");
//     }
// if (a === "50" ) {
//         alert("it is equal");
//         }
//     else {
//     alert("it is lower");
//     }

// Question 3
// did not understand


// Question 4

// var a="a";
// var b="e";
// var c="i";
// var d="o";
// var e="u";
// var f=prompt("enter alphabets");

// if (f === a ) {
// alert("it is a vowel");
// }
// if (f === b ) {
//  alert("it is a vowel");
// }
// if (f === c ) {
//     alert("it is a vowel");
//    }
//    if (f === d ) {
//     alert("it is a vowel");
//    }
//    if (f === e ) {
//     alert("it is a vowel");
//    }
// else {
// alert("it is a consonant");
// } 



// question 6

// var greeting=prompt("enter time","in number");
// var hour =13; 
// if (hour < 18) {alert(+greeting+" Good day");}
//  else { alert(+greeting+" Good evening"); }

// Question 5

// var pass="abcde";
// var pass1=prompt("Please enter your password");
// if (pass1===pass){
//     alert("Correct..The password you entered matches the original password.");
// }
// else if (pass1!==pass){
//     alert("Incorrect pasword");
// }
// else if (pass1===" "){
//     alert("please enter your pasword again");
// }


// Question 7

// var time=prompt("enter time");

// if (time>= 0000 && time < 1200) {
// alert("Good Morning");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon");
//     }
// else if (time >= 1700 && time < 2100) {
//     alert("Good evening");
//     }
// else {
// alert("good night");
// }

// ==================================================
// chapter (14 to 16)
// ====================================================

// Question 1

// var students = ["kamran", "kashif", "haseeb", "amjad", "hasan", "hanif"];
// console.log(students)

// Question 2
// same question repeated

// Question 3

// var subjects = ["science", "math", "urdu"];
// alert("class of " + subjects[1]);

// Question 4

// var numbers= [35, 45, 55];
// alert(numbers);

// Question 5
// var boolArray = [true,false];
// console.log(boolArray);

// Question 6

// var boolean = [10, "book", "human",55 ];
// document.write(boolean)

// Question 7

// var institute=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// for (var i = 0; i < institute.length; i++){
//        document.write(institute[i]+"<br>")
// }
// Question 8

// var students = ["amjad ", "hasan ", "hanif "];
// var scores = [320, 230, 480];
// var total=[500]

// document.write("score of amjad is 320 and percentage of  "+students[0],scores[0]/total[0]*100+"%"+"<br>")
// document.write("score of hasan is 230 and percentage of  "+students[1],scores[1]/total[0]*100+"%"+"<br>")
// document.write("score of hanif is 480 and percentage of  "+students[2],scores[2]/total[0]*100+"%"+"<br>")

// Question 9

// var arr = ["blue","red","white","black"];
// document.write(arr[2])

// arr[4] = "green"
// document.write(arr)
// arr.push("pink");
// document.write(arr)

// arr.pop();
// document.write(arr)

// arr.shift();
// document.write(arr)

// arr.unshift("voilet");
// document.write(arr)

// arr.splice(2,1,"red");
// document.write(arr)

// Question 10

// did not understand the question

// Question 11

// var cities = ["karachi","islamabad","lahore","sialkot","kashmor"];
// var selectedCities=["bahawalpur","faislabad"]
// var selectedCities=cities.slice(1,4);
// document.write(selectedCities)

// Question 12

// var arr = ["This", "is", "my", "cat"];
// document.write(arr)

// Question 13
// did nnot understand
// question 14 
// did not understand

// Question 15

// var mobile=["Apple", "Samsung", 'Motorola', "Nokia", "Sony", "Haier"]
// document.write(mobile[0] +"<br>")
// document.write(mobile[1] +"<br>")
// document.write(mobile[2] +"<br>")
// document.write(mobile[3] +"<br>")
// document.write(mobile[4] +"<br>")
// document.write(mobile[5] +"<br>")

// ==================================================
// chapter (17 to 20)
// ====================================================
// Question 1

// did not understand

// Question 2

// for(var a=1; a<=4; a=a+1) {
//     for (var b=a; b<=a+4 ;b++){
//         document.write(b+" ");
//     }
//     document.write("<br>")
// }

// Question 3
// for(var a=1; a<=10; a=a+1) {
//     for (var b=a; b<=a ;b++){
//         document.write(b+" ");
//     }
//     document.write("<br>")
// }

// Question 4
// var x = prompt("enter multiplication table of ")
// for(var i = 1; i <= 10; i++){
//         document.write(x + "x" + i + "=" + x*i + "<br>")
// }

// Question 5

// var fruits=["Apple", "bananan", 'mango', "orange", "strawberry"]
// document.write(fruits[0] +"<br>")
// document.write(fruits[1] +"<br>")
// document.write(fruits[2] +"<br>")
// document.write(fruits[3] +"<br>")
// document.write(fruits[4] +"<br>")
// document.write(fruits[5] +"<br>")

// Question 7
// var available=false;

// var items=["cake","apple pie","cokie","chips","patties"];
//  var search=prompt("enter search value");
//  if (items.indexOf(search)!==-1){
//      alert("yes "+search+" is available")
//  }
//  else {alert("no "+search+" is not available")}

// Question 10
// for(var a=5; a<=100; a=a+5) {
//     for (var b=a; b<=a ;b++){
//         document.write(b+" ");
//     } 
// }

// Question 6, 8 and 9 did not understand





// -----------------------------------------------------------------------------
//                                 
//                                Chapter 21 t o 25
// =============================================================================

// Question 1


// var a = prompt("enter your first name ");
// var b = prompt("enter your last name");
// var fullName = a+" "+b;
// alert ("Assalamualaikum "+fullName)


// Question 2


// var a=prompt("whats your favorite mobile phone");
// alert("my favorite mobile phone is "+a+" \n length of string is "+a.length)


// Question 3


// var text="Pakistan";
// var b = text.indexOf("n");
// alert("Index of 'n is "+b);


// Question 4


// var text="Hello World";
// var b = text.lastIndexOf("l");
// alert("Last Index of 'l is "+b);


// Question 5


// var text="Pakistan";
// var b = text.charAt(3);
// document.write("character at index 3 is "+b);



// Question 6

// var a = prompt("enter your first name ");
// var b = prompt("enter your last name");
// document.write("Assalamualaikum "+a+b)


// Question 7


// var text="hyderabad";
// newtext=text.replace("hyderabad","islamabad");
// document.write("city hyderabad "+"<br>"+" after replacement ","islamabad")



// Question 8


// var text = "Ali and Sami are best friends. They play cricket and football together";
// var newText = text.replace(/and/g, "&");
// document.write(newText)


// Question 9

// var text = "472";
// var newText =text.replace("472", 472);
// document.write("value : 472 <br> type string: <br>value 472: <br> type number: "+newText)


// Question 10


// var a=prompt("enter any name in small letters");
// a=a.toUpperCase();
// document.write(a)


// Question 11
// did not understand

// var a=prompt("enter any name ");
// a=a.titleCase();

// document.write(a)


// Question 12

// var num="35.36";
// num=num.replace("35.36",3536);
// document.write("Number 35.36 <br> result "+num);



// Question 13

// difficult..did not understand


// Question 14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b=prompt(" welcome to abc backery \n enter name of bakery item you want");
// b=b.toLowerCase();
// for (var i = 0; i <= 4; i++) {
// if (b === a[i]) {
//     alert(b+" is available");
//      }
    
//  }
//  if (b !== a[i]){
//     alert(b+"  not avaiable")
// }



// Question 15

// did not understand

// Question 16

// var university = "University of Karachi";
// var ar = university.split(""); 
// document.write( ar );

// Question 17
// var name=prompt("enter any name ")
// var lastChar = name.charAt(name.length - 1);
// document.write(lastChar)

// Question 18


// var str = "The quick brown fox jumps over the lazy dog";
// str=str.toLocaleLowerCase(),
// document.write("In this paragraph <br> The quick brown fox jumps over the lazy dog <br> the occurence of word 'the is ");
// document.write(str.split("the").length-1);
// document.write(" times.");

// -----------------------------------------------------------------------------
//                                 
//                                Chapter 26 t o 30
// =============================================================================

// Question 1

// var a=prompt("enter positive number");
// var b=Math.round(a);
// var c=Math.floor(a);
// var d=Math.ceil(a);
// document.write(" Value "+a," Round off value "+b," floor value "+c," Ceil value "+d);


// Question 2

// var a=prompt("enter negative number");
// var b=Math.round(a);
// var c=Math.floor(a);
// var d=Math.ceil(a);
// document.write(" Value "+a," Round off value "+b," floor value "+c," Ceil value "+d);

// Question 3

// var a= prompt("Enter any value to find its absolute value");
//  var b = a * -1;
//  document.write("Absolute value is "+b)

// Question 4

// var a = Math.random();
// var b = (a * 6) + 1;
// var c = Math.floor(b);
// document.write("<b>"+"Random dice value "+c)

// Question 5

// var a = Math.random();
// var b = (a * 2) + 1;
// var c = Math.floor(b);
// document.write("<b>"+"Random coin valeue "+c)

// Question 6

// var a = Math.random();
// var b = (a * 100);
// var c = Math.floor(b);
// document.write("<b>"+"Random number between 1 and 100 :  "+c)


// Question 7

// var a=prompt("enter your weight ");
// b=Math.ceil(a);
// document.write("the weight of the user is "+b+" grams")

// Question 8

// var i=prompt("Enter a number between 1 to 10 ");
// if (i==="4"){
//     alert("congrats ,,your code number is correct ")
// }
// else {
//     alert("Try again ")
// }

// -----------------------------------------------------------------------------
//                                 
//                                Chapter 31 t o 34
// =============================================================================

// Question 1

// var a = new Date();
// document.write(a)

// Question 2

// var monthNames = ["January", "February", "March", "April", "May", "June", "July","August", "september", "october", "november", "december"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = monthNames[theMonth];
// alert("current month is : "+nameOfMonth)


// Question 3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("current day is : "+nameOfToday)


// Question 4

// var now = new Date();
// var theDay = now.getDay();
// if (theDay===6){
//     alert("it is fun day");
// }
// if (theDay===5){
//     alert("it is fun day");
// }

// Question 5

// var now = new Date();
// var theDay = now.getMonth();
// if (theDay>16){
//     alert("Firrst fifteen days of the month");
// }
// else {
//     alert("last days of the month")
// }

// Question 6

// var d = new Date();
// var e= d.getMonth();
// var currMins = d.getMinutes();
// var currSecs = d.getSeconds()
// document.write("Current date is :  "+d+"<br>")
// document.write("Current month is :  "+e+"<br>");
// document.write("elapsed minutes are :  "+currMins+"<br>")
// document.write("elapsed seconds are :  "+currSecs+"<br>")




// question 7

// var now = new Date();
// var theDay = now.getHours();
// if (theDay > 12){
//     alert("its PM ");
// }
// if (theDay<12){
//     alert("its AM");
// }

// Question 8

// var today = new Date();
// var laterday = new Date("July 30, 2020");
// document.write("later date  :     "+laterday)

// Question 9

// var today = new Date();
// var currYr = today.getTime();
// var dDiff = currYr / (1000 * 60 * 60 * 24)
// document.write("days passed  :     "+dDiff)

// Question 10

// var today = new Date();
// var nday = new Date("December 05, 2015");
// var msToday = today.getTime();

// var d= msToday/ (1000 * 60 * 60);
// dDiff = Math.floor(d);
// document.write(today+"<br>");
// document.write(nday+"<br>");
// document.write(d+" seconds have passed since 2015")



// Question 11

// var today = new Date();
// var currYr = today.getHours();
// document.write(today+"<br>"),
// document.write("hour passed  :     "+currYr+)

// Question 12

// var today = new Date();
// var laterday = new Date("June 19, 1920");
// document.write(today+"<br>");
// document.write("100 years back  :     "+laterday)

// Question 13

// did not understand

// var today = new Date("June 30, 2020");
// var bday = new Date("September 29, 1984");
// var msToday = today.getTime();

// var msbday = bday.getTime();
// var msDiff = msbday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// document.write(dDiff)

// Question 14

// too difficult

// =============================================================================
// -----------------------------------------------------------------------------
//                                 
//                                Chapter 35 t o 38
// -----------------------------------------------------------------------------
// =============================================================================

// Question 1


// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      alert("Current time is : \n"+ theHr + ":" + theMin+"\nCurrent Date is : \n"+now);
//      }

//      tellTime();

// Question 2

// function fullName() {
// var a =prompt("Enter your first name ");
// var b = prompt("enter your last name ");
// alert ("Your full name is "+a+b)
// }
// fullName();

// Question 3

// function addNumber(){
// var val1=prompt("enter first value");
// var sign=prompt("enter sign operator");
// var val2=prompt("enter second value");
// alert((+val1)+(+val2))
// }
// addNumber();


// Question 4

// function calculator(){
// var val1=prompt("enter first value");
// var sign=prompt("enter sign operator");
// var val2=prompt("enter second value");

// if (sign==="+"){
//     alert("to see the value press enter ")
//     alert((+val1)+(+val2))
// }
// else if (sign==="-"){
//     alert("The value is "+val1-val2)
// }
// else if (sign==="*"){
//     alert("The value is "+val1*val2)
// }
// else if (sign==="/"){
//     alert("The value is "+val1/val2)
// }
// }
// calculator();

// Question 5

// function square(){
//     var val1=prompt("enter first value");
//     var result=val1*val1
//     alert("The square of the value "+val1+" is  "+result)
//     }
//     square();

// Question 6

// function factorial(){
//     var val1=prompt("enter first value");
//     var result=val1*(val1-1)
//     alert("The factorial of the value "+val1+" is  "+result);
    
//     }
//     factorial();

// question 7

// function counting(){
// var x = prompt("enter counting number from ");

// for(var i = x; i <= 100; i++){
//         document.write(i+"<br>");
        
// }
// }
// counting();

// question 8

// function triangle(){
// var val1=prompt("enter base");
// var val2=prompt("enter perpendicular");
// var a = val1*val1;
// var b = val2*val2;
// var c = a+b;
// alert("hypotenous2 = base2 + perpendicular2 is : "+c);
// }
// triangle();

// question 9

// function area(a,b){
//     var a=prompt("enter width ");
//     var b=prompt("enter height ");
//     var c= (a*b);
//     alert("total area is "+c);
// }
// area();

// question 10

// function palindrome(){
// var word = prompt("enter your word");
// var check="";
// for (var i = word.length -1 ;i >= 0 ; i--){
//         check += word[i]
// }

// if (word === check){
//         document.write(word + " is a palindrome word")
// }
// }
// palindrome();

// Question 11

// var a="a quick brown fox ";
// b=a.toUpperCase();
// document.write("Example string : "+a+"<br>");
// document.write("Expected output : "+b);

// Question 12

// function a(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
//   document.write(a("Web Development Tutorial"));

//  question 13

// function a(str, letter) {
//  var b = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) === letter) 
//       {
//       b += 1;
//       }
//   }
//   return b;
// }

// document.write(a('jsresource.com', 'o'));

// question 14

// did not understant

// ============================================================================

//                              chapter 38 to 42

// ============================================================================

// Question 1

// function power(a,b) {
//     alert(a,b);
//      }

// Question 2

// function isLeapYear() { 
//     var year= document.getElementById("year").value; 
      
//     document.getElementById("GFG").innerHTML  
//         = (year % 100 === 0) ? (year % 400 === 0) 
//                              : (year % 4 === 0); 
// } 


// Question 3

// did not understand

// Question 4

// var students = [['danial', 80], ['kamran', 77], ['anees', 88]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }


// Question 5
// Question 6

// var string = "Assalamualaikum to all saylani teachers.How are you.hope you will be fine ";
//     var vowel = ["a", "e", "i", "o", "u"];
//     var new_string = "";
//     var safe = "";

//     for (x = 0; x < string.length; x++)
//     {
//         var removeChar = false;
//         for (y = 0; y < vowel.length; y++)
//         {
//             if (string[x] == vowel[y] && safe != vowel[y])
//             {
//                 if (string[x+1] == vowel[y])
//                 {
//                     safe = vowel[y];
//                     removeChar = true;
//                 }
//                 else
//                 safe = "";

//                 break;
//             }
//         }
//         if (!removeChar)
//         {
//             new_string += string[x];

//             var isVowel = false;
//             for (y = 0; y < vowel.length; y++)
//             {
//                 if (string[x] == vowel[y])
//                 {
//                     isVowel = true;
//                     break;
//                 }
//             }
//             if (!isVowel)
//             safe = "";
//         }
//     }
//     alert(new_string);

// Question 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

// console.log(findOccurrences());

// Question 8
// Question 9
// Question 10

// ============================================================================

//                              chapter 43 to 48

// ============================================================================

// Question 1

// function popup(message) {
    // alert(message);
    //  }
// Question 2

// answer in html

// Question 3

// function foo(){
//     var a=document.getElementById('myTable').deleteRow(0)
// }
// Question 4

// answer in html file 

// Question 5

// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };
// var secondbutton = document.getElementById("decrease"),
//   count = 0;
// secondbutton.onclick = function() {
//   count += -1;
//   secondbutton.innerHTML = "decrease " + count;
// };

// ============================================================================

//                              chapter 49 to 52

// ============================================================================

// Question 1

// function submission()                                    
// { 
//     var name = document.forms["RegForm"]["Name"];               
//     var email = document.forms["RegForm"]["EMail"];    
//     var phone = document.forms["RegForm"]["Telephone"];  
//     var what =  document.forms["RegForm"]["Subject"];  
//     var password = document.forms["RegForm"]["Password"];  
//     var address = document.forms["RegForm"]["Address"];  
   
//     if (name.value == "")                                  
//     { 
//         window.alert("Please enter your name."); 
//         name.focus(); 
//         return false; 
//     } 
   
//     if (address.value == "")                               
//     { 
//         window.alert("Please enter your address."); 
//         address.focus(); 
//         return false; 
//     } 
       
//     if (email.value == "")                                   
//     { 
//         window.alert("Please enter a valid e-mail address."); 
//         email.focus(); 
//         return false; 
//     } 
   
//     if (phone.value == "")                           
//     { 
//         window.alert("Please enter your telephone number."); 
//         phone.focus(); 
//         return false; 
//     } 
   
//     if (password.value == "")                        
//     { 
//         window.alert("Please enter your password"); 
//         password.focus(); 
//         return false; 
//     } 
   
//     if (what.selectedIndex < 1)                  
//     { 
//         alert("Please enter your course."); 
//         what.focus(); 
//         return false; 
//     } 
   
//     return true; 
// } </script> 

// Question 2

// function more() {
//     var expandedParagraph = "<b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi amet mollitia iure veritatis? Cumque, dicta! Corrupti, numquam voluptatum sint atque laboriosam veniam nesciunt est, ea maxime tempora ipsum libero!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi amet mollitia iure veritatis? Cumque, dicta! Corrupti, numquam voluptatum sint atque laboriosam veniam nesciunt est, ea maxime tempora ipsum libero!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi amet mollitia iure veritatis? Cumque, dicta! Corrupti, numquam voluptatum sint atque laboriosam veniam nesciunt est, ea maxime tempora ipsum libero!";
//     document.getElementById("some").innerHTML = expandedParagraph;
//      }
    
// Question 3

// function edit_row(no){

//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }

// ============================================================================

//                              chapter 52 to 57

// ============================================================================

// Question 1

// function zoomin1(){
//     var myImg = document.getElementById("greyCar");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 500){
//         alert("Maximum zoom-in level reached.");
//     } else{
//         myImg.style.width = (currWidth + 50) + "px";
//     } 
// }
// function zoomout1(){
//     var myImg = document.getElementById("greyCar");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 50){
//         alert("Maximum zoom-out level reached.");
//     } else{
//         myImg.style.width = (currWidth - 50) + "px";
//     }
// }
// function zoomin2(){
//     var myImg = document.getElementById("blackCar");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 500){
//         alert("Maximum zoom-in level reached.");
//     } else{
//         myImg.style.width = (currWidth + 50) + "px";
//     } 
// }
// function zoomout2(){
//     var myImg = document.getElementById("blackCar");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 50){
//         alert("Maximum zoom-out level reached.");
//     } else{
//         myImg.style.width = (currWidth - 50) + "px";
//     }
// }
// function zoomin3(){
//     var myImg = document.getElementById("yellowCar");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 500){
//         alert("Maximum zoom-in level reached.");
//     } else{
//         myImg.style.width = (currWidth + 50) + "px";
//     } 
// }
// function zoomout3(){
//     var myImg = document.getElementById("yellowCar");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 50){
//         alert("Maximum zoom-out level reached.");
//     } else{
//         myImg.style.width = (currWidth - 50) + "px";
//     }
// }
// function zoomin4(){
//     var myImg = document.getElementById("greenCar");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 500){
//         alert("Maximum zoom-in level reached.");
//     } else{
//         myImg.style.width = (currWidth + 50) + "px";
//     } 
// }
// function zoomout4(){
//     var myImg = document.getElementById("greenCar");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 50){
//         alert("Maximum zoom-out level reached.");
//     } else{
//         myImg.style.width = (currWidth - 50) + "px";
//     }
// }


// Question 2

// var fontSize = 1;
// function zoomIn() {
// 	fontSize += 0.1;
// 	document.body.style.fontSize = fontSize + "em";
// }
// function zoomOut() {
// 	fontSize -= 0.1;
// 	document.body.style.fontSize = fontSize + "em";
// }


// ============================================================================

//                              chapter 58 to 67

// ============================================================================


// Question 1



// var a=document.getElementById("main-content");
// console.log(a);
// var c = document.body.children;
// console.log(c)

// var f = document.getElementById("main-content").children.length;
// console.log(f)

// var g = document.getElementsByClassName("render").innerHTML;
// console.log(g)

// var b=a.getElementsByTagName("p");
// console.log(b);
// var c=p[8].innerHTML;
// console.log(c)

// var d = document.getElementsByClassName("render");
// console.log(d);
// var e = d.innerHTML;
// console.log(e);




// var nType = targetNode.nodeType("form-content");
// var targetNode = parentNode.childNodes[0];



// Question 2



// var x = document.getElementById("form-content").nodeType;
// console.log(x)
// var y = document.getElementById("lastName").firstChild;
// console.log(y)

// var c = document.getElementById("lastName").childNodes;
// // c[0].style.backgroundColor = "yellow";
// console.log(c)
// var d = document.getElementById("lastName").childNodes.text;
// console.log(d);

// var z = document.getElementById("main-content").firstChild;
// var z1 = document.getElementById("main-content").lastChild;
// console.log(z)
// console.log(z1)

// var f = document.getElementById("lastName").previousSibling.innerHTML;
// console.log(f)

// var k = document.getElementById("lastName");
// l = k.nextSibling;
// console.log(l)
// var s = document.getElementById("lastName");
// var a = s.previousSibling;
// console.log(a)

// var g = document.getElementById("email").parentNode.nodeName;
// console.log(g)
// var h = document.getElementById("email").nodeType;
// console.log(h)


// =================================================================