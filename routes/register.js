const express = require(`express`);
const router = express.Router();
// API 명세를 보고 여기부터 코드 작성해주세요.
router.route(`/`) // app.use(`/register`)
    .post((request, response) => {
        console.log(request.body);
        const {username, email, password} = request.body;
        let inpData = {username, email, password};
        const outData = {"uid" : 1 };
        inpData = null;
        if (inpData) {
            return response
                .status(201)
                .header('Content-Type','application/json')
                .send(outData)
        } else {
            return response
                    .status(404)
                    .header('Content-Type','application/json')
                    .send({"error" : "Not Found"})
        }
    }
    )    
// 여기까지
module.exports = router;