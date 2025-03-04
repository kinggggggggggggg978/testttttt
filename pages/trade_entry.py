import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime

def trading_style():
    st.title("Trading Style Analysis")
    st.subheader("Performance metrics by trading style")
    
    # Sample data for different trading styles
    trading_styles = [
        {
            "title": "Scalping",
            "duration": "≤1h",
            "winRate": "72%",
            "bestHours": "9:30-11:30 AM",
            "avgProfit": "$25/trade"
        },
        {
            "title": "Day Trading",
            "duration": "≤1d",
            "winRate": "68%",
            "bestHours": "9:30-10:30 AM",
            "avgProfit": "$150/trade"
        },
        {
            "title": "Swing",
            "duration": "1d+",
            "winRate": "65%",
            "bestHours": "Mon, Wed Entry",
            "avgProfit": "$450/trade"
        }
    ]
    
    # Create three columns for the trading styles
    cols = st.columns(3)
    
    # Display each trading style in its own column with custom styling
    for i, style in enumerate(trading_styles):
        with cols[i]:
            with st.container(border=True):
                st.markdown(f"### {style['title']}")
                st.markdown(f"**Duration:** {style['duration']}")
                st.markdown(f"**Win Rate:** {style['winRate']}")
                st.markdown(f"**Best Time:** {style['bestHours']}")
                st.markdown(f"**Avg Profit:** {style['avgProfit']}")
    
    # Performance comparison chart
    st.subheader("Performance Comparison")
    
    # Sample data for the comparison chart
    comparison_data = pd.DataFrame({
        'Style': ['Scalping', 'Day Trading', 'Swing'] * 3,
        'Metric': ['Win Rate', 'Win Rate', 'Win Rate', 'Avg R:R', 'Avg R:R', 'Avg R:R', 'Profit Factor', 'Profit Factor', 'Profit Factor'],
        'Value': [72, 68, 65, 1.5, 1.7, 2.1, 2.1, 2.3, 2.5]
    })
    
    # Create a grouped bar chart
    fig = px.bar(
        comparison_data, 
        x='Style', 
        y='Value', 
        color='Metric',
        barmode='group',
        title='Trading Style Metrics Comparison',
        color_discrete_sequence=['#ff4d4d', '#8B0000', '#DC143C']
    )
    
    fig.update_layout(
        template='plotly_dark',
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1)
    )
    
    st.plotly_chart(fig, use_container_width=True)
    
    # Trading hours performance by style
    st.subheader("Trading Hours Performance by Style")
    
    # Sample data for trading hours by style
    hours_data = pd.DataFrame({
        'hour': ['9:30', '10:30', '11:30', '12:30', '13:30', '14:30'],
        'Scalping': [75, 72, 68, 62, 65, 70],
        'Day Trading': [70, 68, 65, 60, 63, 67],
        'Swing': [65, 63, 62, 60, 64, 66]
    })
    
    # Create a line chart for win rates by hour
    fig = go.Figure()
    
    for style in ['Scalping', 'Day Trading', 'Swing']:
        fig.add_trace(go.Scatter(
            x=hours_data['hour'],
            y=hours_data[style],
            mode='lines+markers',
            name=style
        ))
    
    fig.update_layout(
        title='Win Rate by Trading Hour',
        xaxis_title='Hour',
        yaxis_title='Win Rate (%)',
        template='plotly_dark',
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)'
    )
    
    st.plotly_chart(fig, use_container_width=True)

# This allows the file to be imported as a module
if __name__ == "__main__":
    trading_style()
