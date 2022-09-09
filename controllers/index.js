const { db } = require('../models/user');
const User = require('../models/user')
const bcrypt = require('bcrypt')



// used to create a new user
const createUser = async (req,res) =>{

    const userName = req.params.userName;  
    const password = await bcrypt.hash(req.params.password,10);
    const profilePic = req.params.profilePic;
    try{
        const user = await new User({
            userName : userName,
            password : password,
            profilePic : profilePic
        })
        await user.save();
        await console.log(User)
        return res.status(200).json({user})
    }catch(error) {
        return res.status(500).json({error: error.message})
    }
}


const checkUser = async (req, res) =>{
    try{
        const userName  = req.params.userName
        const user = await User.find({userName:userName})

        if (user.length < 1){
            res.status(200).send({exists: false})
        }else if(await bcrypt.compare(req.params.password, user[0].password)){
            res.status(200).send({exists: true, user: user})
        }else{
            res.status(200).send('Password Incorrect')
        }


    }catch(error){
        res.status(500).send({error:error.message})
    }
}
const getAllUsers = async (req, res) =>{
    try{
        const users = await User.find({})
        return res.status(200).send(users)
    }catch(error){
        res.status(500).send({error:error.message})
    }
}

const deleteUser = async (req, res )=>{
    try{
        await User.deleteOne({_id:`${req.params.id}`})
        return res.status(200).send('Your account has been succesfully deleted.')
    }catch(error){
        res.status(500).send({error:error.message})
    }
}

const updateUser = async (req, res )=>{
    try{
        await User.updateOne({_id:`${req.params.id}`},{userName:`${req.params.newName}`})
        return res.status(200).send(`Your User Name has been succesfully updated to ${req.params.newName}.`)
    }catch(error){
        res.status(500).send({error:error.message})
    }
}


//exports  controller funcitons
module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    checkUser,
    updateUser

}
