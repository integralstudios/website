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