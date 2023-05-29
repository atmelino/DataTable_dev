import { useEffect, useRef, useState } from "preact/hooks";
// import { DataTable } from "../../../../../../DataTable_dev/mod.ts";
// import { DataTable } from "../../../../DataTable/mod.ts";
// import { DataTable } from "https://raw.githubusercontent.com/atmelino/DataTable/main/mod.ts"
import { DataTable } from "../../../../DataTable_dev/mod.ts";

import MyData from "./myData.tsx";

export default function Body() {
  const [myData, setMyData] = useState(MyData);

  return (
    <>
      <div class="flex flex-row justify-evenly">
        <DataTable
          dataArray={myData}
        />
      </div>
    </>
  );
}
