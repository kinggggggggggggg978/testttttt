import streamlit as st
import pandas as pd
import plotly.express as px
from datetime import datetime

def trade_entry():
    st.title("Trade Entry")
    st.subheader("Log your trade details and analysis")
    
    col1, col2 = st.columns([3, 1])
    with col2:
        st.button("Save Trade", type="primary")
    
    # Main form layout
    with st.expander("Trade Details", expanded=True):
        col1, col2 = st.columns(2)
        
        with col1:
            symbol = st.text_input("Symbol", placeholder="e.g., AAPL")
        with col2:
            trade_type = st.selectbox(
                "Trade Type",
                ["Scalping (≤1h)", "Day Trade (≤1d)", "Swing (1d+)"]
            )
        
        col1, col2 = st.columns(2)
        with col1:
            entry_price = st.number_input("Entry Price", min_value=0.0, format="%f")
        with col2:
            # Position size will be calculated
            position_size = st.number_input("Position Size", min_value=0.0, format="%f", disabled=True)
        
        col1, col2 = st.columns(2)
        with col1:
            stop_loss = st.number_input("Stop Loss", min_value=0.0, format="%f")
        with col2:
            take_profit = st.number_input("Take Profit", min_value=0.0, format="%f")
        
        col1, col2 = st.columns(2)
        with col1:
            entry_time = st.date_time_input("Entry Time")
        with col2:
            exit_time = st.date_time_input("Exit Time")
        
        strategy = st.selectbox(
            "Strategy",
            ["Breakout", "Pullback", "Trend Following", "Reversal", "Support/Resistance"]
        )
        
        notes = st.text_area("Notes", placeholder="Trade setup, market conditions, emotions...")
    
    # Risk calculator
    with st.expander("Risk Calculator", expanded=True):
        col1, col2 = st.columns(2)
        
        with col1:
            risk_amount = st.number_input("Risk Amount ($)", min_value=0.0, format="%f")
            
            # Calculate position size when risk amount changes
            if risk_amount > 0 and entry_price > 0 and stop_loss > 0 and entry_price != stop_loss:
                calculated_position = risk_amount / abs(entry_price - stop_loss)
                # Update position size
                st.session_state.position_size = calculated_position
                st.write(f"Calculated Position Size: {calculated_position:.2f}")
        
        with col2:
            account_balance = st.number_input("Account Balance ($)", min_value=0.0, format="%f")
            if account_balance > 0 and risk_amount > 0:
                risk_percentage = (risk_amount / account_balance) * 100
                st.write(f"Risk Percentage: {risk_percentage:.2f}%")
    
    # Pre-trade checklist
    with st.expander("Pre-Trade Checklist"):
        st.checkbox("Confirmed trend direction")
        st.checkbox("Identified key levels")
        st.checkbox("Risk matches strategy")
        st.checkbox("Emotion check")

# This allows the file to be imported as a module
if __name__ == "__main__":
    trade_entry()