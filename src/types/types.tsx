
import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";



export type FormData = {
    
    email:string;
    firstName:string;
    lastName:string;
    password:string;
    confirmPassword:string;
}



export type FormFieldProps = {
    type:string;
    placeholder:string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    className: string;
}






export type ValidFieldNames = | "email" | "firstName" | "lastName" | "password" | "confirmPassword";


export const UserSchema: ZodType<FormData> = z.object({
        email: z.string().email(),
        firstName: z.string(),
        lastName: z.string(),
        password: z.string()
        .min(8,{message: "Password too short"})
        .max(20,{message: "Password too long"}),
        confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], 
  });

  

  