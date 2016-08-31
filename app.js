$(document).ready(function() {
	
	/* When the Start button is clicked, the first question is shown */
	$("#startButton").mouseup(function() {

		$("#startPage").hide();
		$(".questionHeader").show();
		$("#questionOne").show();
	});

	/* Setting question count variable, convert to number from string as well */
        var currentQuestion = +($("#questionCount").text());

    /* Setting correct answer count variable, convert to number from string as well */
        var correctAnswerCount = +($("#totalCorrect").text());

	/* Declaring questionCount running total function */
    function questionCountTally () {
           currentQuestion += 1;
          $("#questionCount").text(currentQuestion);
    }

    /* Declaring correctAnswer running total function */
    function correctAnswerTally () {
           correctAnswerCount += 1;
          $("#totalCorrect").text(correctAnswerCount);
    }

    function newGame () {
    	/* This reloads the page from the cache, but could put (true) to make it reload from the browser */
    	location.reload();

    	//Ask Lee about the below
    	/*$("#finalPage").hide();
    	$("#startPage").show();
    	$("#questionCount").text(1);
    	$("#totalCorrect").text(0);
    	$(".questionHeader").hide();*/
    }

    $("#newGameButton").mouseup(function() {
		newGame();
	});

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
			correctAnswerTally(); 
		}
		else {
			alert("Incorrect. The correct answer is A: (-2)");
			$("#questionOne").hide();
			$("#questionTwo").show();
		}

        /* Invoke question count tally function */
        questionCountTally();

    });//

    $("#questionTwoAnswers").submit(function(event) {

		event.preventDefault();

		/* Set variable to the value of the user's answer, based on selected radio button */
		var userAnswerValue2 = +($("input[name=answersTwo]:checked", "#questionTwoAnswers").val());

		/* Set userQuizAnswers 'question2' value equal to the user input answer value */
		userQuizAnswers['question2'] = userAnswerValue2;

		/* Set variable to reference the value in the quizKey for question2 */
		var correctAnswer = quizKey['question2'];

		/* Determine if the user has entered the correct answer and provide feedback */
		if (userAnswerValue2 === correctAnswer) {
			alert("Correct!");
			$("#questionTwo").hide();
			$("#questionThree").show();

			/* invokes correctAnswerTally function */
			correctAnswerTally(); 
		}
		else {
			alert("Incorrect. The correct answer is D: (+1)");
			$("#questionTwo").hide();
			$("#questionThree").show();
		}

        /* Invoke question count tally function */
        questionCountTally();

	});

    $("#questionThreeAnswers").submit(function(event) {

		event.preventDefault();

		/* Set variable to the value of the user's answer, based on selected radio button */
		var userAnswerValue3 = +($("input[name=answersThree]:checked", "#questionThreeAnswers").val());

		/* Set userQuizAnswers 'question3' value equal to the user input answer value */
		userQuizAnswers['question3'] = userAnswerValue3;

		/* Set variable to reference the value in the quizKey for question3 */
		var correctAnswer = quizKey['question3'];

		/* Determine if the user has entered the correct answer and provide feedback */
		if (userAnswerValue3 === correctAnswer) {
			alert("Correct!");
			$("#questionThree").hide();
			$("#questionFour").show();

			/* invokes correctAnswerTally function */
			correctAnswerTally(); 
		}
		else {
			alert("Incorrect. The correct answer is B: An Eagle");
			$("#questionThree").hide();
			$("#questionFour").show();
		}

        /* Invoke question count tally function */
        questionCountTally();

	});

	$("#questionFourAnswers").submit(function(event) {

		event.preventDefault();

		/* Set variable to the value of the user's answer, based on selected radio button */
		var userAnswerValue4 = +($("input[name=answersFour]:checked", "#questionFourAnswers").val());

		/* Set userQuizAnswers 'question4' value equal to the user input answer value */
		userQuizAnswers['question4'] = userAnswerValue4;

		/* Set variable to reference the value in the quizKey for question4 */
		var correctAnswer = quizKey['question4'];

		/* Determine if the user has entered the correct answer and provide feedback */
		if (userAnswerValue4 === correctAnswer) {
			alert("Correct!");
			$("#questionFour").hide();
			$("#questionFive").show();

			/* invokes correctAnswerTally function */
			correctAnswerTally(); 
		}
		else {
			alert("Incorrect. The correct answer is D: Driver");
			$("#questionFour").hide();
			$("#questionFive").show();
		}

        /* Invoke question count tally function */
        questionCountTally();

	});

	$("#questionFiveAnswers").submit(function(event) {

		event.preventDefault();

		/* Set variable to the value of the user's answer, based on selected radio button */
		var userAnswerValue5 = +($("input[name=answersFive]:checked", "#questionFiveAnswers").val());

		/* Set userQuizAnswers 'question5' value equal to the user input answer value */
		userQuizAnswers['question5'] = userAnswerValue5;

		/* Set variable to reference the value in the quizKey for question5 */
		var correctAnswer = quizKey['question5'];

		/* Determine if the user has entered the correct answer and provide feedback */
		if (userAnswerValue5 === correctAnswer) {
			alert("Correct!");
			$("#questionFive").hide();
			$("#questionLine").hide();
			$("#finalPage").show();

			/* invokes correctAnswerTally function */
			correctAnswerTally(); 
		}
		else {
			alert("Incorrect. The correct answer is C: 4");
			$("#questionFive").hide();
			$("#questionLine").hide();
			$("#finalPage").show();
		}

	});

});




