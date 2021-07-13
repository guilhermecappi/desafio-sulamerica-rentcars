import { VehicleList } from '../../components/VehicleList';

import { useEffect } from "react";
import { Container } from './styles';

export default function Home(){
    useEffect(() => {
        document.title = "rentcars | Início"
    })

    return(
        <Container>
            <header>
                <h1>Veículos</h1>
                <p>Selecione um de nossos veículos abaixo:</p>
            </header>
            <VehicleList />
        </Container>
    )
}