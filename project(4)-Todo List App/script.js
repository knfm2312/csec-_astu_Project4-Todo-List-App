document.addEventListener("DOMContentLoaded", function() {

        const user = localStorage.getItem('user');
        const isLoggedIn = localStorage.getItem('loggedIn');
    if (!user || !isLoggedIn) {
        window.location.href = "login.html";
    }

        if (user){
            const parsedUser = JSON.parse(user);
            document.getElementById("welcomeMessage").innerHTML= `Hello ${parsedUser.name} welcome to your todo list app`;
            document.getElementById('logoutButton').classList.remove("hidden");
        }
        document.getElementById("logoutButton").addEventListener("click", function(){
            localStorage.removeItem('user');
            localStorage.removeItem('loggedIn')
            window.location.href="login.html";
        });

    });