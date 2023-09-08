 /* ----date object---- */
 const date = new Date()
const current_day=date.toLocaleDateString(undefined,{weekday:`long`})
 /* ---results---- */
 const results = [{
     "slack_name": "Tomiloba2",
     "current_day": current_day,
     "utc_time": date.toISOString(),
     "track": "backend",
     "github_file_url": "Tomiloba2",
     "github_repo_url": "https://github.com/Tomiloba2/Hng-stage1.git",
     "status_code": 200
 }]
 export default results