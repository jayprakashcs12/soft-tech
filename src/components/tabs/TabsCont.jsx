import React from 'react';
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';

const TabsCont = ({titles, titleSummary, descriptions}) => {

    return (
        <div className="tab-device">
            <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
                <Row className='tab-device'>
                    <Col sm={3} className='no-space'>
                        <Nav variant="pills" className="flex-column">
                            {titles.map((title, i) => (
                                <Nav.Item key={i} className='pro-item'>
                                    <Nav.Link className='pro-tab' eventKey={i + 1}>{title.tabTitle}</Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Col>
                    <Col sm={9} className='no-space'>
                        <Tab.Content className='pro-tab-content'>
                            {descriptions.map((desc, j) => (
                                <Tab.Pane key={j} eventKey={j + 1}>
                                    <Tabs defaultActiveKey={titleSummary.tabTitle} id="justify-tab-example" className="mb-3" justify>
                                        {titleSummary.map((tab, i) => (
                                            <Tab key={i} eventKey={`tab${i}`} title={tab.tabTitle}>
                                                {i === 0 ? desc.tabTitle : i === 1 ? desc.tabResponse : desc.tabRequirements}
                                            </Tab>
                                        ))}
                                    </Tabs>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default TabsCont;