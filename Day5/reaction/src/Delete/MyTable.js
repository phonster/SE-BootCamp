import React from "react";

function MyTable(){
    return(
      <table>
        <thead>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </thead>
        <tr>
          <td>Row1Col1</td>
          <td>Row1Col2</td>
          <td>Row1Col3</td>
        </tr>
        <tr>
          <td>Row2Col1</td>
          <td>Row2Col2</td>
          <td>Row2Col3</td>
        </tr>
        <tr>
          <td>Row3Col1</td>
          <td>Row3Col2</td>
          <td>Row3Col3</td>
        </tr>
      </table>
    );
  }

  export default MyTable;