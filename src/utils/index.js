import axios from "axios";

export function findMeetingPointName(guid) {
    let meetingPoints = JSON.parse(localStorage.getItem("meeting_points")) ?? [];
    let item = meetingPoints.find(m => m.guid == guid);
    return item != null ? item.name : "";
}

export function getAvailableTimeSlots(start_date, end_date, reason, documents_number) {
    let url = localStorage.getItem("api_url") ?? "";
    let token = localStorage.getItem("token") ?? "";
    let meetingPoints = JSON.parse(localStorage.getItem("meeting_points")) ?? [];

    if (url.length == 0 || token.length == 0 || meetingPoints.length == 0) {
        console.log("URL", url);
        console.log("Token", token);
        console.log("Meeting points", meetingPoints);
        throw "Configuration incorrecte";
    }


    let get_url = `${url}/availableTimeSlots?meeting_point_ids=${meetingPoints.map(m => m.guid).join('&meeting_point_ids=')}&start_date=${start_date}&end_date=${end_date}&reason=${reason}&documents_number=${documents_number}`;
    
    console.log("GET", get_url);

    const instance = axios.create({
        https: {
            checkServerIdentity: (host, cert) => {
                // Customize certificate verification here, returning an error if the
                // certificate is invalid or should not be trusted.
            }
        },
        validateStatus: status => {
            // Only reject responses with status codes outside the 2xx range
            return status >= 200 && status < 300;
        }
    });

    let config = {
        method: 'GET',
        headers: {
            "x-hub-rdv-auth-token": token,
            "Access-Control-Allow-Origin": "*"
        },
        mode: "cors"
    }

    console.log(config);

    return fetch(get_url, config);
}