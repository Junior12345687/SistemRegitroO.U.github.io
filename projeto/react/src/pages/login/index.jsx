import{useState} from "react";
// import {View, Text} from "react-native";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    async function getLogin() {

        try {

            setLogin(true);

            if(!username || !password){
                return alert("Preencha todos os campos!");
            }

            const response = await fetch("http://localhost:3000/api/login", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                  nome: username, 
                  senha :password 
                }),
            });

            // eslint-disable-next-line no-unused-vars
            const data = await response.json();

            if(response.ok){
                alert("Login realizado com sucesso!");
            }else{
                alert("Login falhou!");
            }

        } catch (error) {
            console.log("Error na rquisição",error);
            alert("Ocorreu um erro ao realizar o login!");
        }
    }

    return(
        <div className="container">
            <header>
                <h1>Login</h1>
            </header>
            <div className="formLogin">
                <div className="formInput">
                    <label htmlFor=""></label>
                </div>
            </div>
        </div>
    );
}