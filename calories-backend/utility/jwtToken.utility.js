const jwt =require('jsonwebtoken');

const tokenGeneration=(payload,next)=>{
    try {
        let token=jwt.sign(payload,"ROHAN",{expiresIn:'1d'})
        return {
            success:true,
            message:'Token generation successfull.',
            token:token

        }

    } catch (error) {
        next(error)
    }
}
const tokenVerification = (req, res, next) => {
    try {
        let token = req.header('token') || req.params.token;

        jwt.verify(token, "ROHAN", (err, data) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized User!" });
            } else {
                req.decoded = data;
                next();
            }
        })

    } catch (error) {
        next(error)
    }
}

module.exports = { tokenGeneration, tokenVerification };