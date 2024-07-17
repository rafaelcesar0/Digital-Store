const LoginButton = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <button id="register-button" className="text-dark-gray-2 border-b-2 border-dark-gray-3">
        Cadastre-se
      </button>
      <button id="login-button" className="font-semibold text-white bg-primary rounded-md px-10 py-2">
        Entrar
      </button>
    </div>
  )
}

export default LoginButton