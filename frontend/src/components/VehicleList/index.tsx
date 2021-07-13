import { Link } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Loading } from "../Loading";

import { CarContainer, Container } from "./styles";
import { LoadingContainer } from "../Loading/styles";

export interface Vehicle {
    id: string;
    brand: string;
    model: string;
    image: string;
    year: number;
    km: number;
    color: string;
    slug: string;
}

export function VehicleList(){
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // função para obter todos os veículos.
    async function getVehicles(){
        const { data } = await api.get<Vehicle[]>('/vehicles');

        setVehicles(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getVehicles();
    }, []);

    return(
        <>
            {   
                isLoading ? 
                <LoadingContainer>
                    <Loading />
                </LoadingContainer>
                :
                <Container>
                    {
                        vehicles.map(vehicle => (
                            <CarContainer
                                key={vehicle.id}
                            >
                                <img src={vehicle.image} alt={vehicle.brand} />
                                <div>
                                    <p>{vehicle.brand} {vehicle.model} <strong>({vehicle.year})</strong></p>
                                    <Link to={`/alugar/${vehicle.id}`}>
                                        <button>Reservar</button>
                                    </Link>
                                </div>
                            </CarContainer>
                        ))
                    }
                </Container> 
            }
        </>
    )
}