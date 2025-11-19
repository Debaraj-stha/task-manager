import UserAction from "@/actions/user.actin"

const AuthService={
    login:async(email:string,password:string)=>await UserAction.login(email,password)
}
export default AuthService