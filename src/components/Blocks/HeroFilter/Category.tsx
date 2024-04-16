import { Button } from 'flowbite-react';
import React, { useState, useRef, useEffect } from 'react';

// Define the type for a single button's props
interface ButtonProp {
  name: string;
  onClick: (data?: any) => void; // Allowing optional parameter
}

// Define the props for the Category component
interface CategoryProps {
  buttonProps: ButtonProp[];
}

export const Category: React.FC<CategoryProps> = ({ buttonProps }) => {
  const [highlightStyle, setHighlightStyle] = useState({});

  const buttonsRef = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Function to set highlight for a specific button index
    const setHighlightForButton = (index: number) => {
      const button = buttonsRef.current[index];
      if (button) {
        setHighlightStyle({
          left: `${button.offsetLeft}px`, // Ensure 'px' is added for consistency
          width: `${button.offsetWidth}px`, // Ensure 'px' is added for consistency
          opacity: 1,
          height: '2px', // Assuming this is the desired height for your highlight
        });
      }
    };

    // Set the highlight for the first button once the component mounts
    setHighlightForButton(0);
  }, []); // Empty dependency array means this effect runs once after initial render

  const handleClick = (index: number, btn: any) => {
    btn.onClick(btn);
    // First check if buttonsRef.current is not null
    if (buttonsRef.current) {
      // Then, check if the specific element at index exists and is not null
      const element = buttonsRef.current[index];
      if (element) {
        setHighlightStyle({
          left: `${element.offsetLeft}px`,
          width: `${element.offsetWidth}px`,
          opacity: 1,
          height: '2.5px',
        });
      } else {
        // Handle the case where the element at the given index does not exist
        console.error(`Element at index ${index} does not exist.`);
      }
    } else {
      // Handle the case where buttonsRef.current is null
      console.error('buttonsRef.current is null');
    }
  };

  return (
    <div className="hidden relative md:flex lg:flex">
      <div
        className="absolute  -bottom-1 bg-blue-600  transition-all duration-300 ease-in-out"
        style={highlightStyle}
      />

      {buttonProps.map((btn, i) => (
        <Button
          ref={el => {
            if (el) buttonsRef.current[i] = el;
          }}
          onClick={() => handleClick(i, btn)}
          size="sm"
          pill
          color="light"
          className="focus:text-blue-500  tracking-wider me-2 focus:ring-0 z-10 px-2 text-base font-semibold  border-none enabled:hover:bg-transparent hover:text-blue-500"
          key={i}
        >
          {btn.name}
        </Button>
      ))}
    </div>
  );
};
