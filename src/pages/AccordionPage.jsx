import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can i use React on a project?",
      content:
        " You can use React.You can use React.You can use React.You can use React.You can use React.You can use React.You can use React.You can use React.",
    },
    {
      id: 2,
      label: "Can i use Javascript on a project?",
      content:
        "You can use Javascript.You can use Javascript.You can use Javascript.You can use Javascript.You can use Javascript.You can use Javascript.You can use Javascript.",
    },
    {
      id: 3,
      label: "Can i use CSS on a project?",
      content:
        "You can use CSS.You can use CSS.You can use CSS.You can use CSS.You can use CSS.You can use CSS.You can use CSS.You can use CSS.You can use CSS.You can use CSS.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
