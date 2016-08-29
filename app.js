$(document).ready(function() {
	
	/* When the Start button is clicked, the first question is shown */
	$("#startButton").mouseup(function() {

		event.preventDefault();

		$("#startPage").hide();
		$(".questionHeader").show();
		$("#questionOne").show();
	});

	/* Setting question count variable, convert to number from string as well */
        var currentQuestion = +($("#questionCount").text());

    /* Setting correct answer count variable, convert to number from string as well */
        var correctAnswerCount = +($("#totalCorrect").text());

	/* Declaring questionCount running total function */
    function questionCountTally (x) {
          var newCount = x + 1;
          $("#questionCount").text(newCount);
    }

    /* Declaring correctAnswer running total function */
    function correctAnswerTally (x) {
          var correctCount = x + 1;
          $("#totalCorrect").text(correctCount);
    }

	/* Setting Quiz Answer Key Object */
	var quizKey = {
		'question1': 0,
		'question2': 3,
		'question3': 1,
		'question4': 3,
		'question5': 2,
	};

	/* Create Object for the user answers */
	var userQuizAnswers = Object.create(quizKey);

	$("#questionOneAnswers").submit(function(event) {

		event.preventDefault();

		/* Set variable to the value of the user's answer, based on selected radio button */
		var userAnswerValue = +($("input[name=answersOne]:checked", "#questionOneAnswers").val());

		/* Set userQuizAnswers 'question1' value equal to the user input answer value */
		userQuizAnswers['question1'] = userAnswerValue;

		/* Set variable to reference the value in the quizKey for question1 */
		var correctAnswer = quizKey['question1'];

		/* Determine if the user has entered the correct answer and provide feedback */
		if (userAnswerValue === correctAnswer) {
			alert("Correct!");
			$("#questionOne").hide();
			$("#questionTwo").show();

			/* invokes correctAnswerTally function */
			correctAnswerTally(correctAnswerCount); 
		}
		else {
			alert("Incorrect. The correct answer is A: (-2)");
			$("#questionOne").hide();
			$("#questionTwo").show();
		}

        /* Invoke question count tally function */
        questionCountTally(currentQuestion);

    $("#questionTwoAnswers").submit(function(event) {

		event.preventDefault();

		/* Set variable to the value of the user's answer, based on selected radio button */
		var userAnswerValue2 = +($("input[name=answersTwo]:checked", "#questionTwoAnswers").val());

		/* Set userQuizAnswers 'question2' value equal to the user input answer value */
		userQuizAnswers['question2'] = userAnswerValue2;

		/* Set variable to reference the value in the quizKey for question1 */
		var correctAnswer = quizKey['question2'];

		/* Determine if the user has entered the correct answer and provide feedback */
		if (userAnswerValue2 === correctAnswer) {
			alert("Correct!");
			$("#questionTwo").hide();
			$("#questionThree").show();

			/* invokes correctAnswerTally function */
			correctAnswerTally(correctAnswerCount); 
		}
		else {
			alert("Incorrect. The correct answer is D: (+1)");
			$("#questionTwo").hide();
			$("#questionThree").show();
		}

        /* Invoke question count tally function */
        questionCountTally(currentQuestion);


	});

});

});




