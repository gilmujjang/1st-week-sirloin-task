import ImagePreview from "components/ImagePreview";
import Options from "components/Options";
import React, { useState } from "react";

function Option() {
  const [optionFields, setOptionFields] = useState([]);
  const handleAddOptions = (index) => {
    const temp = optionFields.map((option, i) => {
      if (i === index) {
        const temp2 = option.optionInfo;
        return {
          ...option,
          optionInfo: [
            ...temp2,
            {
              name: "",
              origin_price: "",
              sale_price: "",
              stocks: 0,
              tax: "",
            },
          ],
        };
      }
      return option;
    });
    setOptionFields(temp);
  };

  const handleRemoveOptions = (e) => {
    const parentId = Number(e.target.value);
    const childId = Number(e.target.id);
    const newOptionInfo = [...optionFields[parentId].optionInfo];
    newOptionInfo.splice(childId, 1);
    const newOptionSet = optionFields.map((option, i) => {
      if (i !== parentId) {
        return option;
      }
      return { ...option, optionInfo: newOptionInfo };
    });
    setOptionFields(newOptionSet);
  };

  const handleAddFileds = () => {
    setOptionFields([
      ...optionFields,
      {
        id: optionFields.length,
        image: null,
        optionInfo: [
          {
            name: "",
            origin_price: "",
            sale_price: "",
            stocks: 0,
            tax: "",
          },
        ],
      },
    ]);
  };
  const handleRemoveFileds = (id) => {
    const temp = [...optionFields];
    if (temp.length > 1) {
      temp.splice(id, 1);
      setOptionFields(temp);
    } else {
      setOptionFields([]);
    }
  };

  const imagePreview = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const temp = optionFields.map((option, i) => {
          if (i === index) {
            return { ...option, image: reader.result };
          }
          return option;
        });
        setOptionFields(temp);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div>
        <h1>상품옵션</h1>
        <button type="button" onClick={handleAddFileds}>
          옵션세트추가
        </button>
      </div>
      {optionFields.map((optionField, index) => (
        <div
          key={optionField.id}
          style={{ width: "300px", backgroundColor: "grey" }}
        >
          <button type="button" onClick={() => handleRemoveFileds(index)}>
            삭제
          </button>
          <ImagePreview
            optionField={optionField}
            onChange={(e) => imagePreview(e, index)}
          />
          {optionField.optionInfo.map((option, i) => (
            <Options
              options={option}
              id={i}
              parentId={index}
              handleRemoveOptions={handleRemoveOptions}
            />
          ))}
          <button type="button" onClick={() => handleAddOptions(index)}>
            + 옵션추가
          </button>
        </div>
      ))}
      {optionFields.length > 0 || (
        <div>옵션세트를 추가하여 옵션을 구성해주세요</div>
      )}
    </div>
  );
}

export default Option;
