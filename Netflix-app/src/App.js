import { Routes , Route } from 'react-router-dom';
import { Navigation } from './components/navigation/navigation.component'
import { Home } from './routes/home/home.component'
import { SignIn } from './routes/auth/sign-in/sign-in.component';
import { SignUp } from './routes/auth/sign-up/sign-up.component';
import { Account } from './routes/account/account.component';
import ProtectedRoute from './components/protector/protector.component'

import { AuthContextProvider } from './context/auth-context.context'

import './App.css';

function App() {
  return (  
    <>
      <AuthContextProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </> 
  )
}

export default App;
