






 



//Q2






 var quizobj=[
    {  question:"<b>Q1. What is the capital of Pakistan</b>",
       answer  :"Islamabad",
       options:["Multan",
               "Faisalabad",
                "Karachi",
                 "Islamabad",
               ]

    },
    {  question:"<b>Q2. Which sport is the national sport of Pakistan</b>",
    answer  :"Hockey",
    options:["Cricket",
             "Football",
             "Hockey",
             "Basketball",
         ]


 },

 {  question:"<b>Q3. Largest country by size</b>",
    answer  :"Russia",
    options:["Russia",
             "China",
             "America",
             "France",
         ]


 },


 {  question:"<b>Q4. What is name of PM of Pakistan</b>",
 answer  :"Imran Khan",
 options:["Donald Trump",
         "Putin",
         "Modi",
          "Imran Khan"

 ]

 },


 {  question:"<b>Q5. Who is the inventor of Microsoft</b>",
 answer  :"Bill Gates",
 options:["Steve Jobs",
         "Jack Ma",
         "Mark Zuckerberg",
         "Bill Gates",
         

 ]

 },
 
 ]






 console.log(quizobj[1])


var questionCount=0;

 function showQues(e){
     var ques=document.getElementById("ques");
     ques.innerHTML=quizobj[e].question;
     var btn_test=document.getElementsByClassName(" btn test");

     for(var i=0;i<btn_test.length;i++){

        btn_test[i].innerHTML=quizobj[e].options[i];
   
     
     }
 }


 





function nextQues(){
    // var next=document.getElementById("next");
    questionCount++;
    
    showQues(questionCount);
    var test=document.getElementById("validate");
    test.removeAttribute("disabled");
    
   
    var btn_test=document.getElementsByClassName(" btn test");
    for(var i =0;i<=btn_test.length;i++){
        btn_test[i].style.backgroundColor="royalblue"
    }

  
}









var score=document.getElementById("score");
score.value="0";
score.disabled="true"












function activeBtn(e){
    var btn_test=document.getElementsByClassName("btn test");
 
  e.classList.add("color")
  console.log(e.innerHTML);
  
   

 for(var i=0 ;i<=1;i++){
 var test=document.getElementById("validate");
 test.style.display="inline";
 
 
 }
 test.onclick= function validateChck(s){
     
    s.value==questionCount.value;
    if(e.innerHTML==quizobj[questionCount].answer  ){
            e.style.backgroundColor="green"
       console.log("a")
        score.value++
        test.disabled="true"
    } else{
        e.style.backgroundColor="red";
        test.disabled="true"
    }

    

    

    
}


}
function validateAns(){
    var color=document.getElementsByClassName("color");
    


}

function removeActive(){
    var color=document.getElementsByClassName("color");
    color.classList.remove("color")
}





