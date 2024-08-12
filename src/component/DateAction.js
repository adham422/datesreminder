import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const DateAction = ({deleteData,viewdata}) => {
  return (
    <Row className="justify-content-center">
    <Col sm="8" className="d-flex justify-content-between">
      <Button onClick={deleteData} className="btn-style p-2 my-2" >مسح الكل</Button>
      <Button onClick={viewdata} className="btn-style p-2 my-2">عرض المواعيد</Button>
    </Col>
  </Row>
  )
}

export default DateAction
