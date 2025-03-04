import React from 'react';
import './styles.css';

const MainScreen = ({ onNewTrade }) => {
  const recentTrades = [
    { id: 1, symbol: 'AAPL', type: 'Long', result: 'Win', profit: '+$320', date: '2023-06-15' },
    { id: 2, symbol: 'MSFT', type: 'Short', result: 'Loss', profit: '-$150', date: '2023-06-14' },
    { id: 3, symbol: 'TSLA', type: 'Long', result: 'Win', profit: '+$450', date: '2023-06-12' },
  ];

  return (
    <div className="main-container">
      <div className="header">
        <div className="header-title">
          <h1>Trading Dashboard</h1>
          <p>Welcome back, Trader</p>
        </div>
        <button onClick={onNewTrade} className="new-trade-button">
          New Trade
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-content">
            <p>Win Rate</p>
            <h3>68%</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <p>Profit/Loss</p>
            <h3>+$2,450</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <p>Total Trades</p>
            <h3>42</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <p>Avg. Hold Time</p>
            <h3>3.2h</h3>
          </div>
        </div>
      </div>

      <div className="trades-section">
        <div className="trades-card">
          <h2>Recent Trades</h2>
          <table className="trades-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Type</th>
                <th>Result</th>
                <th>P/L</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTrades.map((trade) => (
                <tr key={trade.id}>
                  <td>{trade.symbol}</td>
                  <td>{trade.type}</td>
                  <td className={trade.result.toLowerCase()}>{trade.result}</td>
                  <td className={trade.profit.startsWith('+') ? 'profit' : 'loss'}>
                    {trade.profit}
                  </td>
                  <td>{trade.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;