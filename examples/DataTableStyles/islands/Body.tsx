import { useEffect, useRef, useState } from "preact/hooks";
// import { DataTable } from "../../../../../DataTable/mod.ts";
// import { DataTable } from "../../../../DataTable/mod.ts";
// import { DataTable } from "https://raw.githubusercontent.com/atmelino/DataTable/main/mod.ts"
import { DataTable } from "../../../../DataTable_dev/mod.ts";
// import { DataTable } from "https://deno.land/x/datatable@v0.0.4-alpha/mod.ts";

export default function Body() {
  let buttonState = useRef(1);


  const mystyle: DataTableStyle = {
    table: "table-auto border-separate border border-green-700",
    headerrow: "border border-red-400",
    row: "border border-yellow-200"
  }

  const dataArray = [
    { Id: "401", Name: "Apple", Price: "0.30", Aisle: "Fruit" },
    { Id: "402", Name: "Banana", Price: "0.20", Aisle: "Fruit" },
    { Id: "405", Name: "Cherry", Price: "0.15", Aisle: "Fruit" },
    { Id: "403", Name: "Chocolate", Price: "3.40", Aisle: "Candy" },
    { Id: "404", Name: "Coffee", Price: "6.70", Aisle: "Beverage" },
    { Id: "406", Name: "Almonds", Price: "3.50", Aisle: "Snack" },
    { Id: "407", Name: "Soap", Price: "2.30", Aisle: "Personal Care" },
    { Id: "408", Name: "Butter", Price: "4.10", Aisle: "Dairy" }
  ];

  const [myData, setMyData] = useState(dataArray);
  // const [radio, setRadio] = useState("option1");
  const radio = useRef("option2");

  function handleOptionChange(value: string) {
    console.log("handleOptionChange enter")
    // setRadio(value);
    radio.current = value;
  }

  return (
    <>
      <div>
        <h2>Choose a table style:</h2>
        <div className="radio">
          <label>
            <input type="radio" value="option1"
              checked={radio.current === 'option1'}
              onChange={handleOptionChange("option1")} />
            colorful
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2"
              // checked={radio.current === 'option2'}
              checked={true}
              onChange={handleOptionChange("option2")} />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3"
              // checked={radio.current === 'option3'}
              checked={true}
              onChange={handleOptionChange("option3")} />
            Custom
          </label>
        </div>
      </div>

      <div class="flex flex-row justify-evenly">
        <DataTable
          dataArray={myData}
          style={mystyle}
        />
      </div>
    </>
  );
}
