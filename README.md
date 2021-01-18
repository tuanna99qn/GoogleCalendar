# Google calendars tutorials

Google calendars được tạo ra nhằm mục đích tạo, theo dõi, tổ chức sắp xếp thời gian cho các công việc cá nhân, cũng như
những cuộc họp

 ## Authentication
 Nhận ủy quyền

![alt text](https://github.com/tuanna99qn/GoogleCalendar/blob/main/img/googlecalendar.PNG)

![alt text](https://github.com/tuanna99qn/GoogleCalendar/blob/main/img/acc.PNG)

Thông qua thực ủy quyền  `https://developers.google.com/oauthplayground` truyền CLIENT_ID với CLIENT_SECRET 
=> Authorization code

![alt text](https://github.com/tuanna99qn/GoogleCalendar/blob/main/img/oauth2.PNG)

## Google clendars with googleapis
- Gửi CLIENT_ID với CLIENT_SECRET 

```
const oAuth2Client = new OAuth2(
    'CLIENT_ID',
    'CLIENT_SECRET '   // 
)
oAuth2Client.setCredentials({
    refresh_token: 'refresh_token',
})
```
- Phương thức xác thực `auth:oAuth2Client`
  
 `const calendar = google.calendar({version: 'v3'})`


- Thực hiện việc CRUD with `GoogleCalendar`
- Group Calendar (Mỗi một router đều sẽ phải truyền vào `auth` đã được cấp quyền)
  
  + Router for calendar
    ```
    POST /calendar
    GET /calendar
    PUT /calendar/:id
    DELETE /calendar/:id
    URL: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/calendarId',
    options:{calendarId}
    ```
  - Tài liệu xem thêm ở `https://developers.google.com/calendar/v3/reference`
- Events Calendar(Mỗi một router đều sẽ phải truyền vào `auth` đã được cấp quyền)

  + Router for events
    ```
     POST /event/:id
     PUT /event/update/:calendarId/:eventId
     GET /event/:id
     DELETE /event/:calendarId/:eventId
     URL:  url: /calendars/calendarId/events/eventId
     options:{calendarId}
     ```