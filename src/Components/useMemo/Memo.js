import React, { useCallback, useState } from "react";

import AddProduct from "./noMemo/AddProduct";
import AddProductWithUseMemo from "./useMemo/AddProductWithUseMemo";

const Memo = () => {
  return (
    <div>
      <p>
        Component bị re-render khi <strong>state</strong> thay đổi
      </p>
      <p>
        Component bị re-render khi <strong>props</strong> truyền vào thay đổi
      </p>

      <h1>No useMemo</h1>
      <AddProduct />
      <h1>useMemo</h1>
      <AddProductWithUseMemo />
    </div>
  );
};

export default Memo;
