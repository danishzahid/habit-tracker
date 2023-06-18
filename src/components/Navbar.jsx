import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Link to={"/"} style={styles.logo}>
        Habit Tracker
        <span></span>
      </Link>

      <button style={styles.button}>Create New Habit</button>
      <Link style={styles.link}>Archive</Link>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: "10px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  },
  link: {
    color: "#000",
    textDecoration: "none",
    marginLeft: "10px",
  },
};

export default Navbar;
