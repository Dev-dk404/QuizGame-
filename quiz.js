


//create some constants for html
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
var Answer;
//const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
var name= prompt("Your name please:");




// create our questions
let questions = [
    {
        question : "Who is the father of computing?",
        choiceA : "<input type='radio' name='choices1' value='A'/>Alan Turing",
        choiceB : "<input type='radio' name='choices1' value='B'/>Charles Babbage",
        choiceC : "<input type='radio' name='choices1' value='C'/>Steve Jobs",
        correct : "B"
    },{
        question : "Who is the CEO of Google?",
        choiceA : "<input type='radio' name='choices1' value='A'/>Satya Nadella",
        choiceB : "<input type='radio' name='choices1' value='B'/>Sundar Pichai",
        choiceC : "<input type='radio' name='choices1' value='C'/>Steve Ballmer",
        correct : "B"
    },{
        question : "Which is the Heighest Mountain in the World?",
        choiceA : "<input type='radio' name='choices1' value='A'/>Everest",
        choiceB : "<input type='radio' name='choices1' value='B'/>K2",
        choiceC : "<input type='radio' name='choices1' value='C'/>Annapurna",
        correct : "A"
    },{
        question: "Which one is london Eye?",
        choiceA :'<input type="image"  value="A" name="choices1" src="images/img01.jpg"  style="width:150px; height:100px; margin:2%;" />',
        choiceB: '<input type="image"  value="B" name="choices1" src="images/img02.jpg"   style="width:150px; height:100px; margin:2%;" />',
        choiceC:'<input type="image"  value="C" name="choices1" src="images/img03.jpg"  style="width:150px; height:100px; margin:2%;" />',
        correct : "C"

    },{
        question : "Who is the CEO of Microsoft?",
        choiceA : "<input type='radio' name='choices1' value='A'/>Bill Gates",
        choiceB : "<input type='radio' name='choices1' value='B'/>Satya Nadella",
        choiceC : "<input type='radio' name='choices1' value='C'/>Sundar Pichai",
        correct : "B"
    },{
        question: "Select the photo of Machu Picchu.",
        choiceA :'<input type="image"  value="A" name="choices1"  src="images/img04.jpg"  style="width:150px; height:100px; margin:2%;" />',
        choiceB: '<input type="image"  value="B" name="choices1" src="images/img05.jpg"  style="width:150px; height:100px; margin:2%;" />',
        choiceC:'<input type="image" value="C" name="choices1" src="images/img06.jpg"  style="width:150px; height:100px; margin:2%;" />',
        correct : "A"
    },{
        question: 'What is the most expensive substance on Earth?',
        choiceA: "<input type='radio' name='choices1' value='A'/>Ruby",
        choiceB: "<input type='radio' name='choices1' value='B'/>Gold",
        choiceC: "<input type='radio' name='choices1' value='C'/>Antimatter",
        correct: "C",
    },{
        question: "Which is flag of Nepal?",
        choiceA :'<input type="image"  value="A" name="choices1"  src="images/img07.png"  style="width:150px; height:100px; margin:2%;" />',
        choiceB: '<input type="image"  value="B" name="choices1" src="images/img08.jpg"  style="width:150px; height:100px; margin:2%;" />',
        choiceC:'<input type="image" value="C" name="choices1" src="images/img09.jpg"  style="width:150px; height:100px; margin:2%;" />',
        correct : "A"
    }, { 
        question : "From where did Covid-19 spread?",
        choiceA : "<input type='radio' name='choices1' value='A'/>Madrid, Spain",
        choiceB : "<input type='radio' name='choices1' value='B'/>Wuhan,China",
        choiceC : "<input type='radio' name='choices1' value='C'/>Rome, Italy",
        correct : "B"
    },{
        question : "Which continent is called peninsula of peninsulas?",
        choiceA : "<input type='radio' name='choices1' value='A'/>Africa",
        choiceB : "<input type='radio' name='choices1' value='B'/>Asia",
        choiceC : "<input type='radio' name='choices1' value='C'/>Europe",
        correct : "C"
    }

];

// create some variables

const lastQuestion = questions.length - 1;
 
  // let runningQuestion = 0;//Math.floor(Math.random()*questions.length);
 
  function getRandomnum(){
     return Math.floor(Math.random()*questions.length);
    }
    var runningQuestion=getRandomnum();
   var q = questions[runningQuestion];
  

 

// const questionTime = 10; // 10s
// const gaugeWidth = 150; // 150px
// const gaugeUnit = gaugeWidth / questionTime;
// let TIMER;
let score = 0;

start.addEventListener("click",startQuiz);

  
// start quiz
function startQuiz(){
    
    begin.style.display = "none";
   // displayname();
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    //renderCounter();
    // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

  // render a question

function renderQuestion(){
        
    // do{
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function renderProgress(){
    for(let qIndex = 0; qIndex < 5; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function nextSlide(){
    getRandomnum();
    runningQuestion=getRandomnum();
    q=questions[runningQuestion];
    renderQuestion();

}
var ans="";
function save(par){
    ans=par;
}

function checkAnswer(answer){
    if( answer == q.correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }

  }
let Count=0;
var button=document.getElementById("submit");
button.onclick = function() {
            checkAnswer(ans);
            Count+=1;
            if (Count<5){

                 nextSlide();
                }
             else{
                scoreRender();
             }
         }

// answer is correct
function answerIsCorrect(){
    document.getElementById(Count).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(Count).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/5);
    
    // choose the image based on the scorePerCent
     // let img = (scorePerCent >= 80) ? "img/5.png" :
     //          (scorePerCent >= 60) ? "img/4.png" :
     //          (scorePerCent >= 40) ? "img/3.png" :
     //          (scorePerCent >= 20) ? "img/2.png" :
     //          "img/1.png";
     alert("Hi "+name+",Your score is "+ scorePerCent+"%");

 
   // scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ name + ",You Scored "+ scorePerCent +"%</p>";
}

    // if (Count=5){
    //     scoreRender();
    // }
    
    // button.onclick = function() {

    //         Count+=1;
        
        
// }while(Count<5);
// }

// function rendernextQuest(){
//     if (count<4){
//         //const nextQues=questions[Math.floor(Math.random()*questions.length)];//
//      question.innerHTML = "<p>"+ nextQues.question +"</p>";
//     choiceA.innerHTML = nextQues.choiceA;
//     choiceB.innerHTML = nextQues.choiceB;
//     choiceC.innerHTML = nextQues.choiceC;
// }
//     else{
//     scoreRender();
// }
// count++;



// render progress

//submitting value
//  function submit(){
//     var A=document.getElementById("A").value;
//     var B=document.getElementById("B").value;
//     var C=document.getElementById("C").value;
//     //var x=document.getElementById('form_id');
//     if(A.checked=true){
//         Answer=A ;
//     }
    
//     else if (B.checked=true){
//         Answer=B;
//     }
//      else{
//         alert("nothing is selected.");
    
//    }
// };
        
    // else if (c.checked==true){
    //     Answer=c;
    // }
       
    

    // else if(B.checked==true)
    //      x[0].submit();
    //  else if (C.checked=true) 
    //      x[0].submit();
     



// }

// counter render

// function renderCounter(){
//     if(count <= questionTime){
//         counter.innerHTML = count;
//         timeGauge.style.width = count * gaugeUnit + "px";
//         count++
//     }else{
//         count = 0;
//         // change progress color to red
//         answerIsWrong();
//         if(runningQuestion < lastQuestion){
//             runningQuestion++;
//             renderQuestion();
//         }else{
//             // end the quiz and show the score
//             // clearInterval(TIMER);
//             scoreRender();
//         }
//     }
// }

// checkAnwer





             

    // if(runningQuestion < lastQuestion){
    //     //runningQuestion++;
    //     renderQuestion();
    // }else{
    //     // end the quiz and show the score
    //     // clearInterval(TIMER);
    //     scoreRender();
    // }








