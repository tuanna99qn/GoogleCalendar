const express = require('express');
const router = express.Router();
const {insertEvent,getEvents,updateEvent,deleteEvent}= require('../service')
// Your TIMEOFFSET Offset
const TIMEOFFSET = '+07:00';

// Get date-time string for calender
const dateTimeForCalander = () => {

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }

    let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;

    let event = new Date(Date.parse(newDateTime));

    let startDate = event;
    // Delay in end time is 1
    let endDate = new Date(new Date(startDate).setHours(startDate.getHours()+1));

    return {
        'start': startDate,
        'end': endDate
    }
};


// Insert new event to Google Calendar
let dateTime = dateTimeForCalander();
// Event for Google Calendar
router.post('/',(req,res)=>{
    let event = {
        'summary': `This is the test.`,
        'description': `This is the description.`,
        'start': {
            'dateTime': dateTime['start'],
            'timeZone': 'Asia/Ho_Chi_Minh'
        },
        'end': {
            'dateTime': dateTime['end'],
            'timeZone': 'Asia/Ho_Chi_Minh'
        }
    };

    insertEvent(event)
        .then((res) => {
            console.log(res);

        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã tạo lịch mới');


})
const eventIdUpdate = 'vereg9greh26l7ghdtigg2spds';
router.post('/update/:id',(req,res)=>{

    let event = {
        'summary': `This is the 3.`,
        'description': `This is the description.`,
        'start': {
            'dateTime': dateTime['start'],
            'timeZone': 'Asia/Ho_Chi_Minh'
        },
        'end': {
            'dateTime': dateTime['end'],
            'timeZone': 'Asia/Ho_Chi_Minh'
        }
    };
    // const splitEventId = event.getId().split('@');
    // const eventURL = "https://www.google.com/calendar/event?eid=" + Utilities.base64Encode(splitEventId[0] + " " + calendarId);

    updateEvent(event,eventIdUpdate)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã update lịch mới');

})
let start = '2021-1-1T00:00:00.000Z';
let end = '2021-12-1T00:00:00.000Z';
router.get('/get',(req,res)=>{

    getEvents(start, end)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });

    res.status(200).json('Đã lấy ra danh sách tạo lịch');
})
let eventId = 'b3kca0bgai41pm49rappnbhic4';
// Delete an event from eventID
router.delete('/:id',(req,res)=>{
    deleteEvent(eventId)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã xóa eventId');
})
module.exports =  router;