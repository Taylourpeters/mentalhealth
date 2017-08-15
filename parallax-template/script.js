$( document ).ready(function() {
    console.log( "ready!" );

    var questions = ["0", "1", "2", "3", "4", "5"];

    var next = {
    			0:[1, 2],
    			1:[3, 4],
    			2:[5, 6],
    		};

    var currentQuestionIndex = 0;

    // functions that change the value of the question
    function pressedYes() {
    	var next_question_options = next[currentQuestionIndex];
    	var next_question_index = next_question_options[0];
    	$("#question").text(questions[next_question_index]);
    	currentQuestionIndex = next_question_index;
    }

    function pressedNo() {
    	var next_question_options = next[currentQuestionIndex];
    	var next_question_index = next_question_options[1];
    	$("#question").text(questions[next_question_index]);
    	currentQuestionIndex = next_question_index;
    }


    // functions that control clicking on buttons
    $("#yes_button").click(function(){
    	pressedYes();
	});

	$("#no_button").click(function(){
    	pressedNo();
	});

    
});