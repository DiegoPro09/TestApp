import { Route, Routes  } from 'react-router-dom'
import { routes } from './appRoutes'

function App() {

  return (
    <>
      <Routes>
        <Route path='/'>
          {/*   RUTAS   */ }
          {routes.map((page, index) => 
            <Route key ={index} path={page.path} element={page.component}/>
          )}

        </Route>
      </Routes>
    </>
  )
}

export default App