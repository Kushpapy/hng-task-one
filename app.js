const express =  require("express")
const moment = require("moment")

const app = express();
const fs = require("fs");
const path = require("path")

app.get("/api", function(req, res){
     console.log(req.query)

     const today = new Date();
     const dayOfWeek = today.getDay();

     const dayOfWeekStr = ["Sunday","Monnday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

     const statusCode = 200;
     const utcTime = new Date();
     const filePath = path.join(__dirname, "app.js")
     const fileName = path.basename(filePath);
     const githubFileUrl = `https://github.com/kushpapy/Hng/blob/main/${fileName}`;

    return res.status(200).json({
       slackName: req.query.slackName,
       currentDay: dayOfWeekStr[dayOfWeek],
       utcTime: utcTime.toISOString().split(".")[0] + "Z",
       track: req.query.track,
       githubFileUrl: githubFileUrl,
       statusCode: statusCode,
    })
})

app.listen(3000)