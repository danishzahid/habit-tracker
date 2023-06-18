import React from "react";
import HabitCard from "./HabitCard";
import { useData } from "../contexts/DataContext";

const HabitListing = () => {
  const { habits } = useData().state;
  console.log(habits);
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Habit Listing</h2>
      <div style={styles.grid}>
        {habits.map((habit, index) => (
          <HabitCard
            key={index}
            habitName={habit.name}
            backgroundImage={habit.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "20px",
  },
};

export default HabitListing;
