document.addEventListener("DOMContentLoaded", (event) => {
    const superUserLogin = "some_suser_login";
    const superUserPassword = "some_suser_login";

    window.localStorage.setItem("suserCredentials", JSON.stringify({
        "login": superUserLogin,
        "password": superUserPassword
    }));

    window.localStorage.setItem("users", JSON.stringify([]))
    window.localStorage.setItem("currentUser", JSON.stringify({}))
    console.log("DB has just prepared")
});