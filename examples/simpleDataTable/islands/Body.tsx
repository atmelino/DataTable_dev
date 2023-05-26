import { useEffect, useRef, useState } from "preact/hooks";
// import { DataTable } from "../../../../../DataTable/mod.ts";
// import { DataTable } from "../../../../DataTable/mod.ts";
// import { DataTable } from "https://raw.githubusercontent.com/atmelino/DataTable/main/mod.ts"
import { DataTable } from "../../../../DataTable_dev/mod.ts";

export default function Body() {
  const dataArray = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 27 },
    { id: 3, name: "Doe", age: 45 },
    { id: 4, name: "Cindy", age: 32 },
  ];

  const [myData, setMyData] = useState(dataArray);


  const dataArray2 = [
    { id: "401", type: "None", price: "0.00" },
    { id: "402", type: "Glazed" , price: "0.20"},
    { id: "405", type: "Sugar", price: "0.15" },
    { id: "403", type: "Chocolate" , price: "0.40"},
    { id: "404", type: "Maple", price: "0.30" }
  ];



  function changeData() {
    setMyData(dataArray2);

  }

  return (
    <>
      <div class="flex flex-row justify-evenly">
        <DataTable
          dataArray={myData}
        />
      </div>

      <div>
        <button
          type="button"
          class="w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700"
          onClick={changeData}
        >
          change data
        </button>

      </div>
    </>
  );
}
