// Login function
function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("Invalid Email/Password");
    });
}

// Logout function
function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        alert("Successfuly logged out");
    }).catch(function (error) {
        // An error happened.
    });
}

// Get the currently signed-in user
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        document.getElementById("login_div").style.display = "none";
        document.getElementById("loggedin_div").style.display = "block";

        var user = firebase.auth().currentUser;

        if (user != null) {
            var email_id = user.email;
            document.getElementById("user_details").innerHTML = "Welcome User : " + email_id;
        }
    } else {
        // No user is signed in.
        document.getElementById("login_div").style.display = "block";
        document.getElementById("loggedin_div").style.display = "none";
    }
});
