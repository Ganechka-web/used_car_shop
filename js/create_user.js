function isLoginExists(newUserlogin) {
    console.log("checkLoginExistence function");
    var users = JSON.parse(window.localStorage.getItem('users'));
    return users.some(user => user.login === newUserlogin);
};


document.addEventListener('DOMContentLoaded', () => {
    var registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', (event) => {
        console.log("Parsinf data from form")
        event.preventDefault();
        var rootAdminLoginInput = document.getElementById('inputRootAdminLoginId')
        var rootAdminPasswordInput = document.getElementById('inputRootAdminPasswordId')
        var newAdminLoginInput = document.getElementById('inputLoginId');
        var newAdminEmailInput = document.getElementById('inputEmailId');
        var newAdminPasswordInput = document.getElementById('inputPasswordId');

        var suserCredentials = JSON.parse(window.localStorage.getItem("suserCredentials"));
        if (suserCredentials != null && 
            suserCredentials.login == rootAdminLoginInput.value && 
            suserCredentials.password == rootAdminPasswordInput.value) 
        {
            if (!isLoginExists(newAdminLoginInput.value)) {
                var newUser = {
                    'login': newAdminLoginInput.value,
                    'email': newAdminEmailInput.value,
                    'password': newAdminPasswordInput.value
                };
                var users = JSON.parse(window.localStorage.getItem('users'));
                users.push(newUser);

                localStorage.setItem('users', JSON.stringify(users));
                console.log("New Admin credentials has just saved")
            } else {
                alert(`User with login ${newAdminLoginInput.value} already exists`);
            }
        } else {
            alert("Root Admin credentials are incorrect!");
        }
    });
});