import React from "react";

interface ListProps {
  name: string;
  children: React.ReactNode;
}

const List = ({ name, children }: ListProps) => {
  return (
    <>
      <h2>{name}</h2>
      {children}
    </>
  );
};

export default List;
