import React from "react";
// reactstrap components
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";


const GeneralStats = ({ stat }) => (
  <Col lg="6" xl="3">
    <Card className="card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle
              tag="h5"
              className="text-uppercase text-muted mb-0"
            >
              {stat.name}
            </CardTitle>
            <span className="h2 font-weight-bold mb-0">
              {stat.value}
            </span>
          </div>
          <Col className="col-auto">
            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
              <i className={stat.icon} />
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className={stat.up ? 'text-success mr-2' : 'text-danger mr-2'}>
            <i className={stat.up ? 'fa fa-arrow-up' : 'fas fa-arrow-down'} />{stat.growthProportion}
          </span>
          <span className="text-nowrap">{stat.growedSince}</span>
        </p>
      </CardBody>
    </Card>
  </Col>
);

export default GeneralStats;
