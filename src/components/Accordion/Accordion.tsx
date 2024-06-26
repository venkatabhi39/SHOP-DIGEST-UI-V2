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
    <Accordion collapseAll className="border-0 focus:[&>*]:ring-0 border-b">
      {items.map((item, index) => (
        <AccordionPanel key={index}>
          <AccordionTitle className="accordion-title-custom">{item.title}</AccordionTitle>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
