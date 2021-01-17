# Google calendars

Google calendars được tạo ra nhằm mục đích tạo, theo dõi, tổ chức sắp xếp thời gian cho các công việc cá nhân, cũng như
những cuộc họp

# Thực Hiện Authentication (googleapis with oAuth2.0);

    - Truy cập vào link: https://developers.google.com/oauthplayground
    
    - Sau khi có code thực hiện Exchange authorization code for tokens  



Trong việc insertEvent, getEvents,updateEvent, deleteEvent chúng ta sẽ truyền `auth` ,`calendarId`, và các `data` tùy
từng service xử lí

- Ví dụ:
    + insertEvent:
    ```
     let response = await calendar.events.insert({
            auth: auth,
            calendarId: calendarId,
            resource: event
        });
  ```
  `calendarId` chính là ID được tạo từ `Service Accounts`
  `event` là nội dung Event cần thông báo

    + getEvents:
    ``` let response = await calendar.events.list({
            auth: auth,
            calendarId: calendarId,
            timeMin: dateTimeStart,
            timeMax: dateTimeEnd,
            timeZone: 'Asia/HCM'
        });

        let items = response['data']['items'];
        return items;
  ```

  `dateTimeStart`chính là thời gian bắt đầu để lấy dữ liệu
  `dateTimeEnd` Chính là thời gian kết thúc để lấy dữ liệu
    + deleteEvent
      ```
       let response = await calendar.events.delete({
              auth: auth,
              calendarId: calendarId,
              eventId: eventId
          });
      ```
      `eventId` là id của eventId
        + updateEvent
      ```
        let response = await calendar.events.update({
              auth: auth,
              calendarId: calendarId,
              eventId: eventIdUpdate,
              resource: event
          })
      ```
      `eventIdUpdate` chính là id để update

    - Lắng nghe các thay đổi từ Google calendar
        + Khi mình create,update hoặc delete một sự kiện sẽ trả lại 1 data thông tin sự kiện trong đó có trường htmlLink
          = `https://www.google.com/calendar/event?eid={event-id}&ctz={timezone}`

          ` event-id`

          `timezone`

     ```
        let response = await calendar.events.insert({
                 auth: auth,
                 calendarId: calendarId,
                 resource: event
            });
        console.log("Đây là Link đến sự kiện",response.data.htmlLink);
     ```

Từ đó ta có thể thông báo lại cho user thông tin create và update or delete

Trên đây là bản hướng dẫn cơ bản nhất để thực hiện một chương trình CURD API với Google Calendar
![alt text](https://github.com/tuanna99qn/GoogleCalendar/blob/main/img/test.PNG)
