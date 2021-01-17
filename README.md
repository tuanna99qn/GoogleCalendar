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
    '965847660652-07ds1iaq4fqdeai5ovemmbjlposcerbs.apps.googleusercontent.com', //CLIENT_ID
    'HIJGBJr0FhNutg67zGDATNQ1'   // CLIENT_SECRET 
)
oAuth2Client.setCredentials({
    refresh_token: '1//04B2xwYfuNCEOCgYIARAAGAQSNgF-L9IrXbN5M2dy3u7v4zXO34aCT3OuUGm3hw2hYBX9XoyoPSjbnIjg6b0wnvZitD5KI-_86w',
})
```
- Phương thức xác thực `auth:oAuth2Client`
  

- Thực hiện việc CRUD with `GoogleCalendar`

+ List all Calendar (calendarList)

````
    let response = await calendar.calendarList.list({
         auth: oAuth2Client,
         url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/calendarId',
         })
     return response.data;
````
+ ADD Calenadr(insert)
  
```
    let response = await calendar.calendars.insert({
        auth: oAuth2Client,
        url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
        resource: event
        });
     console.log("Đây là Link đến sự kiện", response.data.htmlLink);
```
+ UpdateCalendar
  ```
   let response = await calendar.calendars.update({
       auth: oAuth2Client,
       calendarId: id,
       url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/calendarId',
       resource: event
      })
      console.log("Đây là Link đã update sự kiện", response.data.htmlLink);
  ```
  
+ DeleteCalendar
  ```
   let response = await calendar.calendars.delete({
       auth: oAuth2Client,
       url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/calendarId',
       calendarId: id,
    });
  ```
  
+ ADD Event (insert)
    
    ```
      let response = await calendar.events.insert({
         auth: oAuth2Client,
         calendarId: calendarId,
         resource: event
      });
      
  ```
  
+ GET Event(list)
    
    ```
     let response = await calendar.events.list({
        auth: oAuth2Client,
        calendarId: calendarId,
        timeMin: dateTimeStart,
        timeMax: dateTimeEnd,
        timeZone: 'Asia/Ho_Chi_Minh'
        });
     let items = response['data']['items'];
     return items;
    ```
    
+ UPDATE Event(update)
    ```
    let response = await calendar.events.update({
        auth: oAuth2Client,
        calendarId: calendarId,
        eventId: eventIdUpdate,
        resource: event
        })
  ```
  
+ DELETE Event(delete)
``` 
    let response = await calendar.events.delete({
       auth: oAuth2Client,
       calendarId: calendarId,
       eventId: eventId
       });
```
