$( document ).ready(function() {
    console.log( "ready!" );

    var questions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

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

    if (value_from_first_page >= )  {
        console.log("taylour8-10");
        currentQuestionIndex = 1;
    }
    else if (value_from_first_page >= 5) {
        console.log("taylor6-7");
        currentQuestionIndex = 2;
    }
    else if (value_from_first_page >=) {
        console.log("")
    }
    else {
        console.log("sad");
        currentQuestionIndex = 4;
    }

    //$("#question").text(questions[currentQuestionIndex]);


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
