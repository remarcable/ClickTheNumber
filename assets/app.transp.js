'use strict';

// Javascript to compute elapsed time between "Start" and "Finish" clicks
function timestamp_class(this_current_time, this_start_time, this_end_time, this_time_difference) {
		this.this_current_time = this_current_time;
		this.this_start_time = this_start_time;
		this.this_end_time = this_end_time;
		this.this_time_difference = this_time_difference;
		this.GetCurrentTime = GetCurrentTime;
		this.StartTiming = StartTiming;
		this.EndTiming = EndTiming;
}

//Get current time from date timestamp
function GetCurrentTime() {
		var my_current_timestamp;
		my_current_timestamp = new Date(); //stamp current date & time
		return my_current_timestamp.getTime();
}

//Stamp current time as start time and reset display textbox
function StartTiming() {
		this.this_start_time = GetCurrentTime(); //stamp current time
}

//Stamp current time as stop time, compute elapsed time difference and display in textbox
function EndTiming() {
		this.this_end_time = GetCurrentTime(); //stamp current time
		this.this_time_difference = (this.this_end_time - this.this_start_time) / 1000; //compute elapsed time
		return this.this_time_difference; //set elapsed time in display box
}

var Timer = new timestamp_class(0, 0, 0, 0); //create new time object and initialize it

$(function () {
		function generateField() {
				var DOMNumbers = [];
				var DOMString = '';

				for (var i = 0; i < 25; i++) {
						DOMNumbers[i] = i + 1;
				}

				var randDOMNumbers = _.shuffle(DOMNumbers);

				for (var i = 0; i < 25; i++) {
						DOMString += '<div class="number" id="' + randDOMNumbers[i] + '">' + randDOMNumbers[i] + '</div>';
				}

				$('main').html(DOMString);
		}

		var eId = 100;
		var clickVal = 1;

		$('.btn').on('click', function () {
				Timer.StartTiming();
				generateField();
		});

		$('main').on('click', function (e) {
				var eId = +e.target.id;

				if (eId === clickVal) {
						$('#' + eId).addClass('active');
						clickVal++;
				}

				if (clickVal === 26) {
						(function () {
								clickVal++;
								var gameDoneMessages = ['You did it!', 'Alright!', 'Awesome!', 'What the fuck.', 'Amazing!', 'Did you beat the boss?', 'This horse is amazing!'];
								var DOMString = '<div class="done">' + gameDoneMessages[_.random(0, gameDoneMessages.length)] + ' Your time: ' + Timer.EndTiming() + 's</div><button type="button" name="button" class="btn new" onClick="window.location.reload();">New Game</button>';

								$('html').addClass('doneBody');
								$('main').fadeOut(100);

								setTimeout(function () {
										$('main').html(DOMString).fadeIn();

										$.getJSON('./leaderboard.json', function (data) {
												var TableFields = [];
												var DOMString = '';
												var sortedLeaderboard = _.sortBy(data, 'time');

												if (sortedLeaderboard.length >= 10) {
														sortedLeaderboard = sortedLeaderboard.slice(0, 10);
												}

												_.each(sortedLeaderboard, function (e, i) {
														var name = e.name;

														if (e.github !== "") {
																name = '<a ref="external" target="_blank" href="//github.com/' + e.github + '">' + e.name + '</a>';
														}

														TableFields.push('\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class="index">\n\t\t\t\t\t\t\t\t\t' + (i + 1) + '.\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t' + name + '\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t' + e.time + 's\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t');
												});

												for (var i = 0; i < TableFields.length; i++) {
														DOMString += TableFields[i];
												}

												$('main').append('<table class="leaderboard">' + DOMString + '</table>');
										});
								}, 200);
						})();
				}
		});
});
