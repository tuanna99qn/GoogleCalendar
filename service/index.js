const {google} = require('googleapis');
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;
const {OAuth2} = google.auth


//cách 1
const oAuth2Client = new OAuth2(
    '965847660652-07ds1iaq4fqdeai5ovemmbjlposcerbs.apps.googleusercontent.com', //Client ID
    'HIJGBJr0FhNutg67zGDATNQ1'   // CLient Key
)
oAuth2Client.setCredentials({
    refresh_token: '1//04B2xwYfuNCEOCgYIARAAGAQSNgF-L9IrXbN5M2dy3u7v4zXO34aCT3OuUGm3hw2hYBX9XoyoPSjbnIjg6b0wnvZitD5KI-_86w',
})
const calendar = google.calendar({version: 'v3'})

//cách 2
// Google calendar API settings

// const auth = new google.auth.JWT(
//     CREDENTIALS.client_email,
//     null,
//     CREDENTIALS.private_key,
//     SCOPES
// );

const insertEvent = async (event) => {
    try {
        let response = await calendar.events.insert({
            auth: oAuth2Client,
            calendarId: calendarId,
            resource: event
        });
        console.log("Đây là Link đến sự kiện", response.data.htmlLink);
        if (response['status'] == 200 && response['statusText'] === 'OK') {
            return 1;
        } else {
            return 0;
        }
    } catch (error) {
        console.log(`Error at insertEvent --> ${error}`);
        return 0;
    }
};
const getEvents = async (dateTimeStart, dateTimeEnd) => {

    try {
        let response = await calendar.events.list({
            auth: oAuth2Client,
            calendarId: calendarId,
            timeMin: dateTimeStart,
            timeMax: dateTimeEnd,
            timeZone: 'Asia/Ho_Chi_Minh'
        });
        let items = response['data']['items'];
        return items;
    } catch (error) {
        console.log(`Error at getEvents --> ${error}`);
        return 0;
    }
};
const updateEvent = async (event, eventIdUpdate) => {
    try {
        let response = await calendar.events.update({
            auth: oAuth2Client,
            calendarId: calendarId,
            eventId: eventIdUpdate,
            resource: event
        })
        console.log("Đây là Link đã update sự kiện", response.data.htmlLink);
        if (response['status'] == 200 && response['statusText'] === 'OK') {
            return 1;
        } else {
            return 0;
        }
    } catch (error) {
        console.log(`Error at insertEvent --> ${error}`);
        return 0;
    }
}
const deleteEvent = async (eventId) => {
    try {
        let response = await calendar.events.delete({
            auth: oAuth2Client,
            calendarId: calendarId,
            eventId: eventId
        });
        if (response.data === '') {
            return 1;

        } else {
            return 0;
        }
    } catch (error) {
        console.log(`Error at deleteEvent --> ${error}`);
        return 0;
    }
};
module.exports = {
    insertEvent,
    getEvents,
    updateEvent,
    deleteEvent,

}