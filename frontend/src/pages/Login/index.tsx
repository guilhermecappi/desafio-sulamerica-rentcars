import { useContext } from "react";
import { useEffect } from "react";
import { Loading } from "../../components/Loading";
import { UserContext } from "../../context/UserContext";
import { Container } from "./styles";

export default function Login(){
    const { isLoading, values, handleOnChange, logIn } = useContext(UserContext);

    useEffect(() => {
        document.title = "rentcars | Login"
    })

    return(
        <Container>
            <div>
                <h1>Login / Cadastro</h1>
                <form onSubmit={logIn}>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={values.name}
                        placeholder="Nome" 
                        required 
                        onChange={handleOnChange}
                    />
                    <input 
                        type="text" 
                        name="email" 
                        id="email"
                        value={values.email}
                        placeholder="Email" 
                        required
                        onChange={handleOnChange}
                    />

                    <button
                        disabled={values.email.length < 3 || values.name.length < 3}
                    >
                        {
                            isLoading ? <Loading color="white" /> : 'Entrar'
                        }
                    </button>
                </form>
            </div>
        </Container>
    )
}