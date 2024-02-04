import React from 'react';
import { Accordion } from 'react-bootstrap';

const AccordionsCont = ({titles, titleSummary, descriptions}) => {

  return (
    <div className='accordion-device'>
      <Accordion defaultActiveKey={titles[0].tabTitle}>
        <Accordion.Item eventKey={titles[0].tabTitle}>
          <Accordion.Header className='pro-accordion-head'>{titles[0].tabTitle}</Accordion.Header>
          <Accordion.Body className='pro-accordion-body'>
            <Accordion defaultActiveKey={descriptions[0].tabTitle}>
              <Accordion.Item eventKey={descriptions[0].tabTitle}>
                <Accordion.Header className='pro-accordion-head'>{titleSummary[0].tabTitle}</Accordion.Header>
                <Accordion.Body className='pro-accordion-body'>{descriptions[0].tabTitle}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={descriptions[1].tabTitle}>
                <Accordion.Header className='pro-accordion-head'>{titleSummary[1].tabTitle}</Accordion.Header>
                <Accordion.Body className='pro-accordion-body'>{descriptions[0].tabResponse}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={descriptions[2].tabTitle} className='no-border'>
                <Accordion.Header className='pro-accordion-head'>{titleSummary[2].tabTitle}</Accordion.Header>
                <Accordion.Body className='pro-accordion-body'>{descriptions[0].tabRequirements}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={titles[1].tabTitle}>
          <Accordion.Header className='pro-accordion-head'>{titles[1].tabTitle}</Accordion.Header>
          <Accordion.Body className='pro-accordion-body'>
            <Accordion defaultActiveKey={descriptions[0].tabTitle}>
              <Accordion.Item eventKey={descriptions[0].tabTitle}>
                <Accordion.Header className='pro-accordion-head'>{titleSummary[0].tabTitle}</Accordion.Header>
                <Accordion.Body className='pro-accordion-body'>{descriptions[1].tabTitle}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={descriptions[1].tabTitle} className='no-border'>
                <Accordion.Header className='pro-accordion-head'>{titleSummary[1].tabTitle}</Accordion.Header>
                <Accordion.Body className='pro-accordion-body'>{descriptions[1].tabResponse}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={descriptions[2].tabTitle}>
                <Accordion.Header className='pro-accordion-head'>{titleSummary[2].tabTitle}</Accordion.Header>
                <Accordion.Body className='pro-accordion-body'>{descriptions[1].tabRequirements}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={titles[2].tabTitle}>
          <Accordion.Header className='pro-accordion-head'>{titles[2].tabTitle}</Accordion.Header>
          <Accordion.Body className='pro-accordion-body'>
            <Accordion defaultActiveKey={descriptions[0].tabTitle}>
              <Accordion.Item eventKey={descriptions[0].tabTitle}>
                <Accordion.Header className='pro-accordion-head'>{titleSummary[0].tabTitle}</Accordion.Header>
                <Accordion.Body className='pro-accordion-body'>{descriptions[2].tabTitle}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={descriptions[1].tabTitle} className='no-border'>
                <Accordion.Header className='pro-accordion-head'>{titleSummary[1].tabTitle}</Accordion.Header>
                <Accordion.Body className='pro-accordion-body'>{descriptions[2].tabResponse}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={descriptions[2].tabTitle}>
                <Accordion.Header className='pro-accordion-head'>{titleSummary[2].tabTitle}</Accordion.Header>
                <Accordion.Body className='pro-accordion-body'>{descriptions[2].tabRequirements}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> 
    </div>
  );
};

export default AccordionsCont;