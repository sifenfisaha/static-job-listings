import React from "react";
import removeIcon from "../../assets/icon-remove.svg";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { removeFilter } from "../../features/filterSlice";

interface Props {
  filter: string;
}

const FilterItems: React.FC<Props> = ({ filter }) => {
  const dispatch = useAppDispatch();
  const removeFilterhandler = (filter: string) => {
    dispatch(removeFilter(filter));
  };

  return (
    <div className="flex items-center bg-cyan-bg overflow-hidden rounded-sm gap-3">
      <span className="text-primary pl-2 font-semibold">{filter}</span>
      <button
        onClick={() => removeFilterhandler(filter)}
        className="w-8 h-8 flex items-center justify-center hover:bg-black transition-all cursor-pointer bg-primary"
      >
        <img src={removeIcon} alt="remove" />
      </button>
    </div>
  );
};

export default FilterItems;
