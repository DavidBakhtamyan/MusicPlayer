import "./style.css" 
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE } from '../../config';
function LoginPage() {
  return (
    <div className='LoginPage'>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a>
    </div>
  )
}

export default LoginPage