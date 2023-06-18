import React from "react";
import styles from "./HabitCard.module.css";
import { Link, useParams } from "react-router-dom";

const HabitCard = ({ habitName, backgroundImage }) => {
  return (
    <Link to={`/habits/${habitName}`} className={styles.card}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <span className={styles.habitName}>{habitName}</span>
      </div>
    </Link>
  );
};

export default HabitCard;
