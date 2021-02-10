import React, { useState } from "react";
import styled from "styled-components/macro";

import { Backdrop } from "./styling/Backdrop";

const DropDownContainer = styled.div`
  position: absolute;
  top: 80px;

  width: 130px;
  padding-left: 10px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  margin-left: 2px;
  cursor: pointer;
  z-index: 9;
`;

const DropDownHeader = styled.div`
  padding: 6px 20px;
  border: 1px solid #000;

  &:hover {
    background: #000;
    color: #f1f1f1;
    transition: 0.1s;
  }
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  border-top: none;

  &:first-child {
    padding-top: 10px;
  }

  /* &:hover {
    background: rgba(255, 255, 255, 0.7);
  } */
`;
const ListItem = styled.li`
  list-style: none;
  /* margin-bottom: 14px; */
  padding: 10px 0;
  padding-left: 8px;

  &:hover {
    /* color: rgba(0, 0, 0, 0.7); */
    /* opacity: 0.5; */
    background: #fff;
    /* background: #000;
    color: #fff; */
    transition: 0.1s;
  }
`;

export const DropDown = ({ categories, setCategoryFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onCategoryClicked = (value) => () => {
    setCategoryFilter(value);
    setIsOpen(false);
  };

  // console.log("selected category", selectedCategory);

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>Category</DropDownHeader>

        {isOpen && (
          <div>
            <DropDownList>
              <ListItem onClick={onCategoryClicked(null)} key={"all"}>
                All products
              </ListItem>
              {categories?.slice(0, categories.length - 1).map((category) => (
                <ListItem
                  onClick={onCategoryClicked(category.fields.title)}
                  key={category.fields.title}
                >
                  {category.fields.title}
                </ListItem>
              ))}
            </DropDownList>
          </div>
        )}
      </DropDownContainer>
      {/* {<ListItem /> && <Backdrop onClick={toggling} />} */}
    </>
  );
};