import React, { useState } from "react";

import { DropDownContainer } from "./styling/DropDownContainer";
import { DropDownHeader } from "./styling/DropDownHeader";
import { DropDownList } from "./styling/DropDownList";

export const DropDown = ({ categories, setCategoryFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onCategoryClicked = (value) => () => {
    setCategoryFilter(value);
    setIsOpen(false);
  };

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>Category</DropDownHeader>

        {isOpen && (
          <div>
            <DropDownList>
              <li onClick={onCategoryClicked(null)} key={"all"}>
                All products
              </li>
              {categories?.map((category) => (
                <li
                  onClick={onCategoryClicked(category.fields.title)}
                  key={category.fields.title}
                >
                  {category.fields.title}
                </li>
              ))}
            </DropDownList>
          </div>
        )}
      </DropDownContainer>
    </>
  );
};
