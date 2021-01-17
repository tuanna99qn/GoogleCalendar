# Google calendars tutorials

Google calendars được tạo ra nhằm mục đích tạo, theo dõi, tổ chức sắp xếp thời gian cho các công việc cá nhân, cũng như
những cuộc họp

 ##Authentication
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




    



