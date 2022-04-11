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

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },

        { path: 'adminawards', element: <AdminAwards /> },
        { path: 'adminawardreports', element: <AdminAwardReports /> },

        { path: 'bank', element: <Bank /> },
        { path: 'bank-reports', element: <BankReports /> },

        { path: 'finance-consultant', element: <Financeconsultant /> },
        { path: 'finance-consultant-awards', element: <FinanceConsultantAwards /> },
        { path: 'finance-consultant-reports', element: <FinanceConsultantReports /> },

        { path: 'case', element: <CasePage /> },
        { path: 'viewcase', element: <ViewCase /> },

        { path: 'report', element: <PropertyAgent /> },

        { path: 'user', element: <User /> },
        { path: 'user-management', element: <UserManagement /> },

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
