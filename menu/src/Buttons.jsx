/* eslint-disable react/prop-types */
export default function Buttons({ filterItems, filterBtns }) {
  return (
    <div className="flex justify-center mt-3">
      {/* static method */}
      {/* <button
        className="bg-orange-500 rounded mr-2 px-2"
        onClick={() => filterItems("all")}
      >
        All
      </button>
      <button
        className="bg-orange-500 rounded mr-2 px-2"
        onClick={() => filterItems("breakfast")}
      >
        Breakfast
      </button> */}

      {filterBtns.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => filterItems(category)}
            className="bg-orange-500 rounded mr-2 px-2"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
