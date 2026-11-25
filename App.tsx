import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { AppDataProvider } from './context/AppDataContext';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AppShell } from './components/AppShell';
import { DashboardHome } from './pages/app/DashboardHome';
import { InvoiceGenerator } from './pages/app/InvoiceGenerator';
import { InvoicesManager } from './pages/app/InvoicesManager';
import { CustomersManager } from './pages/app/CustomersManager';
import { ProductsManager } from './pages/app/ProductsManager';
import { BusinessSettingsPage } from './pages/app/BusinessSettingsPage';

const AppRouterView: React.FC = () => {
  const { route } = useRouter();

  if (route.page === 'landing') return <LandingPage />;
  if (route.page === 'about') return <AboutPage />;
  if (route.page === 'contact') return <ContactPage />;
  if (route.page === 'privacy') return <PrivacyPage />;
  if (route.page === 'terms') return <TermsPage />;

  return (
    <AppShell activeTab={route.tab}>
      {route.tab === 'dashboard' && <DashboardHome />}
      {route.tab === 'create' && <InvoiceGenerator editInvoiceId={route.editInvoiceId} />}
      {route.tab === 'invoices' && <InvoicesManager />}
      {route.tab === 'customers' && <CustomersManager />}
      {route.tab === 'products' && <ProductsManager />}
      {route.tab === 'settings' && <BusinessSettingsPage />}
    </AppShell>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppDataProvider>
          <AppRouterView />
        </AppDataProvider>
      </RouterProvider>
    </ThemeProvider>
  );
}
