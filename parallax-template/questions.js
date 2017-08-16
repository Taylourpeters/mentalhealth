$( document ).ready(function() {
    console.log( "ready!" );

    var questions = ["Did you fight with a friend?", "Do you have another friend to confide in?", "Do you wish you were different physically?", "Did you harm yourself physically?", "Are you thinking of harming yourself physically in any way?", "would you consider seeing a therapist?", "Do you have panic attacks?", "Did you go to work today?", "Do you work alot?", "Do you like what you do?", "Even so, is it sometimes overwhelming?", "Do you feel that you are sometimes too sensitive and get hurt too easily?", "First question for taylour6-7?", "First question for taylour8-10?"];

    var next = {
    			0:[1, 2],
    			1:[3, 4],
    			2:[5, 6],
    		};

    var currentQuestionIndex = 0;


    function parse_query_string(query) {
      var vars = query.split("&");
      var query_string = {};
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = decodeURIComponent(pair[1]);
          // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
          var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
          query_string[pair[0]] = arr;
          // If third or later entry with this name
        } else {
          query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
      }
      return query_string;
    }

    // figures out what value is in URL
    var query = window.location.search.substring(1);
    var qs = parse_query_string(query);
    console.log(qs, qs["val"]);
    var value_from_first_page = parseInt(qs["val"]);

    if (value_from_first_page >= 8)  {
        console.log("taylour8-10");
        currentQuestionIndex = 13;
    }
    else if (value_from_first_page >= 6) {
        console.log("taylour6-7");
        currentQuestionIndex = 12;
    }
    else if (value_from_first_page >= 4) {
        console.log("clemone4-5"); 
        currentQuestionIndex = 7;
    }
    else {
        console.log("clemone1-3");
        currentQuestionIndex = 0;
    }

    $("#question").text(questions[currentQuestionIndex]);


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
