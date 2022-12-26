import { Checkbox } from "@radix-ui/react-checkbox";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { FormEvent } from "react";
import { useState } from "react";
import axios from "axios";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'test@gmail.com.br',
      password: '123456',
    });
    setIsUserSignedIn(true);
  }
    return (
        <div className='w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100'>
      <header className='flex items-center flex-col'>
        <Logo/>
        <Heading size='lg'>Ignite Lab</Heading>
        <Text size="lg" className="text-gray-400">Faça login e começe a usar</Text>
      </header>

      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4' onSubmit={handleSignIn}>
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor='email' className='flex flex-col gap-2'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder='digite seu email'/>
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-2'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder='******'/>
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex flex-row gap-2'>
          <Checkbox id='remember'/>
          <Text>Lembrar de mim por 30 dias</Text>
        </label>
        <Button type="submit" className='mt-4'>Entrar na plataforma</Button>
      </form>
      <footer className='flex flex-col gap-4 items-center mt-8'>
        <Text size='sm'>
          <a href='/esqueci-minha-senha' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text size='sm'>
          <a href='/criar-conta'  className='text-gray-400 underline hover:text-gray-200'>Não possuí conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
    )
}