import { mockForm } from "../mockForm";
import styled from "styled-components";

import { Button } from "./Button";

const TextField = styled.input`
  background: #ffffff;
  border: 1px solid #cccccc;
  margin-bottom: ${({ theme }) => theme.spacing[theme.view].layout_06};
  padding-left: ${({ theme }) => theme.spacing[theme.view].layout_04};
  padding-right: ${({ theme }) => theme.spacing[theme.view].layout_04};
  height: 72px;
  font-size: ${({ theme }) => theme.typography[theme.view].body.large.fontSize};
  font-family: inherit;
`;

const PhoneField = styled(TextField).attrs({ type: "tel" })`
  padding-left: 30px;
`;

const SelectField = styled.div`
  background: #ffffff;
  border: 1px solid #cccccc;
  margin-bottom: ${({ theme }) => theme.spacing[theme.view].layout_06};
  height: 72px;
  font-size: ${({ theme }) => theme.typography[theme.view].body.large.fontSize};
`;

const Checkbox = styled.div`
  background: gold;
`;

const mapInputs = {
  email: TextField,
  text: TextField,
  tel: PhoneField,
  select: SelectField,
  checkbox: Checkbox,
};

export const Form = () => {
  return (
    <form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <TextField style={{ flexBasis: "45%" }} />
        <TextField style={{ flexBasis: "45%" }} />

        <TextField style={{ flexBasis: "100%" }} type="email" />

        <PhoneField style={{ flexBasis: "45%" }} type="tel" />
        <select style={{ flexBasis: "45%" }} name="countries" id="countries">
          <option value="NL">The Netherlands</option>
          <option value="UK">United Kingdom</option>
          <option value="FR">France</option>
        </select>

        <TextField
          as={"textarea"}
          style={{ flexBasis: "100%" }}
          placeholder="Enter your message for us here"
        />
      </div>

      <Button>Send</Button>
    </form>
  );
};
