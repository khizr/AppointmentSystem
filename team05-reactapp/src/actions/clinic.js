// Functions to help with clinic actions.

// A functon to update any forms
export const updateForm = (formComp, field) => {
    const value = field.value;
    const name = field.name;

    formComp.setState({
        [name]: value
    });
};

// A function to send a POST request to register a patient
export const register = (registerComp, app) => {
    // Create our request constructor with all the parameters we need

    const request = new Request("/clinics/register", {
        method: "post",
        body: JSON.stringify(registerComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                app.setState({
                    usernameError: "false",
                    passwordError: "false",
                    userFormatError: "false",
                    repeatPassError:"false",
                    successfullRegister:"true"
                });
            }

            else if (res.status === 400) {
                app.setState({
                    userFormatError: "true"
                })
            }

            else  {
                app.setState({
                    usernameError: "true",
                    userFormatError: "false"
                })
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a POST request with the patient to be logged in
export const login = (loginComp, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/clinics/login", {
        method: "post",
        body: JSON.stringify(loginComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                app.setState({
                    usernameError: "false",
                    passwordError: "false"
                });
                return res.json();
            }
            else if (res.status === 400) {
                app.setState({usernameError: "true"});
            }
            else {
                app.setState({
                    usernameError: "false",
                    passwordError: "true"
                });
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = "/clinics/logout";

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null,
                home: "true",
                message: { type: "", body: "" }
            });
        })
        .catch(error => {
            console.log(error);
        });
};
