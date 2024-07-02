import './App.css'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import Filter from './components/Filter'
import CardSection from './components/CardSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardDetails from './components/CardDetails'
import { CountryProvider } from './context/context'
import { useState } from 'react'



function App() {
  const [filterRegion, setFilterRegion] = useState('every where');
  

  const handleFilterChange = (region: string) => {
    setFilterRegion(region);
  };

  return (
    <CountryProvider>
      <Router>
        <Header />
        <div className="bg-[#fafafa] h-full pt-8">
          <div className='mx-auto px-4'>
            <Routes>
              <Route path="/" element={
                <>
                  <div className='flex justify-between items-center flex-wrap'>
                    <SearchInput />
                    <Filter onFilterChange={handleFilterChange} filterRegion={filterRegion}/>
                  </div>
                  <CardSection filterRegion={filterRegion}/>
                </>
              } />
              <Route path="/details/:name" element={<CardDetails />} />
            </Routes>
          </div>
        </div>
        </Router>
      </CountryProvider>
    
  )
}

export default App
