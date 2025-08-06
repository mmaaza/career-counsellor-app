import Header from './components/Header';
import Footer from './components/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default DefaultLayout;
