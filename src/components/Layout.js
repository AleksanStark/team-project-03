import { Outlet } from 'react-router-dom'; // Import Outlet correctly
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { Suspense } from 'react'; // Import Suspense
import Header from '../components/Header/Header'; // Import Header

export const Layout = () => {
  return (
    <>
      <Header /> {/* Render the Header component */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Provide a fallback component for Suspense */}
        <Outlet /> {/* Render nested routes */}
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;
