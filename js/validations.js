
var quiztitle = "Simulación de Sistemas";

   
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

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
      return this;
    }                                                                                                                           
  });
}		 

var quiz = [
        {
            "question"      :   "Pregunta: Es una técnica numérica para conducir experimentos en una computadora ?",
            "image"         :   "",
            "choices"       :   [
                                    "Simulación",
                                    "Simulación de sistemas",
                                    "Simulación de eventos discretos",
                                    "Simulación de eventos actuales"
                                ],
            "correct"       :   "Simulación",
            "explanation"   :   "la simulación se presenta como una herramienta idónea para ensayar, conocer el funcionamiento de determinados sistemas o anticiparse a problemas.",
        },
        {
            "question"      :   "Pregunta: Es el proceso de diseñar y desarrollar un modelo de un sistema o proceso real y conducir experimentos con el propósito de entender el comportamiento del sistema o evaluar varias estrategias para la operación del sistema.",
            "image"         :   "",
            "choices"       :   [
                                    "Simulación",
                                    "Simulación de sistemas",
                                    "Simulación de eventos discretos",
                                    "Simulación de eventos actuales"
                                ],
            "correct"       :   "Simulación de sistemas",
            "explanation"   :   "La simulacion de sistemas es la representacion analitica apoyada en herramientas matematicas y computacionales que permiten evaluar el impacto que producen cambios en las distintas variables, tambien nos permite la eleccion de recursos optimos para el proceso analizado.",
        },
        {
            "question"      :   "Pregunta: Se basa en el uso de ecuaciones matemáticas y estadísticas",
            "image"         :   "",
            "choices"       :   [
                                    "Simulación",
                                    "Simulación de sistemas",
                                    "Simulación de eventos discretos",
                                    "Simulación de eventos actuales"
                                ],
            "correct"       :   "Simulación de eventos discretos",
            "explanation"   :   "Tiene por finalidad identificar a sistemas en los que los eventos que cambian el estado del mismo ocurren en instantes espaciados en el tiempo, a diferencia de los sistemas cuyo estado puede cambiar continuamente en el tiempo.",
        },
        {
            "question"      :   "Pregunta: ¿Qué es un sistema?",
            "image"         :   "",
            "choices"       :   [
                                    "Es un modelo",
                                    "Es un conjunto de partes no interrelacionadas",
                                    "Es una metodología",
                                    "Es un conjunto de partes interrelacionadas"
                                ],
            "correct"       :   "Es un conjunto de partes interrelacionadas",
            "explanation"   :   "Un sistema es un conjunto de partes que se relacionan entre sí que persiguen un objetivo.",
        },
        {
            "question"      :   "Pregunta: ¿Cuál de los siguientes no es una definición de modelo?",
            "image"         :   "",
            "choices"       :   [
                                    "Es una abstracción de la realidad",
                                    "Es una representación de la realidad que ayuda entender cómo funciona",
                                    "Es una construcción intelectual y descriptiva de una entidad en la cual un observador tiene interés",
                                    "Es un conjunto de partes interrelacionadas"
                                ],
            "correct"       :   "Es un conjunto de partes interrelacionadas",
            "explanation"   :   "Un modelo es una abstracción, representacion de la realidad o construcción de una entidad de interés para entender el funcionamiento.",
        },
        {
            "question"      :   "Pregunta: Modelo con uno o más parámetros aleatorios. Entradas fijas producen salidas diferentes",
            "image"         :   "",
            "choices"       :   [
                                    "Modelo estático",
                                    "Modelo determinístico",
                                    "Modelo estocástico",
                                    "Modelo dinámico"
                                ],
            "correct"       :   "Modelo estocástico",
            "explanation"   :   "En el modelo estocástico el estado de las variables en el siguiente instante de tiempo no se puede determinar con los datos del estado actual",
        },
        {
            "question"      :   "Pregunta: Modelo en el que entradas fijas producen salidas fijas",
            "image"         :   "",
            "choices"       :   [
                                    "Modelo estático",
                                    "Modelo determinístico",
                                    "Modelo estocástico",
                                    "Modelo dinámico"
                                ],
            "correct"       :   "Modelo determinístico",
            "explanation"   :   "En el modelo determinístico el estado de las variables en el siguiente instante de tiempo se puede determinar con los datos del estado actual",
        },
        {
            "question"      :   "Pregunta: Modelo que permite cambios en el tiempo",
            "image"         :   "",
            "choices"       :   [
                                    "Modelo estático",
                                    "Modelo determinístico",
                                    "Modelo estocástico",
                                    "Modelo dinámico"
                                ],
            "correct"       :   "Modelo dinámico",
            "explanation"   :   "En el modelo dinámico el estado de las variables puede cambiar mientras se realiza algún cálculo.",
        },
        {
            "question"      :   "Pregunta: ¿Qué es un sistema?",
            "image"         :   "",
            "choices"       :   [
                                    "Es un modelo",
                                    "Es un conjunto de partes no interrelacionadas",
                                    "Es una metodología",
                                    "Es un conjunto de partes interrelacionadas"
                                ],
            "correct"       :   "Es un conjunto de partes interrelacionadas",
            "explanation"   :   "Un sistema es un conjunto de partes que se relacionan entre sí que persiguen un objetivo.",
        },
        {
            "question"      :   "Pregunta: ¿Cuál de los siguientes no es una definición de modelo?",
            "image"         :   "",
            "choices"       :   [
                                    "Es una abstracción de la realidad",
                                    "Es una representación de la realidad que ayuda entender cómo funciona",
                                    "Es una construcción intelectual y descriptiva de una entidad en la cual un observador tiene interés",
                                    "Es un conjunto de partes interrelacionadas"
                                ],
            "correct"       :   "Es un conjunto de partes interrelacionadas",
            "explanation"   :   "Un modelo es una abstracción, representacion de la realidad o construcción de una entidad de interés para entender el funcionamiento.",
        },
        {
            "question"      :   "Pregunta: Modelo con uno o más parámetros aleatorios. Entradas fijas producen salidas diferentes",
            "image"         :   "",
            "choices"       :   [
                                    "Modelo estático",
                                    "Modelo determinístico",
                                    "Modelo estocástico",
                                    "Modelo dinámico"
                                ],
            "correct"       :   "Modelo estocástico",
            "explanation"   :   "En el modelo estocástico el estado de las variables en el siguiente instante de tiempo no se puede determinar con los datos del estado actual",
        },
        {
            "question"      :   "Pregunta: Modelo en el que entradas fijas producen salidas fijas",
            "image"         :   "",
            "choices"       :   [
                                    "Modelo estático",
                                    "Modelo determinístico",
                                    "Modelo estocástico",
                                    "Modelo dinámico"
                                ],
            "correct"       :   "Modelo determinístico",
            "explanation"   :   "En el modelo determinístico el estado de las variables en el siguiente instante de tiempo se puede determinar con los datos del estado actual",
        },
        {
            "question"      :   "Pregunta: Modelo que permite cambios en el tiempo",
            "image"         :   "",
            "choices"       :   [
                                    "Modelo estático",
                                    "Modelo determinístico",
                                    "Modelo estocástico",
                                    "Modelo dinámico"
                                ],
            "correct"       :   "Modelo dinámico",
            "explanation"   :   "En el modelo dinámico el estado de las variables puede cambiar mientras se realiza algún cálculo.",
        },
        {
            "question"      :   "Pregunta: ¿Cuál de las siguientes herramientas y técnicas es utilizada para mostrar las categorías de defectos más comunes?",
            "image"         :   "",
            "choices"       :   [
                                    "Diagrama de Pareto",
                                    "Diagramas de Control",
                                    "Diagramas de Comportamiento",
                                    "Diagramas de Flujo"
                                ],
            "correct"       :   "Diagrama de Pareto",
            "explanation"   :   "El diagrama de Pareto es utilizado con la finalidad de mostrar las categorías de defectos más frecuentes.",
        },
        {
            "question"      :   "Pregunta: ¿Cuál herramienta o técnica es utilizada para determinar si un proceso es estable o tiene comportamiento predecible?",
            "image"         :   "",
            "choices"       :   [
                                    "Diagrama de Flujo",
                                    "Diagrama de Control",
                                    "Tabla de dispersión",
                                    "Diagrama de Comportamiento"
                                ],
            "correct"       :   "Diagrama de Control",
            "explanation"   :   "El diagrama de Control es usado para determinar si algún proceso es estable o su comportamiento se puede predecir.",
        },
        {
            "question"      :   "Pregunta: ¿Cuando se realiza una inspección?",
            "image"         :   "",
            "choices"       :   [
                                    "En cualquier momento que se produzca un entregable",
                                    "Al final del proyecto",
                                    "Sólo antes de entregar el producto final",
                                    "Al inicio del proyecto"
                                ],
            "correct"       :   "En cualquier momento que se produzca un entregable",
            "explanation"   :   "Una inspección se puede realizar en cualquier momento se tenga un entregable.",
        },
        {
            "question"      :   "Pregunta: Usted está utilizando un Diagrama de Control para analizar defectos, cuando algo en el diagrama lo lleva a concluir que tiene un problema serio de calidad. ¿Cuál es la razón más probable de esto?",
            "image"         :   "",
            "choices"       :   [
                                    "Límites Inferiores de Control",
                                    "Planificar-Hacer-Verificar-Actuar",
                                    "Límites Superiores de Control",
                                    "La regla del 7"
                                ],
            "correct"       :   "La regla del 7",
            "explanation"   :   "Los puntos consecutivos en un Diagrama de Control de Procesosque son ascendentes, descendentes o similares en relación a la media (porarriba o por abajo), indican una tendencia anormal en el proceso, por lotanto deben ser investigados.",
        },
        {
            "question"      :   "Pregunta: ¿Qué herramienta de Control de Calidad es utilizada para analizar procesos viéndolos gráficamente?",
            "image"         :   "",
            "choices"       :   [
                                    "Histograma",
                                    "Diagrama de Pareto",
                                    "Diagrama de Flujo",
                                    "Listas de Verificación"
                                ],
            "correct"       :   "Diagrama de Flujo",
            "explanation"   :   "El diagrama de flujo es una herramienta que se utiliza para analizar procesos observándolos gráficamente.",
        },
        {
            "question"      :   "Pregunta: Usted está viendo un diagrama de control para descubrir si la manera en que está realizando su proyecto se adecua a los estándares de su compañía. ¿Qué proceso está realizando?",
            "image"         :   "",
            "choices"       :   [
                                    "Controlar la Calidad",
                                    "Gestionar la Calidad",
                                    "Aseguramiento de Calidad",
                                    "Planificar la Gestión de la Calidad"
                                ],
            "correct"       :   "Controlar la Calidad",
            "explanation"   :   "",
        },
        {
            "question"      :   "Pregunta: ¿Cuál de los siguientes está asociado con la regla 80/20?",
            "image"         :   "",
            "choices"       :   [
                                    "Diagrama de Control",
                                    "Diagrama de dispersión",
                                    "Diagrama de Pareto",
                                    "Histograma"
                                ],
            "correct"       :   "Diagrama de Pareto",
            "explanation"   :   "Diagrama de Pareto está relacionado con la regla 80/20.",
        }

    ];



quiz.forEach(q => q.choices.scramble());
quiz = shuffle(quiz);
	    
var currentquestion = 0, score = 0, submt=true, picked;

jQuery(document).ready(function($){

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
    function nextQuestion(){
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
    function processQuestion(choice){
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
    function setupButtons(){
        $('.choice').on('click', function(){
            picked = $(this).attr('data-index');
            $('.choice').removeAttr('style').off('mouseout mouseover');
            $(this).css({'font-weight':'bold', 'border-color':'#51a351', 'color':'#51a351'});
            if(submt){
                submt=false;
                $('#submitbutton').css({'color':'#fff','cursor':'pointer'}).on('click', function(){
                    $('.choice').off('click');
                    $(this).off('click');
                    processQuestion(picked);
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
        //add title
        if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
            $(document.createElement('h2')).text(quiztitle).appendTo('#frame');
        } else {
            $(document.createElement('h2')).text("Quiz").appendTo('#frame');
        }

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
            $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
            addChoices(quiz[0]['choices']);

            //add submit button
            $(document.createElement('div')).addClass('btn-success choice-box').attr('id', 'submitbutton').text('- Validar respuesta -').css({'font-weight':'bold', 'color':'#fff','padding':'30px 0', 'border-radius':'10px'}).appendTo('#frame');
            setupButtons();
        }
    }

    init();

});

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

function copyText() {
    var output = document.getElementById("frame").innerHTML;
    document.getElementById("placecontent").value = output;
}

	    
