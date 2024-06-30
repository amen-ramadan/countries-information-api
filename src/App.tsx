import './App.css'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import Filter from './components/Filter'
import CardSection from './components/CardSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardDetails from './components/CardDetails'
import { CountryProvider } from './context/context'



function App() {
  
  return (
    <CountryProvider>
      <Router>
        <Header />
        <div className="bg-zinc-100 h-full pt-8">
          <div className='mx-auto px-4'>
            <Routes>
              <Route path="/" element={
                <>
                  <div className='flex justify-between items-center max-[640px]:flex-col max-[640px]:items-start'>
                    <SearchInput />
                    <Filter />
                  </div>
                  <CardSection />
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
