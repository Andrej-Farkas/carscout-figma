import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import ResultsDashboard from './components/ResultsDashboard';
import DealerSection from './components/DealerSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import SaveSearchModal from './components/SaveSearchModal';
import ListingInterest from './components/ListingInterest';
import { getVehicleById } from './vehicleData';

export interface SearchParams {
  makeModel: string;
  maxBudget: string;
  minYear: string;
  fuelType: string;
  transmission: string;
  postcode: string;
  range: string;
}

const defaultSearchParams: SearchParams = {
  makeModel: '',
  maxBudget: '',
  minYear: 'Any',
  fuelType: 'Any',
  transmission: 'Any',
  postcode: '',
  range: 'Any distance',
};

const queryKeyMap: Record<keyof SearchParams, string> = {
  makeModel: 'make',
  maxBudget: 'maxPrice',
  minYear: 'minYear',
  fuelType: 'fuelType',
  transmission: 'transmission',
  postcode: 'postcode',
  range: 'range',
};

function buildSearchUrl(params: SearchParams) {
  const query = new URLSearchParams();

  Object.entries(queryKeyMap).forEach(([field, key]) => {
    const typedField = field as keyof SearchParams;
    const value = params[typedField];
    const defaultValue = defaultSearchParams[typedField];

    if (value && value !== defaultValue) {
      query.set(key, value);
    }
  });

  return `/search${query.toString() ? `?${query.toString()}` : ''}`;
}

function paramsFromQuery(searchParams: URLSearchParams): SearchParams {
  return {
    makeModel: searchParams.get('make') ?? searchParams.get('model') ?? defaultSearchParams.makeModel,
    maxBudget: searchParams.get('maxPrice') ?? defaultSearchParams.maxBudget,
    minYear: searchParams.get('minYear') ?? defaultSearchParams.minYear,
    fuelType: searchParams.get('fuelType') ?? defaultSearchParams.fuelType,
    transmission: searchParams.get('transmission') ?? defaultSearchParams.transmission,
    postcode: searchParams.get('postcode') ?? defaultSearchParams.postcode,
    range: searchParams.get('range') ?? defaultSearchParams.range,
  };
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeroSearch onSearch={(params) => navigate(buildSearchUrl(params))} />
      <HowItWorks />
      <DealerSection />
    </>
  );
}

function SearchPage({ onSaveSearch }: { onSaveSearch: (params: SearchParams) => void }) {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const searchParams = useMemo(() => paramsFromQuery(query), [query]);

  return (
    <ResultsDashboard
      searchParams={searchParams}
      onReset={() => navigate('/')}
      onViewAll={() => navigate('/search')}
      onSaveSearch={() => onSaveSearch(searchParams)}
    />
  );
}

function ListingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl border border-gray-200 p-10">
            <h1 className="text-2xl font-bold text-[#0f172a] mb-3">This demo listing could not be found.</h1>
            <p className="text-gray-600 mb-6">
              The listing may have been removed from the limited MVP demo data.
            </p>
            <button
              onClick={() => navigate('/search')}
              className="px-5 py-3 bg-[#312E81] text-white rounded-lg hover:bg-[#26236b] font-medium"
            >
              Back to search results
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <ListingInterest
      vehicle={vehicle}
      onBackToResults={() => navigate('/search')}
      onBackToSearch={() => navigate('/')}
    />
  );
}

function AppRoutes() {
  const navigate = useNavigate();
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [modalSearchParams, setModalSearchParams] = useState<SearchParams>(defaultSearchParams);

  const goHomeAndScroll = (id: string) => {
    navigate('/');
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header onNavigate={goHomeAndScroll} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/search"
          element={
            <SearchPage
              onSaveSearch={(params) => {
                setModalSearchParams(params);
                setIsSaveModalOpen(true);
              }}
            />
          }
        />
        <Route path="/cars/:id" element={<ListingPage />} />
      </Routes>

      <Footer />

      <SaveSearchModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        searchParams={modalSearchParams}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
