import {Navigate,Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function ProtectedRoute() {
      const loggedIn=useSelector(state=>state.auth.loggedIn);

  return loggedIn ? <Outlet/> : <Navigate to="/NovaLab"/>
  
}

