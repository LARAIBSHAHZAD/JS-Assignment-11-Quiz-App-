var firebaseConfig = {
    apiKey: "AIzaSyBcBQvrDbj7Nx9e8Lrb8rBXcHVBFy6X4rY",
    authDomain: "quiz-app-0000.firebaseapp.com",
    databaseURL: "https://quiz-app-0000-default-rtdb.firebaseio.com",
    projectId: "quiz-app-0000",
    storageBucket: "quiz-app-0000.appspot.com",
    messagingSenderId: "674002022488",
    appId: "1:674002022488:web:86a26e1f5d5a5246615a2d"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

//   console.log(app.database)



function getDataAndSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var infoObj = {
        name: name,
        email: email
    };

    var key = Math.random() * 324587691;

    var databaseRef = firebase.database().ref("Users/Information/" + Math.round(key));

    databaseRef.set(infoObj)
        .then(function() {
            window.location.href = "Quiz.html";
        })
        .catch(function(error) {
            console.error("Error adding data to Firebase: ", error);
        });
}



var questions = [
    {
        question:"HTML stands for",
        option1:"Hyper Text markup language",
        option2:"Hyper Link markup language",
        option3:"Hyper Text makeup language",
        correctAns:"Hyper Text markup language"
    },
    {
        question:"CSS stands for",
        option1:"Cascading Style sheet",
        option2:"Cascading Styling sheet",
        option3:"Cascading super sheet",
        correctAns:"Cascading Style sheet"
    },
    {
        question:"In how many ways can CSS be written in?",
        option1:"1",
        option2:"2",
        option3:"3",
        correctAns:"3"
    },
    {
        question:"Which tag gives your the largest heading in html",
        option1:"<h6>",
        option2:"<h2>",
        option3:"<h1>",
        correctAns:"<h1>"
    },
    {
        question:"how many data types in js?",
        option1:"6",
        option2:"7",
        option3:"8",
        correctAns:"8"
    },
    {
        question:"how many days in febuary",
        option1:"30",
        option2:"28",
        option3:"29",
        correctAns:"28"
    },
    {
        question:"how is the first islamic country to make nuclear bomb?",
        option1:"Pakistan",
        option2:"Turkey",
        option3:"Morroco",
        correctAns:"Pakistan"
    },
    {
        question:"In which country ICC cricket world cup 2023 is happening?",
        option1:"Pakistan",
        option2:"India",
        option3:"Dubai",
        correctAns:"India"
    }
];


var question = document.getElementById("ques");

var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var button = document.getElementById("btn");
var getOptions = document.getElementsByName("options");
var time = document.getElementById("timer");
var score = 0;
var index = 0;
var min = 1;
var sec = 59;

setInterval(function(){
    time.innerHTML = `${min}:${sec}`
    sec--;
    if(sec<0){
        min--;
        sec = 59;
    }
    if(min<0){
        min = 1;
        sec = 59;
        nextOption()
    }
},1000)


function nextOption(){
    for(var i = 0; i < getOptions.length; i++){
    
        if(getOptions[i].checked){
            var selectedValue = getOptions[i].value;
            var selectedQuestion = questions[index - 1]["question"];
            var selectedAns = questions[index - 1][`option${selectedValue}`]
            var correctAns = questions[index -1][`correctAns`]
            if(correctAns === selectedAns){
                score++;
            }
        }
        getOptions[i].checked =false;
    }
    btn.disabled = true;
    
    if(index > questions.length - 1)
    {
        var percentage = ((score / questions.length)*100).toFixed(2);
        
        if(percentage >= 80 && percentage <= 100)
        {
            Swal.fire(
                'Good job!',
                `your percentage is ${percentage}`,
                'success'
            )    
        }
        else if(percentage >= 50 && percentage <= 80)
        {
            Swal.fire(
                'You have to work hard',
                `your percentage is ${percentage}`,
                'warning'
            )
        }
        else if(percentage >= 0 && percentage <= 50)
        {
            Swal.fire(
                'You are failed',
                `your percentage is ${percentage}`,
                'error'
            )
        }    
    }
    else
    {
        question.innerHTML = questions[index].question;
        
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
    }
}

function clickled()
{
    button.disabled = false;
}