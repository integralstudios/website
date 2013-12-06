$("body a[href^='http://']").attr("target","_blank");

$.browserLanguage(function(language, acceptHeader) {
	//console.log(language);

	if (language == 'English') {
		var e = 'hello@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'French') {
		var e = 'bonjour@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Spanish / Castilian') {
		var e = 'hola@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Polish') {
		var e = 'czesc@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'German') {
		var e = 'gutentag@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Dutch') {
		var e = 'hallo@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Japanese') {
		var e = 'konnichiwa@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Chinese') {
		var e = 'nihao@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Italian') {
		var e = 'ciao@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Arabic') {
		var e = 'merhaba@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Portugese') {
		var e = 'ola@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Danish') {
		var e = 'hej@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Swedish') {
		var e = 'halla@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Polish') {
		var e = 'ciao@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else if (language == 'Czech') {
		var e = 'ahoj@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	} else {
		var e = 'hello@integralstudios.be';
		var a = document.getElementById('btn');
		a.href = 'mailto:' + e;
		a.innerHTML = e + '<img src="img/icn_mail.png">';
	}
});

// var notify = function() {
// 	// Check the notification compatibility
// 	if (!'Notification' in window) {
// 		// If the browser version is unsupported, remain silent.
// 		return;
// 	}
// 	// Log current permission level
// 	console.log(Notification.permission);
// 	// If the user has not been asked to grant or deny notifications
//   // from this domain...
// 	if (Notification.permission === 'default') {
// 		Notification.requestPermission(function() {
// 			// ...callback this function once a permission level has been set.
//       notify();
// 		});
// 	}
// 	// If the user has granted permission for this domain to send notifications...
// 	else if (Notification.permission === 'granted') {
// 		var n = new Notification('Integral Studios', {
// 			'body': 'Hello and welcome to our site!',
// 			// ...prevent duplicate notifications
// 			'tag': 'unique string'
// 		});
// 		// Callback function when the notification is closed.
// 		n.onclose = function() {
// 			console.log('Notification closed');
// 		};
// 	}
// 	// If the user does not want notifications to come from this domain...
// 	else if (Notification.permission === 'denied') {
// 		// ...remain silent.
// 		return;
// 	}
// };