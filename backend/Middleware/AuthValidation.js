

const joi = require('joi');


const SignupValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required()
,
        email: joi.string().email().min(8).max(100).required()
,
        password: joi.string().min(5).max(50).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message || "Bad request" });
    }

    next();
};

const LoginValidation = ( req , res , next)=>{
    const schema = joi.object({
       
        email : joi.string().email().required(),
        password : joi.string().min(5).max(50).required()
    })

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
         .json({message : "bad request"})
    }
    next();

}
module.exports ={
    SignupValidation ,
    LoginValidation
}