// src/App.jsx
import "./assets/tailwind.css"; 
import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom"; 
import UserList from "./pages/UserList";


const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout")); 
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
const Notes = React.lazy(() => import("./pages/Notes"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));


const GuestPage = React.lazy(() => import("./pages/guest/pages/GuestPage"));

const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const Loading = React.lazy(() => import("./components/Loading"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/Notes" element={<Notes/>} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
          <Route path="/customers" element={<Customers />} />
          <Route path="/UserList" element={<UserList/>} />
        </Route>

        
        <Route path="/guest" element={<GuestLayout />}>
           <Route index element={<GuestPage />} />
         
        </Route>

      
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

       
        <Route path="/error/400" element={<Error400 />} />
        <Route path="/error/401" element={<Error401 />} />
        <Route path="/error/403" element={<Error403 />} />

        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;