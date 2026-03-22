import User from "../models/user.model.js";
export const register = async (req, res) => {
    try {
        const {name, emails, password} = req.boody;
        if(!name || !email || !password){
            return res.status(400).json({
                success;false,
                message: "All fields are required."
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success: false,
                message:"User already exist with this email"
            })
        }

    }catch (error){

    }
}