const express =  require("express");
const path = require("path");
const app = express();



app.get("/api", function(req, res){
     console.log(req.query)

     const today = new Date();
     const dayOfWeek = today.getDay();

     const dayOfWeekStr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

     const statusCode = 200;
     const utcTime = new Date();
     const filePath = path.join(__dirname, "app.js")
     const fileName = path.basename(filePath);
     const githubFileUrl = `https://github.com/Kushpapy/hng-task-one/blob/main/${fileName}`;
     const github_repo_url = `https://github.com/Kushpapy/hng-task-one`;

    return res.status(200).json({
       slack_name: req.query.slack_name,
       current_day: dayOfWeekStr[dayOfWeek],
       utc_time: utcTime.toISOString().split(".")[0] + "Z",
       track: req.query.track,
       github_file_url: githubFileUrl,
       github_repo_url: github_repo_url,
       status_code: statusCode,
    })
})

app.listen(3000)