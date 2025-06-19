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
    textAlign: "center"
  }}>
    <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎮 Mini Game</h1>
    <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
      Welcome to the secret game! (You can build your own game here.)
    </p>
    <a href="/" style={{
      color: "#6366f1",
      textDecoration: "underline",
      fontSize: "1.2rem"
    }}>
      Go back home
    </a>
  </div>
);

export default Game;
