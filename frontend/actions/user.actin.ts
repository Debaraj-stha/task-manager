import { axiosClient } from "@/services/axiosClient"
import { toast } from "sonner"

const UserAction={
    login:async(email:string,password:string)=>{
        try{
        const query=`
          mutation Login($email: String!, $password: String!) {
          Login(email:$email,password:$password){
          message,
          error,
          token,
          user{
          name,
          email,
          id,
          position,
          createdAt,
          updatedAt
          }
          }
    }
        `
        const response=await axiosClient("/graphql",{
            method:"POST",
            data:{
                query,
                 variables: { email, password },
            }
        })
        return response
    }
    catch(e:any){
        toast.error(e.message)
    }
    }
}
export default UserAction