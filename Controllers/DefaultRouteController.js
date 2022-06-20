const DefaultController = (req,res,next) => {
    res.json({message:"Default Route Returned"});
}

exports.DefaultController = DefaultController;