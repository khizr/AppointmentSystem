// Functions to help with admin actions.

// A functon to update any forms
export const updateForm = (formComp, field) => {
    const value = field.value;
    const name = field.name;

    formComp.setState({
        [name]: value
    });
};

// A function to send a POST request with the admin to be logged in
export const login = (loginComp, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/admins/login", {
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
                app.setState({ 
                    currentAdmin: json.currentUser, 
                    currentUser: true
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a GET request to logout the current admin
export const logout = (app) => {
    const url = "/admins/logout";

    fetch(url)
        .then(res => {
            app.setState({
                currentAdmin: null,
                currentUser: false,
                home: "true",
                message: { type: "", body: "" }
            });
        })
        .catch(error => {
            console.log(error);
        });
};