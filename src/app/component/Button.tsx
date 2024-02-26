import Image from "next/image";
//now this buttonis a component taht is used in the navbar and the props are passed from the navbar to buttonso that they can be used
type ButtonProps ={
    type: "button" | "submit";
    title:string;
    icon?:string;
    varient: string;
}

const Button = ({type,title,icon,varient}:ButtonProps) => {
  return (
    <button
     className={`flex gap-3 rounded-full border text-left md:text-center justify-center ${varient}`}
     type={type}>
      {icon && <Image src={icon} width={24} height={24} alt={icon} /> /*if icon exists then Image  */ }
      <label className="" htmlFor="">{title}</label>
    </button>
  )
}

export default Button
