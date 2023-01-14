import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [erro, setErro] = useState(null)
  const [isDisbled, setIsDisbled] = useState(false);

  const loga = async (dadosUser) => {
    erro !== null && setErro(null);
    setIsDisbled(true);
    await login(dadosUser)
      .then(() => alert('Loging success!'))
      .catch(err => setErro(err.message))
      .finally(() => {
        setIsDisbled(false);
        setTimeout(() => {
          setErro(null)
        }, 3500);
      }
      )
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {erro !== null && <div className='errorMessage'>{erro}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <div className='button'>
          <button disabled={isDisbled || email === '' || password.length < 6} onClick={() => loga({ email, password })}>Login</button>
        </div>
      </div>
    </div>
  );
}
