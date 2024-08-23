import React from "react";
import { AddWidigit, PieCard } from "../UI";
import { useDispatch, useSelector } from "react-redux";
import { removeWidget } from "../../redux/slice/widget";

export function Categories({ heading, data }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.widgets.categories);

  const category = categories.find((cat) => cat.name === heading);

  const handleRemoveCard = (widgetId) => {
    if (category) {
      dispatch(removeWidget({ categoryName: heading, widgetId }));
    }
  };
  return (
    <div className="w-full px-3 py-7">
      <h1 className="font-bold">{heading}</h1>
      <div className=" flex overflow-x-auto">
        {data.map((widget) => (
          <PieCard
            key={widget.id}
            title={widget.title}
            values={widget.values}
            color={widget.color}
            labels={widget.labels}
            name={widget.name}
            onRemove={() => handleRemoveCard(widget.id)}
          />
        ))}
        <AddWidigit />
      </div>
    </div>
  );
}
