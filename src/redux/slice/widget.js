import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data.json";

const initialState = data;

const widgetSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    removeWidget: (state, action) => {
     const { categoryName, widgetId } = action.payload;
      const categoryIndex = state.categories.findIndex(
        (cat) => cat.name === categoryName
      );
      if (categoryIndex !== -1) {
        state.categories[categoryIndex].widgets = state.categories[
          categoryIndex
        ].widgets.filter((widget) => widget.id !== widgetId);
      }
    },
  },
});

export const { removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
