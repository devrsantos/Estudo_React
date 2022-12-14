import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Input } from "../../components/Input";

import { api } from './../../services/api'

const schema = yup.object({
    email: yup.string().email("E-mail não é valido").required("Campo Obrigatório"),
    senha: yup.string().min(3, "No minimo 3 caracteres").required("Campo Obrigatório"),
}).required();

const Login = () => {
    const { control, handleSubmit } = useForm(
        {resolver: yupResolver(schema),
        mode: onchange,
    }); 

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.senha}`);
            if (data.length === 1) {
                alert("Logado com Sucesso")
            } else {
                alert("Email ou senha inválido");
            }
        } catch (error) {
            alert('Houve um erro, tente novamente')
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                    <div class="col">
                        <Input name={"email"} control={control} type="email" placeholder="Digite seu E-mail" />
                    </div>
                    <div class="col">
                        <Input name={"senha"} control={control} type="password" placeholder="Digite sua Senha" />
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Entrar</button>
            </form>
        </>
    )
};

export { Login }