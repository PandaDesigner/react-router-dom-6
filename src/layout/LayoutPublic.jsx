import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const LayoutPublic = () => {
  const navigation = useNavigate();
  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === 'loading' && (
          <div className="d-flex justify-content-center align-items-center">
            <div className="alert alert-info ">
              <h1>Cargando...</h1>
            </div>
          </div>
        )}
        <Outlet />
      </main>
      <footer className="text-center bg-dark text-white p-4 ">footer</footer>
    </>
  );
};
