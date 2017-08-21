$( document ).ready(function() {
    console.log( "ready!" );


    var questions = ["Did you fight with a friend?", "Do you have another friend to confide in?", "Do you wish you were different physically?",
                     "Have you intentionally harmed yourself physically in any way?", "Do you intend to inflict self harm in any way?",
                     "Would you consider seeing a therapist?", "Do you have panic attacks?", "Did you go to work today?", "Do you work alot?",
                     "Do you like what you do?", "Even so, is it sometimes overwhelming?",
                     "Do you feel that you are sometimes too sensitive and get hurt too easily?",
                     "Did you have a good day today?", "Was it because of someone else?", "Did you feel appreciated today?",
                     " Don't worry about them, you don't need other people to be happy.",
                     "Take a deep calming breath. Try listening to calming music or even take a bath. (Hey, it works)",
                     "We are so glad you had a good day today! You can always improve your day by unwinding with a favorite tv show or a nice book or anything really.",
                     "Don't worry about the haters. At the end of the day they will not impact your life in any way if you don't let them",
                     "Was it because of someone else?", "Was it something you did?",
                     "Everybody makes mistakes. They are apart of life. You learn from mistakes so making some is not the end of the world.",
                     "We are guessing since you rated your day so high, it was a good day... Were we right?", "Did you do activities you like today?",
                     "Were you overwhelmed?",
                     "Take a break. Catch up on your favorite tv show, have a private dance party, anything you do to calm down. Your sanity depends on it.", "Find something that interests you like a sport or a hobby you really wanted to try and invest some of your time in doing that. Your sanity depends on it.", "Do you have a hobby you can do?", "Does that hobby calm you?", "Did someone make an assumption about you that you didn't like?", "Don't worry about the haters. At the end of the day they will not impact your life in any way if you don't let them. Did this help?", "Take a break. Catch up on your favorite tv show, have a private dance party, anything you do to calm down. Your sanity depends on it. Did this help?","Talk to your friend and tell them what's going on and figure out a plan together", "Yes Thanks!!!", "Take a deep breath... We need you to be brave and call this number...", "Talk to your physician and tell them what's going on and they'll be able to take those steps to help you.", "Do that hobby whenever you're feeling that life is getting you down."];

    var next = {
    			0:[1,2],
    			1:[32,6],
    			2:[6,11],
                3:[34,4],
                4:[34,27],
                5:[35,3],
                6:[5,5],
                7:[8,29],
                8:[9,29],
                9:[10,31],
                10:[31,29],
                11:[30,7],
                12:[13,19],
                13:[14,15],
                14:[17,15],
                19:[18,20],
                20:[21,16],
                22:[23,19],
                23:[17,24],
                24:[25,16],
                27:[28,26],
                28:[36,26],
                29:[30,1],
                30:[33,1],
                31:[33,1],
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
        currentQuestionIndex = 22;
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
      if (next_question_index == 16 || next_question_index==26 || next_question_index==15 || next_question_index==17 || next_question_index==18 || next_question_index==21 || next_question_index==25 || next_question_index==32 || next_question_index==33 || next_question_index==34 || next_question_index==35 || next_question_index==36){
        $("#yes").hide();
        $("#no").hide();
      }
    	$("#question").text(questions[next_question_index]);
    	currentQuestionIndex = next_question_index;
      console.log(next_question_index);

    }

    function pressedNo() {
    	var next_question_options = next[currentQuestionIndex];
    	var next_question_index = next_question_options[1];
      if (next_question_index == 16 || next_question_index==26 || next_question_index==15 || next_question_index==17 || next_question_index==18 || next_question_index==21 || next_question_index==25 || next_question_index==32 || next_question_index==33 || next_question_index==34 || next_question_index==35 || next_question_index==36){
        $("#yes").hide();
        $("#no").hide();
      }
    	$("#question").text(questions[next_question_index]);
    	currentQuestionIndex = next_question_index;
      console.log(next_question_index);
    }


    // functions that control clicking on buttons
    $("#yes_button").click(function(){
    	pressedYes();
	});

	$("#no_button").click(function(){
    	pressedNo();
	});


});
