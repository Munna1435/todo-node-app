import  {userRepo} from "../repo";
import  bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (username : string, password: string) => {
    const existingUser = await userRepo.getUserByUsername(username);

    if(existingUser){
        return {isUserExist: true};
    }

    return await userRepo.createUser(username, password);
}

export const login = async (username : string, password : string) =>{
    const result = {
        isUserFound : true,
        isPasswordMatch : true,
        token : ""
    }
    const user = await userRepo.getUserByUsername(username);
    if(!user){
        result.isUserFound = false;
        return result;
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        result.isPasswordMatch = false;
        return result;
    }
    result.token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "", { expiresIn: "1h" })
    return result;
}