[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/hortinstein/mazesbinallert) 

# mazes🅱️inallert

![spinny boy and his spinny toy](https://i.imgur.com/SSoVX9h.png)

This is a script that alerts via text when Mazepin s🅱️ins out. It uses an advanced spin detection algorithm, interfacing with data on http://mazesp.in/

![patent pending](https://i.imgur.com/EWtTCRk.png)

Dont want to wake up to watch the practice sessions but still want to know our boy is beyblading?  Wake up to these:
![Imola](https://i.imgur.com/G3FVY5d.png) 

Special thanks for spinning out to allow me to integration test my algos.

# Instructions

You will need a twilio account go here and sign up for a trial: https://www.twilio.com/

``` sh
$ npm install
$ export TWILIO_ACCOUNT_SID='ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
$ export TWILIO_AUTH_TOKEN='your_auth_token'
# for phone numbers include '+1' ie '+12344557888'
$ export TWILIO_PHONE_NUMBER='your_twilio_phone_number'
$ export MY_PHONE_NUMBER='your_phone_number' 
$ node index.js
```

If you did it right you should see:

![mazespin](https://i.imgur.com/Y8q0UJl.png)

I fully endorse someone turning this into a SAAS product.  