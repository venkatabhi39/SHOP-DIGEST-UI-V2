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
  const [activeIndex, setActiveIndex] = useState(0); // State to track active button

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

  const handleClick = (index: number, btn: ButtonProp) => {
    btn.onClick(btn);
    setActiveIndex(index); // Update active button index
    const element = buttonsRef.current[index];
    if (element) {
      setHighlightStyle({
        left: `${element.offsetLeft}px`,
        width: `${element.offsetWidth}px`,
        opacity: 1,
        height: '2px',
      });
    } else {
      console.error(`Element at index ${index} does not exist.`);
    }
  };

  return (
    <div className="hidden relative md:flex lg:flex">
      <div
        className="absolute -bottom-1 bg-primary-600 transition-all duration-300 ease-in-out"
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
          className={`bg-transparent me-2 focus:ring-0 z-8 focus:z-8 px-1 text-base font-medium border-none enabled:hover:bg-transparent hover:text-primary-500 ${
            activeIndex === i ? 'text-primary-500' : ''
          }`}
          key={i}
        >
          {btn.name}
        </Button>
      ))}
    </div>
  );
};
