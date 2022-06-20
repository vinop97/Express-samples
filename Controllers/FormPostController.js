const uuid = require("uuid");
const FormPostController = (req,res,next) => {
    const formdata = {
        id: uuid.v4(),
        username:req.body.username,
        password:req.body.password
    }


    return res.json({formdata:formdata});
}

exports.FormPostController = FormPostController;