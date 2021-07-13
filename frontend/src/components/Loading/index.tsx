import { Container } from "./styles";

interface LoadingProps{
    color?: string;
}

export function Loading({color}: LoadingProps){
    return(
        <Container color={color}/>
    )
}