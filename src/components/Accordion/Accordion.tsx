import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

export interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
}

export function AccordionComponent({ items }: AccordionProps) {
  return (
    <Accordion>
      {items.map((item, index) => (
        <AccordionPanel key={index}>
          <AccordionTitle className="accordion-title-custom">{item.title}</AccordionTitle>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
