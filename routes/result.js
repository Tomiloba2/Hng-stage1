import express from "express"

const router = express.Router()

/* ---get routes---------- */
router.route(`/`).get(async (req, res) => {
    /* ----date object---- */
    const date = new Date()
    const current_day = date.toLocaleDateString(undefined, {
        weekday: `long`
    })
    /* ---results data---- */
    const results = [{
        "slack_name": "Omojola_T",
        "current_day": current_day,
        "utc_time": date.toISOString(),
        "track": "backend",
        "github_file_url": "https://github.com/Tomiloba2/Hng-stage1/blob/master/index.js",
        "github_repo_url": "https://github.com/Tomiloba2/Hng-stage1.git",
        "status_code": 200
    }]
    /* ---exception handlling---- */
    try {
        const {
            track,
            slack_name
        } = req.query
        const data = results.filter((item) => {
            return item.slack_name === slack_name && item.track === track
        })
        res.status(200).json(data[0])

    } catch (err) {
        console.log(err);
        res.json({
            error: `error`,
            message: err.message
        })
    }
})

export default router;