import Button from "./components/Button";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Heading from "./components/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";
import { useState } from "react";
import './App.css';

function App() {
  const [isAccordion1Open, setAccordion1Open] = useState(false);
  const [isAccordion2Open, setAccordion2Open] = useState(false);

  return (
    <div className="App">
      <Button size='md' variant='primary'>Button</Button>
      <Button size='sm' variant='primary'>Button</Button>
      <Button size='lg' variant='primary'>Button</Button>
      <Button size='sm'>Button</Button>
      <Button size='md'>Button</Button>
      <Button size='lgs'>Button</Button>

      <Input placeholder='name' label='name'/>
      <Input placeholder='name' label='name' danger/>
      <Input placeholder='name' label='name' disabled/>
      <Input placeholder='name' label='name' danger disabled/>

      <Typography size='md'>fwfewfwefewfewfewfewgrewgwergwre</Typography>
      <Typography size='sm'>fwfewfwefewfewfewfewgrewgwergwre</Typography>
      <Typography size='lg'>fwfewfwefewfewfewfewgrewgwergwre</Typography>

      <Heading level={1}>Title</Heading>
      <Heading level={2}>Title</Heading>
      <Heading level={3}>Title</Heading>
      <Heading level={4}>Title</Heading>
      <Heading level={5}>Title</Heading>
      <Heading level={6}>Title</Heading>

      <Tooltip tooltipText='hint' position='top'>EFGERGREGT</Tooltip>
      <Tooltip tooltipText='hint' position='bottom'>EFGERGREGT</Tooltip>
      <Tooltip tooltipText='hint' position='left'>EFGERGREGT</Tooltip>
      <Tooltip tooltipText='hint' position='right'>EFGERGREGT</Tooltip>

      <Accordion 
        onClick={() => setAccordion1Open(!isAccordion1Open)} 
        isOpen={isAccordion1Open} 
        title='Accordion 1'>
        terytuioli;o
      </Accordion>

      <Accordion 
        onClick={() => setAccordion2Open(!isAccordion2Open)} 
        isOpen={isAccordion2Open} 
        title='Accordion 2'>
        terytuioli;o
      </Accordion>
    </div>
  );
}

export default App;
