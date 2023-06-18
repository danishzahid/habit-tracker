export const initialState = {
  habits: [
    {
      name: "Drink Water",
      backgroundImage:
        "https://img.huffingtonpost.com/asset/5928854a2000003a0016f2c7.jpeg?ops=scalefit_720_noupscale",
      repeat: "Daily",
      goal: "1 times daily",
      timeOfDay: "Morning",
      startDate: "2021-07-01",
    },
    {
      name: "Read",
      backgroundImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GK2jgyjoUxTbirlzqsRtKy8pIWZNAUmQoQ&usqp=CAU",
      repeat: "Daily",
      goal: "1 times daily",
      timeOfDay: "Morning",
      startDate: "2021-07-01",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    case "DELETE_HABIT":
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    default:
      return state;
  }
};
