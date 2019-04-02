import styled from "styled-components";
import { Card } from "reactstrap";

export const FixedFullsizeBg = styled.section`
  min-height: calc(100vh - 99px);
  background: url(https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const DarkCard = styled(Card)`
  && {
    background-color: rgba(52, 58, 64, 0.75);
    color: white;
  }
`;

export const MaterialInput = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #d2d2d2;
    outline: 0;
    font-size: 16px;
    color: white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }
  label {
    pointer-events: none;
  }
  input::placeholder {
    color: transparent;
    pointer-events: none;
  }
  input:placeholder-shown ~ label {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }
  label,
  input:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: #9b9b9b;
  }
  input:focus ~ label {
    color: #1976d2;
  }
  input:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid #1976d2;
  }
`;
