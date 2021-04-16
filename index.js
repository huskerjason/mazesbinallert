//mazesbinallert
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const myNumber = process.env.MY_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);
const axios = require('axios');
const cheerio = require('cheerio');

async function send_text(text){
    console.log("Sending Text: "+ text);
    client.messages
    .create({
        body: text,
        from: twilioNumber,
        to: myNumber
    })
    .then(message => console.log(message.sid));
}
diff_data = ''

async function check_sbins(){
    axios.get('http://www.mazesp.in')
        .then(response => {
            const html = response.data;    
            //console.log(html);
            // body > div > div.table-responsive > table > tfoot > tr > td:nth-child(9)
            const $ = cheerio.load(html);
            //advanced spin detection algorithm
            const scrapedata = $('tfoot').text().trim().split(/\s+/)[8];
            //init
            if (diff_data == ''){
                diff_data = scrapedata;
                send_text("MAZESBINALLERT INIT: "+ scrapedata + " mazespins this season");
            } else if (diff_data != scrapedata){
                send_text("MAZESBINALLERT: HE SPUN OUT!!! " + scrapedata + " mazespins this season");
                diff_data = scrapedata;
            }
        })
}

check_sbins();
setInterval(check_sbins,60000);
//this alerts every 12 hours to make sure you never forget about our spinny boy
setInterval(function fn(){send_text('MAZESBINALLERT: still running...some say hes still spinning')},60000 * 60 * 12);
// setInterval(function fn(){console.log("diff_data: " +diff_data)},5000);
// setInterval(function fn(){
//     diff_data = 'test';
//     console.log('testing the diff data');
// },60000);
