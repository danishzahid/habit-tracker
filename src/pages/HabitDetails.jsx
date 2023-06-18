import React from "react";
import styles from "./HabitDetails.module.css";
import { useData } from "../contexts/DataContext";
import { useParams } from "react-router";

const HabitDetails = () => {
  const { habits } = useData().state;
  const { habitName } = useParams();

  let currentHabit = habits.find((habit) => habit.name === habitName);

  const moveToArchive = () => {};
  const editHabit = () => {};
  const deleteHabit = () => {};
  return (
    <div className={styles.container}>
      <h2 className={styles.habitName}>{currentHabit.name}</h2>
      <div className={styles.details}>
        <p>Repeat: {currentHabit.repeat}</p>
        <p>Goal: {currentHabit.goal}</p>
        <p>Time of Day: {currentHabit.timeOfDay}</p>
        <p>Start Date: {currentHabit.startDate}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.archiveButton} onClick={moveToArchive}>
          Move to Archive
        </button>
        <button className={styles.editButton} onClick={editHabit}>
          Edit
        </button>
        <button className={styles.deleteButton} onClick={deleteHabit}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitDetails;
