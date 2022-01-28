import React, { useState } from "react";
import Toggle from "commons/utils/Toggle";
import { Table, Title, Content, SettingBox } from "commons/Styled/styled";

function Benefit() {
  const [toggle, setToggle] = useState(true);

  return (
    <Table>
      <tbody>
        <tr>
          <Title colSpan="2">상품 혜택 허용 설정</Title>
        </tr>
        <tr>
          <Content>마일리지 적립</Content>
          <SettingBox>
            <Toggle name="milege" toggle={toggle} setToggle={setToggle} />
          </SettingBox>
        </tr>
      </tbody>
    </Table>
  );
}

export default Benefit;
