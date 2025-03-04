import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import TradeInput from './components/TradeInput';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTradeInput, setShowTradeInput] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleNewTrade = () => {
    setShowTradeInput(true);
  };

  const handleBackToMain = () => {
    setShowTradeInput(false);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (showTradeInput) {
    return <TradeInput onBack={handleBackToMain} />;
  }

  return <MainScreen onNewTrade={handleNewTrade} />;
}

export default App;