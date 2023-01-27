function rickrollormathwebsite() {
    window.location.href = "https://mathlibs.onrender.com/gotem";
}
if (localStorage.getItem("auth") == 'true') {
    localStorage.setItem("auth", "false")
}

PWD = 'yimmyjimmy'
a = prompt("Password")
if (a == PWD) {
    alert("You are signed in! DO NOT BOOKMARK THIS TAB")
    //if password is right, store it in localstorage
    localStorage.setItem("auth", "true")
} else {
    //else rickroll or lead to math website
    rickrollormathwebsite();
}



