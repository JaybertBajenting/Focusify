import { FormFieldProps } from "@/types/types";
import { Span } from "next/dist/trace";









const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  className
}) =>(
   
  <>
  <input type={type} placeholder = {placeholder} {...register(name)} className = {className}/>
  {error && <span className="error-message text-red-500 text-[12px]">{error.message}</span>}
  </>
)


export default FormField;