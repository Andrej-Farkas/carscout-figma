import { useState } from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import ResultsDashboard from './components/ResultsDashboard';
import DealerSection from './components/DealerSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import SaveSearchModal from './components/SaveSearchModal';
import ListingInterest from './components/ListingInterest';
import { Vehicle } from './types';

export interface SearchParams {
  makeModel: string;
  maxBudget: string;
  minYear: string;
  fuelType: string;
  transmission: string;
  postcode: string;
  range: string;
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'results' | 'listing-interest'>('home');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    makeModel: '',
    maxBudget: '',
    minYear: 'Any',
    fuelType: 'Any',
    transmission: 'Any',
    postcode: '',
    range: 'Any distance'
  });
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    setCurrentView('results');
  };

  const handleReset = () => {
    setCurrentView('home');
    setSearchParams({
      makeModel: '',
      maxBudget: '',
      minYear: 'Any',
      fuelType: 'Any',
      transmission: 'Any',
      postcode: '',
      range: 'Any distance'
    });
  };

  const goHomeAndScroll = (id: string) => {
    setCurrentView('home');
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  };
  const openInterest = (vehicle: Vehicle) => { setSelectedVehicle(vehicle); setCurrentView('listing-interest'); window.scrollTo({ top: 0 }); };
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header onNavigate={goHomeAndScroll} />
      
      {currentView === 'home' ? (
        <>
          <HeroSearch onSearch={handleSearch} />
          <HowItWorks />
          <DealerSection />
        </>
      ) : currentView === 'results' ? (
        <ResultsDashboard 
          searchParams={searchParams}
          onReset={handleReset}
          onSaveSearch={() => setIsSaveModalOpen(true)}
          onViewListing={openInterest}
        />
      ) : selectedVehicle ? <ListingInterest vehicle={selectedVehicle} onBackToResults={() => setCurrentView('results')} onBackToSearch={() => goHomeAndScroll('search')} /> : null}

      <Footer />

      <SaveSearchModal 
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        searchParams={searchParams}
      />
    </div>
  );
}
