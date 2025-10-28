import React from "react";

const ExpRow = () => {
  console.log("hello from abhi");

  return (
    <>
      <tr>
        <td>Traversy Media</td>
        <td class="hide-sm">Instructor & Developer</td>
        <td class="hide-sm">02-03-2015 - Now</td>
        <td>
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default ExpRow;
