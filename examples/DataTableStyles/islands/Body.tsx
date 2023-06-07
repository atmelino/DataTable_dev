import { useEffect, useRef, useState } from "preact/hooks";
// import { DataTable } from "../../../../../DataTable/mod.ts";
// import { DataTable } from "../../../../DataTable/mod.ts";
// import { DataTable } from "https://raw.githubusercontent.com/atmelino/DataTable/main/mod.ts"
import { DataTable } from "../../../../DataTable_dev/mod.ts";
// import { DataTable } from "https://deno.land/x/datatable@v0.0.4-alpha/mod.ts";

export default function Body() {
  const colorful: DataTableStyle = {
    table: "bg-gradient-to-br from-[#00bfd8] to-[#0083f5] table-auto border-separate border rounded border-green-700",
    header_tr: "",
    th: "border-red-400 text-red-500",
    body_tr: " border-yellow-200 text-yellow-200",
    td: "" 
  }

  const formal: DataTableStyle = {
    table: "font-serif text-[#312222] table-auto bg-[#f1ecec] border-separate border rounded border-green-700",
    th: "border border-brown-400",
    tr: "border border-brown-200"
  }

  const cards: DataTableStyle = {
    table: " table-auto border-separate ",
    th: "bg-gray-300 border rounded border-gray-300 ...",
    tr: "bg-gray-100 border rounded border-gray-100 ..."
  }

  const clean: DataTableStyle = {
    table: "min-w-full text-left text-sm font-light",
    thead: "border-b font-medium dark:border-neutral-500",
    header_tr: "",
    th: "px-6 py-4",
    body_tr: "border-b dark:border-neutral-500",
    td: "whitespace-nowrap px-6 py-4" 
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
  const [myStyle, setMyStyle] = useState(clean);

  function handleNavigation(page: string) {
    console.log(page)
    if (page === "formal")
      setMyStyle(formal);
    if (page === "colorful")
      setMyStyle(colorful);
      if (page === "cards")
      setMyStyle(cards);
      if (page === "clean")
      setMyStyle(clean);
  }

  return (
    <>
      {/* <div class="mb-8 p-2 w-full flex flex-wrap bg-grey-light">
        <div class=" border-8 w-full lg:w-1/4 bg-grey"> */}

      <div class="flex flex-row">
        <div class="m-4 p-2 w-1/8 flex flex-wrap">
          <h2>Choose a table style:</h2>

          <div class=" inline-flex flex-col w-full ">
            <div class="bg-teal-400 p-4 m-2">
              <label
                class="w-1/6 border-1 border-gray-500 h-8 rounded p-2"
                onClick={() => handleNavigation("colorful")}>
                colorful
              </label>
            </div>
            <div class="bg-teal-400 p-4 m-2">
              <label
                class="w-1/6 border-1 border-gray-500 h-8 rounded p-2"
                onClick={() => handleNavigation("formal")}>
                formal
              </label>
            </div>
            <div class="bg-teal-400 p-4 m-2">
              <label
                class="w-1/6 border-1 border-gray-500 h-8 rounded p-2"
                onClick={() => handleNavigation("cards")}>
                cards
              </label>
            </div>
            <div class="bg-teal-400 p-4 m-2">
              <label
                class="w-1/6 border-1 border-gray-500 h-8 rounded p-2"
                onClick={() => handleNavigation("clean")}>
                clean
              </label>
            </div>
          </div>

        </div>

        <div class="m-4 p-2 w-full flex-auto">
          <DataTable
            dataArray={myData}
            style={myStyle}
          />
        </div>

      </div>
    </>
  );
}
