function rickrollormathwebsite() {
    randomnumber = Math.floor(Math.random() * 10) - 1
    if (randomnumber <= 2) {
        window.location.href = "https://www.mathplayground.com/logic_pingu_and_friends.html";
    } else {
        window.location.href = "https://mathlibs.onrender.com/gotem";
    }
}
if (localStorage.getItem("auth") == 'true') {
    localStorage.setItem("auth", "false")
}

PWD = 'iwillcomeandgetyou'
a = prompt("Password")
if (a == PWD) {
    alert("You are signed in! DO NOT BOOKMARK THIS TAB")
    //if password is right, store it in localstorage
    localStorage.setItem("auth", "true")
} else {
    //else rickroll or lead to math website
    rickrollormathwebsite();
}



