import { Col, FloatingLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { setState } from "../redux/counterSlice";

export default function FormFloatingLayoutExample() {
  const selector = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Id card">
          <Form.Control type="number" placeholder={String(selector)} defaultValue={selector} 
            onChange={(t) => dispatch(setState(Number(t.target.value)))}/>
        </FloatingLabel>
      </Col>
    </Row>
  );
  }
  