import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Input } from "../../components/Input";

import { api } from './../../services/api.js'

const schema = yup.object({
    email: yup.string().email("E-mail não é valido").required("Campo Obrigatório"),
    senha: yup.string().min(3, "No minimo 3 caracteres").required("Campo Obrigatório"),
}).required();

const Login = () => {
    const { control, handleSubmit , formState: { errors } } = useForm(
        {resolver: yupResolver(schema),
        mode: onchange,
    }); 

    const onSubmit = data => {
        try {
            const {}
        } catch (error) {
            alert('Ouve um erro, tente novamente')
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