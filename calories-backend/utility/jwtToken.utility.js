const jwt =require('jsonwebtoken');
class JWtToken{
 tokenGeneration=(payload,next)=>{
    try {
        let token=jwt.sign(payload,"ROHAN",{expiresIn:'1d'})
        console.log(token);

        return {
            success:true,
            message:'Token generation successfull.',
            token:token

        }

    } catch (error) {
        console.log(error);
        next(error)
    }
};
 tokenVerification = (req, res, next) => {
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
}
module.exports = new JWtToken();