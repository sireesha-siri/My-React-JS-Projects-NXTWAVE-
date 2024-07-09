import './index.css'

const Login = props => {
  const {onLogin} = props
  return (
    <button type="button" className="button-style" onClick={onLogin}>
      Login
    </button>
  )
}

export default Login
