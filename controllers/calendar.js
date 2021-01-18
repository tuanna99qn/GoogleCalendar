const express = require('express');
const router = express.Router();
const {
    getAll,
    createMyCalendar,
    updateCalendar,
    deleteCalendar,
    insertEvent,
    getEvents,
    watchEvent,
    updateEvent,
    deleteEvent
} = require('../service')
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
    let endDate = new Date(new Date(startDate).setHours(startDate.getHours() + 1));

    return {
        'start': startDate,
        'end': endDate
    }
};
let dateTime = dateTimeForCalander();
let start = '2021-1-1T00:00:00.000Z';
let end = '2021-12-1T00:00:00.000Z';
router.post('/calendar', (req, res) => {
    let event = {
        'summary': `This is the test2`,
        //'id':'test@.com'
    };
    createMyCalendar(event)
        .then((res) => {
            console.log(res);

        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã tạo ra calendar mới');
});

router.get('/calendar', (req, res) => {
    getAll()
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã lấy ra danh sách calendar');
});

router.put('/calendar/:id', (req, res) => {
    let event = {
        'summary': `This is the test3`,
        //'id':'test@.com'
    };
    let id = req.params.id;
    updateCalendar(event, id)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã lấy update calendar');
});

router.delete('/calendar/:id',(req,res)=>{
    let id = req.params.id;

    deleteCalendar(id)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã xóa calendarId');
})
router.post('/event/:id', (req, res) => {
    let event = {
        'summary': `This is the event5`,
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
    let id = req.params.id
    insertEvent(event, id)
        .then((res) => {
            console.log(res);

        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã tạo lịch mới');
});
router.post('/watch/:id', (req, res) => {
    let event = {
        'summary': `This is the event5`,
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
    let id = req.params.id
    watchEvent(event, id)
        .then((res) => {
            console.log(res);

        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã tạo lịch mới');
});
// lỗi
router.put('/event/update/:calendarId/:eventId', (req, res) => {

    let event = {
        'summary': `This is the test3`,
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
    let eventId = req.params.id
    let calendarId = req.params.id
    updateEvent(event,calendarId,eventId)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã update lịch mới');
})
router.get('/event/:id', (req, res) => {
    let id = req.params.id;
    getEvents(start, end, id)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });

    res.status(200).json('Đã lấy ra danh sách tạo lịch');
})
// Delete an event from eventID
router.delete('/event/:calendarId/:eventId', (req, res) => {
    let eventId = req.params.id;
    let calendarId = req.params.id
    deleteEvent(calendarId,eventId)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    res.status(200).json('Đã xóa eventId');
})
module.exports = router;