import React, { type ReactNode } from 'react'

const FormWrapper = ({children,isLoginForm=true}:{children:ReactNode,isLoginForm?:boolean}) => <div className={`bg-white/10 dark:bg-black/40 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full ${isLoginForm ?"max-w-md":"max-w-2xl"} border border-white/20 text-center space-y-4`}>{children}</div>
export default FormWrapper