/* ================= LOGIN ========================= */

var $doLogin = $('#main');
var $signUpBtn = $doLogin.find('#signUpBtn');
var $loginBtn = $doLogin.find("#loginBtn");

$signUpBtn.on('click', function() {
    $doLogin.addClass('singUpActive');
    $doLogin.removeClass('loginActive');
});

$loginBtn.on('click', function() {
    $doLogin.addClass('loginActive');
    $doLogin.removeClass('singUpActive');
});