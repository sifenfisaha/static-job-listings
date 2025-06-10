import React from "react";
import { useAppSelector } from "../../hook/useAppSelector";
import FilterItems from "./FilterItems";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { clearFilter } from "../../features/filterSlice";

const Filter: React.FC = () => {
  const filters = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();

  const clearFilterHandler = () => {
    dispatch(clearFilter());
  };

  return (
    <>
      {filters.filters.length > 0 && (
        <div className="md:absolute mx-auto  px-10 md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:translate-y-1/2 w-[80%] bg-white p-4 flex items-center justify-between rounded-sm shadow-[0_12px_20px_rgba(91,164,164,0.25)]">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {filters.filters.map((filter, index) => (
              <FilterItems key={index} filter={filter} />
            ))}
          </div>
          <button
            onClick={clearFilterHandler}
            className="hover:text-primary hover:underline cursor-pointer text-gray-500  text-lg"
          >
            clear
          </button>
        </div>
      )}
    </>
  );
};

export default Filter;
