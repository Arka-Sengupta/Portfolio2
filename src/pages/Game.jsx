import React from "react";

const Game = () => (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#18181b",
    color: "#fff",
    textAlign: "center",
    position: 'relative',
    paddingBottom: '3rem',
  }}>
    <div style={{
      background: '#22223b',
      borderRadius: '1.5rem',
      boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)',
      padding: '1.5rem',
      marginBottom: '2rem',
      maxWidth: '90vw',
      maxHeight: '70vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <iframe
        src="https://cloud.onlinegames.io/games/2024/phaser/snake/index-og.html"
        title="Snake Game by OnlineGames.io"
        style={{
          width: '60vw',
          height: '75vh',
          border: 'none',
          borderRadius: '1rem',
          background: '#fff',
        }}
        allowFullScreen
      />
    </div>
    <div style={{
      position: 'absolute',
      bottom: '1.2rem',
      left: 0,
      width: '100%',
      textAlign: 'center',
      color: '#a3a3a3',
      fontSize: '1rem',
      letterSpacing: '0.03em',
    }}>
      Game credits to <a href="https://cloud.onlinegames.io/games/2024/phaser/snake/index-og.html" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', textDecoration: 'underline' }}>OnlineGames.io</a>
    </div>
  </div>
);

export default Game;
