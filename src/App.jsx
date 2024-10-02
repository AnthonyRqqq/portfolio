import { Outlet } from 'react-router-dom'

export default function App() {
  <>
  <header>
    <h3>
      <Navigation />
    </h3>
  </header>


  <main className='main'>
    <Outlet />
  </main>
  </>
}
