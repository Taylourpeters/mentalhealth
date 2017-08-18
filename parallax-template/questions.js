$( document ).ready(function() {
    console.log( "ready!" );

    var questions = ["Did you fight with a friend?","Do you have another friend to confide in?", "Do you wish you were different physically?", "Have you intentionally harmed yourself physically in any way?", "Do you intend to inflict self harm in any way?", "Would you consider seeing a therapist?", "Do you have panic attacks?", "Did you go to work today?", "Do you work alot?", "Do you like what you do?", "Even so, is it sometimes overwhelming?", "Do you feel that you are sometimes too sensitive and get hurt too easily?", "Did you have a good day at school or work?", "Was it because of someone else?", "Did you feel appreciated today?", "Did someone special make you feel appreciated?", "Did someone neglect you today?", "Do you like this person?", "Do you want a relationship to happen with this person?", "Did you hang out with friends or family?", "Do you usually get neglected?", "Is it the same person that neglects you?","We are guessing since you rated your day so high, it was a good day... Were we right?", "Did you do activities you like today?", "Did you go to work?", "Did you have fun?", "Was today good because you weren't overwhelmed?", "Do you have a hobby you can do?", "Does that hobby calm you?", "Did someone make an assumption about you that you didn't like?", "Did this help", "Did this help?","Filler answer", "yes thanks"];

    var next = {
    			      0:[1,2],
    			      1:[32,6],
    			      2:[6,11],
                3:[32,4],
                4:[32,27],
                5:[32,3],
                6:[5,5],
                7:[8,29],
                8:[9,29],
                9:[19,32],
                10:[32,29],
                11:[32,7],
                // 12:[,],
                // 13:[,],
                // 14:[,],
                // 15:[,],
                // 16:[,],
                // 17:[,],
                // 18:[,],
                // 19:[,],
                // 20:[,],
                // 21:[,],
                // 22:[,],
                // 23:[,],
                // 24:[,],
                // 25:[,],
                // 26:[,],
                27:[28,32],
                28:[32,32],
                29:[32,1],
                30:[33,3],
                31:[33,5],
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
