import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
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
    <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
    <p style={{ fontSize: "1.7rem", marginBottom: "2rem", fontWeight: 500 }}>
      Oops! You’ve wandered off the map.<br />
      This page is as lost as your last left sock 🧦
    </p>
    <Link to="/" style={{
      display: "inline-block",
      background: "linear-gradient(90deg, #6366f1 0%, #a21caf 100%)",
      color: "#fff",
      padding: "0.75rem 2rem",
      borderRadius: "2rem",
      fontSize: "1.2rem",
      fontWeight: 600,
      textDecoration: "none",
      boxShadow: "0 4px 24px 0 rgba(99,102,241,0.15)",
      transition: "transform 0.2s, box-shadow 0.2s",
      marginTop: "0.5rem"
    }}
    onMouseOver={e => {
      e.currentTarget.style.transform = 'scale(1.07)';
      e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(99,102,241,0.25)';
    }}
    onMouseOut={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(99,102,241,0.15)';
    }}
    >
      Take me home
    </Link>
  </div>
);

export default NotFound;
