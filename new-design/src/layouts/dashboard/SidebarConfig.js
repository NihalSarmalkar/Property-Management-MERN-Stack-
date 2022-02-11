import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArticleIcon from '@mui/icons-material/Article';
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'admin awards',
    path: '/dashboard/adminawards',
    icon: <AdminPanelSettingsIcon />
  },
  {
    title: 'admin award reports',
    path: '/dashboard/adminawardreports',
    icon: <AdminPanelSettingsIcon />
  },
  {
    title: 'bank',
    path: '/dashboard/bank',
    icon: <AccountBalanceIcon />
  },
  {
    title: 'bank reports',
    path: '/dashboard/bank-reports',
    icon: <AccountBalanceIcon />
  },
  {
    title: 'finance consultant',
    path: '/dashboard/finance-consultant',
    icon: <AttachMoneyIcon />
  },
  {
    title: 'finance consultant awards',
    path: '/dashboard/finance-consultant-awards',
    icon: <AttachMoneyIcon />
  },
  {
    title: 'finance consultant reports',
    path: '/dashboard/finance-consultant-reports',
    icon: <AttachMoneyIcon />
  },
  {
    title: 'case',
    path: '/dashboard/case',
    icon: <ArticleIcon />
  },
  {
    title: 'property agent',
    path: '/dashboard/property-agent',
    icon: <SupportAgentIcon />
  },

  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  }
];

export default sidebarConfig;
