
var quiztitle = "Simulación de Sistemas";

   
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }


  return array;
}
	    
if (!("scramble" in Array.prototype)) {
  Object.defineProperty(Array.prototype, "scramble", {
    enumerable: false,
    value: function() {
      var o, i, ln = this.length;
      while (ln--) {
        i = Math.random() * (ln + 1) | 0;
        o = this[ln];
        this[ln] = this[i];
        this[i] = o;
      }
    //   console.log(this);
      return this;
    }                                                                                                                           
  });
}		 


const firebaseConfig = {
    apiKey: "AIzaSyCEp3cM3MdtjfvKGJhclKm6FZsjpbdmO8U",
    authDomain: "examen-59a7c.firebaseapp.com",
    databaseURL: "https://examen-59a7c.firebaseio.com",
    projectId: "examen-59a7c",
    storageBucket: "",
    messagingSenderId: "686450629213",
    appId: "1:686450629213:web:ba9659a5a31d9216"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




// $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback', function(data) {
//     //data is the JSON string
// });

// console.log(quiz);



// quiz.forEach(q => q.choices.scramble());
// quiz = shuffle(quiz);
	    
var currentquestion = 0, score = 0, submt=true, picked, quiz;


$(window).on('load', function(){

// jQuery(document).ready(function($){
// 
    /**
     * HTML Encoding function for alt tags and attributes to prevent messy
     * data appearing inside tag attributes.
     */
    function htmlEncode(value){
      return $(document.createElement('div')).text(value).html();
    }

    /**
     * This will add the individual choices for each question to the ul#choice-block
     *
     * @param {choices} array The choices from each question
     */
    function addChoices(choices){
        if(typeof choices !== "undefined" && $.type(choices) == "array"){
            $('#choice-block').empty();
            for(var i=0;i<choices.length; i++){
            $(document.createElement('li')).addClass('choice choice-box btn').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
            }
        }
    }

    /**
     * Resets all of the fields to prepare for next question
     */
    function nextQuestion(quiz){
        submt = true;
        $('#explanation').empty();
        $('#question').text(quiz[currentquestion]['question']);
        $('#pager').text('Pregunta ' + Number(currentquestion + 1) + ' de ' + quiz.length);
        if(quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != ""){
            if($('#question-image').length == 0){
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
            } else {
                $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
            }
        } else {
            $('#question-image').remove();
        }
        addChoices(quiz[currentquestion]['choices']);
        setupButtons();

        jQuery(document).ready(function($){
            $("#question").html(function(){
                var text= $(this).text().trim().split(" ");
                var first = text.shift();
                return (text.length > 0 ? "<span class='number'>"+ first +"</span> " : first) + text.join(" ");
            });

            $('p.pager').each(function(){
                var text = $(this).text().split(' ');
                if(text.length < 2)
                    return;

                text[1] = '<span class="qnumber">'+text[1]+'</span>';
                $(this).html(
                    text.join(' ')
                );
            });

        });

    }

    /**
     * After a selection is submitted, checks if its the right answer
     *
     * @param {choice} number The li zero-based index of the choice picked
     */
    function processQuestion(choice , quiz){
        if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
            $('.choice').eq(choice).addClass('btn-success').css({'font-weight':'bold', 'border-color':'#51a351', 'color':'#fff'});
            $('#explanation').html('<span class="correct">CORRECTO!</span> ' + htmlEncode(quiz[currentquestion]['explanation']));
            score++;
        } else {
            $('.choice').eq(choice).addClass('btn-danger').css({'font-weight':'bold', 'border-color':'#f93939', 'color':'#fff'});
            $('#explanation').html('<span class="incorrect">INCORRECTO!</span> ' + htmlEncode(quiz[currentquestion]['explanation']));
        }
        currentquestion++;

        if(currentquestion == quiz.length){
            $('#submitbutton').html('RESULTADO FINAL').removeClass('btn-success').addClass('btn-info').css({'border-color':'#3a87ad', 'color':'#fff'}).on('click', function(){
                $(this).text('GET QUIZ RESULTS').on('click');
                endQuiz();
            })

        } else if (currentquestion < quiz.length){
            $('#submitbutton').html('Siguiente pregunta &raquo;').removeClass('btn-success').addClass('btn-warning').css({'font-weight':'bold', 'border-color':'#faa732', 'color':'#fff'}).on('click', function(){
                $(this).text('- VALIDAR RESPUESTA -').removeClass('btn-warning').addClass('btn-success').css({'font-weight':'bold', 'border-color':'#51a351', 'color':'#fff'}).on('click');
                nextQuestion();
            })
        } 
    }

    /**
     * Sets up the event listeners for each button.
     */
    function setupButtons(quiz){
        $('.choice').on('click', function(){
            picked = $(this).attr('data-index');
            $('.choice').removeAttr('style').off('mouseout mouseover');
            $(this).css({'font-weight':'bold', 'border-color':'#51a351', 'color':'#51a351'});
            if(submt){
                submt=false;
                $('#submitbutton').css({'color':'#fff','cursor':'pointer'}).on('click', function(){
                    $('.choice').off('click');
                    $(this).off('click');
                    processQuestion(picked, quiz);
                });
            }
        })
    }

    /**
     * Quiz ends, display a message.
     */
    function endQuiz(){
        var endQuestions = "Fin de la evaluación!";
        document.getElementById("pager").innerHTML = endQuestions;
        $('#explanation').empty();
        $('#question').empty();
        $('#choice-block').empty();
        $('#submitbutton').remove();
        $('.rsform-block-submit').addClass('show');
        $('#question').text("Obtuviste " + score + " aciertos de " + quiz.length + " preguntas. Calificación final: ");
        /*$(document.createElement('h5')).addClass('score').text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');*/
        $(document.createElement('h5')).addClass('score').text(Math.round(score * 1) + ' ptos').insertAfter('#question');
    }




    /**
     * Runs the first time and creates all of the elements for the quiz
     */
    function init(){

        if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
            $(document.createElement('h2')).text(quiztitle).appendTo('#frame');
        } else {
            $(document.createElement('h2')).text("Quiz").appendTo('#frame');
        }

        var database = firebase.database();
        var ref = database.ref('questions');
        var quiz;
        console.log(1);
        ref.on('value', gotData);
        console.log(3);
        function gotData(data){
            // quiz = data.val();
            // console.log(data.val())
            console.log(2);
            var returnArr = [];

            data.forEach(function(childData) {
                var item = childData.val();
                item.key = childData.key;
        
                returnArr.push(item);
            });
            // console.log(returnArr);
        
            quiz =  returnArr;

        
        
        // function errData (err){
        //     console.log("Error!")
        //     console.log(err)
        // }
            console.log(quiz);
        
        // console.log(quiz);
        //add title


        

            //add pager and questions
            if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
                
                //add pager
                $(document.createElement('p')).addClass('pager').attr('id','pager').text('Pregunta 1 de ' + quiz.length).appendTo('#frame');
                //add first question
                $(document.createElement('h3')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
                //add image if present
                if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
                }

                $(document.createElement('p')).addClass('explanation').attr('id','explanation').html('').appendTo('#frame');

                //questions holder
                $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

                //add choices
                addChoices(quiz[0]['choices']);

                //add submit button
                $(document.createElement('div')).addClass('btn-success choice-box').attr('id', 'submitbutton').text('- Validar respuesta -').css({'font-weight':'bold', 'color':'#fff','padding':'30px 0', 'border-radius':'10px'}).appendTo('#frame');

                setupButtons(quiz);
            }

        }

    }


    function gotData(data){
        quiz = data.val();
        console.log(quiz.length);
        quiz.forEach(q => q.choices.scramble());
        quiz = shuffle(quiz);
    
        //return data.val();
    }
    
    function errData (err){
        console.log("Error!");
        console.log(err);
    }
    

    init();

});


$(window).on('load', function(){
// $(window).load(function(){
// jQuery(document).ready(function($){

    $("#question").html(function(){
        // console.log($("#question"));
    var text= $(this).text().trim().split(" ");
    var first = text.shift();
        return (text.length > 0 ? "<span class='number'>"+ first +"</span> " : first) + text.join(" ");
    });

    $('p.pager').each(function(){
        var text = $(this).text().split(' ');
        if(text.length < 2)
            return;

        text[1] = '<span class="qnumber">'+text[1]+'</span>';
        $(this).html(
            text.join(' ')
        );
    });

});	

function copyText() {
    var output = document.getElementById("frame").innerHTML;
    document.getElementById("placecontent").value = output;
}
	
