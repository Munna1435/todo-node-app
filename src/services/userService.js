const {userRepo} = require("../repo")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.register = async (username, password) => {
    const existingUser = await userRepo.getUserByUsername(username);

    if(existingUser){
        return {isUserExist: true};
    }

    return await userRepo.createUser(username, password);
}

module.exports.login = async (username, password) =>{
    const result = {
        isUserFound : true,
        isPasswordMatch : true
    }
    const user = await userRepo.getUserByUsername(username);
    if(!user){
        return result.isUserFound = false;
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        return result.isPasswordMatch = false
    }
    result.token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" })
    return result;
}