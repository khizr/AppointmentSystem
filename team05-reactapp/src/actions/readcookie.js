// Function to check if a clinic or patient is logged in

const clinicUrl = "/clinics/check-session";
const patientUrl = "/patients/check-session";
const adminUrl = "/admins/check-session";

export const readCookieClinic = (app) => {

    // Check to see if Clinic user is logged in
    fetch(clinicUrl)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        }
    })
    .then(json => {
        if (json && json.currentUser) {
            app.setState({ currentcClinic: json.currentUser });
        }
    })
    .catch(error => {
        console.log(error);
            
    });
};


export const readCookiePatient = (app) => {

    // Check to see if patient user is logged in

    fetch(patientUrl)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        }
    })
    .then(json => {
        if (json && json.currentUser) {
            app.setState({ currentPatient: json.currentUser });
        }
    })
    .catch(error => {
        console.log(error);
    });

}

export const readCookieAdmin = (app) => {
// Patient user was not logged in, check to see if admin user is logged in
    fetch(adminUrl)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        }
    })
    .then(json => {
        if (json && json.currentUser) {
            app.setState({ currentAdmin: json.currentUser });
        }
    })
    .catch(error => {
        console.log(error);
    });

}
