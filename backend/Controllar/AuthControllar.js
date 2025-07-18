const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken')
const UserModel = require('../Modals/Users')
const  signup = async( req ,res) => {

      try{
     const {name , email, password} = req.body;
     const user = await UserModel.findOne({email})

     if(user){

        return   res.status(409)
        .json({message : 'user is already exist',success : false})
     }
     const newUser = new UserModel({ name , email , password})

     newUser.password = await bcrypt.hash(password ,10);
     await newUser.save();
     res.status(201)
     .json({message : 'signup successful',success : true})

      } catch (err){

        res.status(500)
        .json({message : err.message || 'internal server error ' , success : false })

      }
}

    const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'All fields are required',
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
  console.log("hello",user)
    if (!user) {
      return res.status(403).json({
        message: 'User not found',
        success: false,
      });
    }

    const isPass = await bcrypt.compare(password, user.password);
    if (!isPass) {
      return res.status(403).json({
        message: 'Invalid credentials',
        success: false,
      });
    }

    const JwtToken = Jwt.sign(
      {
        email: user.email,
        _id: user._id,
      },
      process.env.Jwt_secret,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Login successful',
      success: true,
      JwtToken,
      name: user.name,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: error.message || 'Internal server error',
      success: false,
    });
  }
};

module.exports ={
    signup,
    login
}