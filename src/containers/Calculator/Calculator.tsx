import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {add, result, remove, reset} from "./CalculatorSlice.ts";
import {Button, Col, Container, Row} from 'react-bootstrap';

const Calculator = () => {
  const calculatorValue = useSelector((state: RootState) => state.calculator.value);
  const dispatch = useDispatch();
  return (
    <Container>

      <Row>

        <Col/>
        <Col sm={3}>
          <h1 className="text-end border border-dark p-2 overflow-scroll">{calculatorValue ? calculatorValue : "0"}</h1>
          <Row className="mb-3">
            <Col>
              <Button className="btn-danger w-100" onClick={() => dispatch(reset())}>C</Button>
            </Col>
            <Col>
              <Button className="btn-warning w-100" onClick={() => dispatch(remove())}>Ce</Button>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("7"))}>7</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("8"))}>8</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("9"))}>9</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("/"))}>/</Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("4"))}>4</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("5"))}>5</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("6"))}>6</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("*"))}>*</Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("1"))}>1</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("2"))}>2</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("3"))}>3</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("+"))}>+</Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Button className="btn-dark w-100" onClick={() => dispatch(result())}>=</Button>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("0"))}>0</Button>
            </Col>
            <Col>
            </Col>
            <Col>
              <Button className="btn-light btn-outline-success w-100" onClick={() => dispatch(add("-"))}>-</Button>
            </Col>
          </Row>

        </Col>
        <Col/>
      </Row>

    </Container>
  );
};

export default Calculator;