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

    let config = {
        headers: {
            "x-hub-rdv-auth-token": token
        }
    }

    return fetch(get_url, config);
}

export function searchApplicationId(applicationId) {
    let url = localStorage.getItem("api_url") ?? "";
    let token = localStorage.getItem("token") ?? "";

    if (url.length == 0 || token.length == 0) {
        console.log("URL", url);
        console.log("Token", token);
        throw "Configuration incorrecte";
    }

    let get_url = `${url}/searchApplicationIds?application_ids=${applicationId}`;

    console.log("GET", get_url);

    let config = {
        headers: {
            "x-hub-rdv-auth-token": token
        }
    }

    return fetch(get_url, config);
}