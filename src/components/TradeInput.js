import React, { useState } from 'react';
import './styles.css';

const TradeInput = ({ onBack }) => {
  const [symbol, setSymbol] = useState('');
  const [type, setType] = useState('long');
  const [entry, setEntry] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement trade submission
    console.log('Trade submitted:', {
      symbol,
      type,
      entry,
      stopLoss,
      takeProfit,
      position,
    });
    onBack();
  };

  return (
    <div className="trade-input-container">
      <div className="trade-input-card">
        <div className="trade-input-header">
          <h2>New Trade Entry</h2>
          <button onClick={onBack} className="back-button">
            Back to Dashboard
          </button>
        </div>
        <form onSubmit={handleSubmit} className="trade-form">
          <div className="form-row">
            <div className="form-group">
              <label>Symbol</label>
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                placeholder="e.g. AAPL"
                required
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="long">Long</option>
                <option value="short">Short</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Entry Price</label>
              <input
                type="number"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="0.00"
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label>Position Size</label>
              <input
                type="number"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="0.00"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Stop Loss</label>
              <input
                type="number"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
                placeholder="0.00"
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label>Take Profit</label>
              <input
                type="number"
                value={takeProfit}
                onChange={(e) => setTakeProfit(e.target.value)}
                placeholder="0.00"
                step="0.01"
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit Trade
          </button>
        </form>
      </div>
    </div>
  );
};

export default TradeInput;