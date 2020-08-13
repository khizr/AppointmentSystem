// Function to check if a clinic or patient is logged in

export const readCookie = (app) => {
    const clinicUrl = "/clinics/check-session";
    const patientUrl = "/patients/check-session";

    // Check to see if Clinic user is logged in
    fetch(clinicUrl)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);

            // Clinic user was not logged in, check to see if patient user is logged in
            fetch(patientUrl)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => {
                if (json && json.currentUser) {
                    app.setState({ currentUser: json.currentUser });
                }
            })

            // No users are logged in
            .catch(error => {
                console.log(error);
            });
        });
};
