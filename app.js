$(document).ready(function(){	
	//quiz question array syntax
	var questions = [{
		question: "Question #1: Who were the first surfers?",
		choices: ["Spanish colonists who came to California.", "Australian Aboriginals.", "The Vikings", "Ancient Polynesians"],
		qNum: 0,
		correct: 3,
		fact: "Surfing was invented by Ancient Polynesians some time between 500 and 1000 A.D.",
		},
	{
		question: "Question #2: The pinnacle of professional surfing is the ASP world tour. The Quiksilver Pro is the first stop on the tour's itinerary. In what country is the Quicksilver Pro held?",
		choices: ["Brazil", "Australia", "United States", "South Africa"],
		qNum: 1,
		correct: 1,
		fact: "The Quiksilver Pro is held at one of the longest surf breaks in the world in Coolangatta, Australia. The break stretches across 4 named beaches and is so long that only a small section of the wave needs to be fenced off for competition use while the rest is left open to the public.",
	},
	{
		question: "Question #3: Which of these four major surf wear companies was not founded in Australia?",
		choices: ["Rip Curl", "Billabong", "Quiksilver", "O'Neill"],
		qNum: 2,
		correct: 3,
		fact: "Billabong, Rip Curl and Quiksilver were all founded in Australia. Billabong and Rip Curl remain Australian-based, but Quiksilver moved to Huntington Beach, California. Premier wetsuit manufacturer, O'Neill, was founded in San Francisco, California, and later moved to Santa Cruz.",
	},
	{
		question: "Question #4: Of the four main surfboard types, which is traditionally the shortest?",
		choices: ["Shortboard", "Mini-mal", "Malibu", "Fish"],
		qNum: 3,
		correct: 3,
		fact: "The fish surfboard is traditionally a length of about 5 ft. 5in. The Malibu is the generic longboard shape, anything from 9' to 16' in length, the mini-mal is the typical beginners' board in the range of 7' to 9' in length. Shortboards vary a lot in length, but tend to be a few inches longer than the surfer who rides it.",
	},
	{
		question: "Question #5: On what Hawaiian island is the Banzai Pipeline located?",
		choices: ["Maui", "Kauai", "Oahu", "Hawaii"],
		qNum: 4,
		correct: 2,
		fact: "Oahu is home to many world famous surf breaks, including the Banzai Pipeline as well as Sunset, Waiemea, and Makaha."
	}]

	//global variable; reusable values
		var numberCorrect = 0;
		var currentQuestion = 0;

		$("#q-wrapper").on("click", "#submit", function() {
			updateScore();
			currentQuestion++;
			nextQuestion();
		});

		$("#q-wrapper").on("click", "#retry", function() {
			numberCorrect = 0;
			currentQuestion = 0;
			var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answers"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div class="myButton"><input type="button" id="submit" value="Submit!"></span><input type="button" id="retry" value="Try Again!"></div>';
			$("#q-wrapper").html(newQuestion);
			$(".fact").html("");
	});

		function updateScore() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
    }}

	//if/else statement for questions; if 'current question' is less than 5, remove following... hide previous fact... show 'new question'
	function nextQuestion() {
		if (currentQuestion < 5) {
			$(".question").remove();
			$("#answers input").remove();
			$("#answers span").remove();
			$(".fact").hide();
			var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answers"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div class="myButton"><input type="button" id="submit" value="Submit!"></span><input type="button" id="retry" value="Try Again!"></div>';
			$("#q-wrapper").html(newQuestion);
			var factText = questions[currentQuestion-1].fact;
			$(".fact").html(factText).fadeIn();
		}
		else {
			$(".question").remove();
			$("#answers input").remove();
			$("#answers span").remove();
			$(".fact").fadeOut();
			$("#submit").css("display", "none");
			$("#retry").css("display", "inline");
			var factText = questions[currentQuestion-1].fact;
			$(".fact").html(factText);
			if (numberCorrect == 1) {
				var finalScore = '<span id="final">Congrats on finishing! You correctly answered '+numberCorrect+' question.';
				$("#answers").html(finalScore);	
			}
			else {
				var finalScore = '<span id="final">Congrats on finishing! You correctly answered '+numberCorrect+' questions.';
				$("#answers").html(finalScore);	
			}
        }
    }
});