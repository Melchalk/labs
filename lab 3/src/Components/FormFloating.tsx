import { Col, FloatingLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function FormFloatingLayoutExample(state:number, setState:React.Dispatch<React.SetStateAction<number>>) {
    return (
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Id card">
            <Form.Control type="number" placeholder={String(state)} onChange={(t) => setState(Number(t.target.value))}/>
          </FloatingLabel>
        </Col>
      </Row>
    );
  }
  