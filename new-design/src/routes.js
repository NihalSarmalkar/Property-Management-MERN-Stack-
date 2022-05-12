import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import AdminAwards from './pages/admin/AdminAwards';
import AdminAwardReports from './pages/admin/AdminAwardReports';
import Bank from './pages/bank/Bank';
import BankReports from './pages/bank/BankReports';
import Financeconsultant from './pages/financeconsultant/FinanceConsultant';
import FinanceConsultantAwards from './pages/financeconsultant/FinanceConsultantAwards';
import FinanceConsultantReports from './pages/financeconsultant/FinanceConsultantReports';
import CasePage from './pages/Case';
import PropertyAgent from './pages/propertyagent/PropertyAgent';
import UserManagement from './pages/UserManagement';
import ViewCase from './pages/ViewCase';
import { useContext } from "react";
import { AuthContext } from './context/AuthContext';

// ----------------------------------------------------------------------

export default function Router() {
  const { user } = useContext(AuthContext);
  console.log(user)
  
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: user ? <DashboardApp /> : <Navigate to="/Login" />},

        { path: 'adminawards', element:user?.usertype ? <Navigate to="/" />: <AdminAwards /> },
        { path: 'adminawardreports', element: user?.usertype ?<Navigate to="/" />:<AdminAwardReports /> },

        { path: 'bank', element:user?.usertype ? user?.usertype==="Banker"? <Bank />: <Navigate to="/" /> :  <Bank />},
        { path: 'bank-reports', element:user?.usertype ? user?.usertype==="Banker"? <BankReports /> : <Navigate to="/" /> :  <BankReports />},

        { path: 'finance-consultant', element: user?.usertype ? user?.usertype==="Finance Consultant"?<Financeconsultant /> : <Navigate to="/" /> :  <Financeconsultant />},
        { path: 'finance-consultant-awards', element: user?.usertype ? user?.usertype==="Finance Consultant"? <FinanceConsultantAwards /> : <Navigate to="/" /> :  <FinanceConsultantAwards />},
        { path: 'finance-consultant-reports', element: user?.usertype ? user?.usertype==="Finance Consultant"? <FinanceConsultantReports />: <Navigate to="/"  /> :  <FinanceConsultantReports />},

        { path: 'case', element: user?.usertype ? user?.usertype==="Property Agent"? <CasePage /> : <Navigate to="/" />:  <CasePage />},
        { path: 'viewcase', element:<ViewCase />},

        { path: 'report', element: user?.usertype ? user?.usertype==="Property Agent"? <PropertyAgent /> : <Navigate to="/" /> :  <PropertyAgent />},

        { path: 'user', element: user?.usertype ?<Navigate to="/" />:<User /> },
        { path: 'user-management', element:user?.usertype ?<Navigate to="/" /> :<UserManagement /> },

        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}