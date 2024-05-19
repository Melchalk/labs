import { Col, FloatingLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setValue } from "../redux/counterSlice";

export default function FormFloatingLayoutExample() {
    const dispatch = useAppDispatch();
    const selector = useAppSelector((state) => state.counter.value);

    return (
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Id card">
            <Form.Control type="number" placeholder={String(selector)} onChange={(t) => dispatch(setValue(Number(t.target.value)))}/>
          </FloatingLabel>
        </Col>
      </Row>
    );
  }
  