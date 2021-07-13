import { Container, RentingContainer } from "./styles"
import { useParams } from "react-router-dom"

import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import DateFnsUtils from "@date-io/date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { add, parseJSON } from "date-fns";
import moment from "moment";

import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Vehicle } from "../../components/VehicleList";
import { Loading } from "../../components/Loading";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { LoadingContainer } from "../../components/Loading/styles";

interface RouteParams {
    id: string
}

interface RentInfo {
    userId: string;
    vehicleId: string;
    pickupDate: Date;
    dropoffDate: Date;
}

interface RentResponse {
    success: boolean;
    message: string;
}

export default function Rent(){
    const { user } = useContext(UserContext);
    const { id } = useParams<RouteParams>();

    const [vehicle, setVehicle] = useState<Vehicle>({} as Vehicle);
    const [rents, setRents] = useState<RentInfo[]>([] as RentInfo[]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isRenting, setIsRenting] = useState<boolean>(false);
    const [dropoffDate, setDropoffDate] = useState<MaterialUiPickersDate>(null);
    const [pickupDate, setPickupDate] = useState<MaterialUiPickersDate>(null);

    useEffect(() => {
        document.title = "rentcars | Reserva";
        
        // pegar veículos do banco de dados(mongodb)
        async function getVehicleDetails(){
            try {
                const { data } = await api.get(`/vehicles/${id}`);
    
                setVehicle(data);
            } catch {
                toast.error("Veículo não encontrado.");
            } finally {
                setIsLoading(false);
            }
        };

        // pegar locações do banco de dados(mongodb)
        async function getRents(){
            const { data } = await api.get<RentInfo[]>('/rents');

            const formatedData: RentInfo[] = data.map(rent => {
                if(rent.pickupDate && rent.dropoffDate){
                    return {
                        ...rent,
                        pickUpDate: parseJSON(rent.pickupDate),
                        dropOffDate: parseJSON(rent.dropoffDate),
                    }
                } else {
                    return rent
                }
            })
            setRents(formatedData);
        }

        getRents();
        getVehicleDetails();
    }, [id]);

    //função para limitar o prazo de entrega em até 30 dias
    function calculateMaxDropoffDate(date: MaterialUiPickersDate){
        if(date){
            return add(date, {days: 30})
        } else {
            return new Date('2050-01-01')
        }
    }

    //função para nao deixar com que a data de entrega seja menor que a data de retirada
    useEffect(() => {
        if(pickupDate && !dropoffDate){
            setDropoffDate(pickupDate)
        } 
        if(pickupDate && dropoffDate){
            if(pickupDate > dropoffDate){
                setDropoffDate(pickupDate)
            }
        }
    }, [pickupDate, dropoffDate])

    //função para checar a disponibilidade do veículo
    async function checkVehicleAvailability(
        pickupDate: MaterialUiPickersDate,
        dropoffDate: MaterialUiPickersDate, 
        vehicleId: string,
        userId: string
    ){

        let response: RentResponse = { 
            message: 'Veículo reservado com sucesso.',
            success: true
        };
        

        rents.forEach(rent => {
            if(rent.pickupDate && rent.dropoffDate && pickupDate && dropoffDate){
                const isBefore = (moment(pickupDate).isBefore(rent.pickupDate, 'day') && moment(dropoffDate).isBefore(rent.pickupDate, 'day'));
                const isAfter = (moment(pickupDate).isAfter(rent.dropoffDate, 'day') && moment(dropoffDate).isAfter(rent.dropoffDate, 'day'));
                const isSameDay = (moment(rent.pickupDate).isSame(pickupDate) || moment(rent.dropoffDate).isSame(dropoffDate));
                
                if(rent.vehicleId === vehicleId){
                    if(!(isBefore || isAfter) || isSameDay){
                        return response = {
                            message: 'Veículo já reservado nessa data.',
                            success: false
                        };
                    }
                }         
                
                if(rent.userId === userId){
                    if(!(isBefore || isAfter) || isSameDay){
                        return response = {
                            message: 'Você já possui um agendamento nessa data.',
                            success: false
                        };
                    }
                }
            }
        })

        return response;
    }

    //função para reservar veículo
    async function rentVehicle(){
        if(!pickupDate){
            return toast.error("Selecione a data de retirada.")
        }
        if(!dropoffDate){
            return toast.error("Selecione a data de entrega.")
        }
        try{
            setIsRenting(true);

            let rent: RentInfo = {
                userId: user.id,
                vehicleId: vehicle.id,
                pickupDate,
                dropoffDate
            }

            const response = await checkVehicleAvailability(
                pickupDate,
                dropoffDate, 
                vehicle.id,
                user.id
            );

            if(!response.success){
                toast.error(response.message);
                return;
            } else{
                api.post('/bookings', rent);
                setRents([...rents, rent]);
                toast.success(response.message);
            }
        } catch {
            toast.error('Erro ao locar o veículo. Tente novamente.')
        } finally {
            setIsRenting(false);
        }
    }


    return(
        <Container>
            {
                isLoading ? 
                <LoadingContainer>
                    <Loading />
                </LoadingContainer> : 
                (
                    <main>
                        <section className="details-section">
                            <div>
                                <h2>{vehicle.brand} {vehicle.model}</h2>
                                <ul>
                                    <li><span>Ano</span><span>{vehicle.year}</span></li>
                                    <li><span>Quilometragem</span><span>{vehicle.km}km</span></li>
                                    <li><span>Cor</span><span>{vehicle.color}</span></li>
                                </ul>
                            </div>
                            <img src={vehicle.image} alt="Porsche Panamera" />
                        </section>

                        <section className="renting-section">
                            <h1>Reservar</h1>
                            <p>Selecione as datas para fazer sua reserva:</p>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                                <RentingContainer>
                                    <div>
                                        <p>Data de retirada</p>
                                        <div>
                                            <KeyboardDatePicker
                                                autoOk 
                                                minDate={add(new Date(), {days: 1})}
                                                value={pickupDate}
                                                onChange={(date) => setPickupDate(date)}
                                                placeholder="Data de retirada"
                                                format="dd/MM/yyyy"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Data de entrega <strong>(max: até 30 dias)</strong></p>
                                        <div>
                                            <KeyboardDatePicker 
                                                autoOk
                                                minDate={pickupDate ? pickupDate : add(new Date(), {days: 1})}
                                                maxDate={calculateMaxDropoffDate(pickupDate)}
                                                value={dropoffDate}
                                                onChange={(date) => setDropoffDate(date)}
                                                placeholder="Data de entrega"
                                                format="dd/MM/yyyy"
                                            />
                                        </div>
                                    </div>
                                    <button 
                                        className="confirmation-btn"
                                        onClick={rentVehicle}
                                    >
                                        {
                                            isRenting ? <Loading color="white" /> : 'Confirmar reserva'
                                        }
                                    </button>
                                </RentingContainer>
                                
                            </MuiPickersUtilsProvider>
                        </section>
                    </main>
                )
            }
        </Container>
    )
}