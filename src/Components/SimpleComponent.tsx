// SimpleComponent.tsx

import React from "react";

interface SimpleComponentProps {
  message: string;
}

const SimpleComponent: React.FC<SimpleComponentProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default SimpleComponent;
