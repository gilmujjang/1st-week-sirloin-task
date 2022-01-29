/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { Table, FullBtn } from "commons/Styled/styled";
import InformationNotice from "./elements/InformationNotice";
import { INFO_NOTI_TEMPLATE } from "../../commons/constants/templates";

function Info({ data, setData }) {
  const [inputFields, setInputFields] = useState([{ ...INFO_NOTI_TEMPLATE }]);

  const handleDeleteFields = (index, event) => {
    event.preventDefault();

    if (index === 0) {
      return alert("하나 이상의 정보고시는 존재해야 합니다.");
    }

    if (window.confirm("정말 삭제하시겠습니까?")) {
      const result = [...inputFields];
      result.splice(index, 1);
      setInputFields(result);
    }
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { ...INFO_NOTI_TEMPLATE }]);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;

    setInputFields(values);
  };

  const mergeToInputFields = (index, moreValues) => {
    moreValues.forEach((obj) => {
      const [moreKey, moreValue] = Object.values(obj);

      // 추가 항목의 key나 value가 공백이면 merge 무시
      if (moreKey === "" || moreValue === "") return;

      const values = [...inputFields];
      values[index][moreKey] = moreValue;

      setInputFields(values);
    });
  };

  useEffect(() => {
    setData({
      ...data,
      informationNotify: {
        ...data.informationNotify,
        ...inputFields,
      },
    });
  }, [inputFields]);

  return (
    <Table>
      <tbody>
        {inputFields.map((inputField, index) => (
          <InformationNotice
            key={index}
            inputField={inputField}
            index={index}
            handleChangeInput={handleChangeInput}
            handleDeleteFields={handleDeleteFields}
            mergeToInputFields={mergeToInputFields}
          />
        ))}
        <tr>
          <td colSpan="2">
            <FullBtn onClick={handleAddFields}>+ 정보고시 추가</FullBtn>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Info;
