import { ReactNode } from "react"

interface CardProps{
    children: ReactNode
}

const CardComponent = ({children}: CardProps) => {
  return (
    <>
    {children}
    </>
  );
};

export default CardComponent