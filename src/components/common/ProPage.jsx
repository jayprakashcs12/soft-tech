import React, { useState } from "react";
import Select from "react-select";

const ProPage = () => {

  const qualOptions = [
    { value: 'B.C.A.', label: 'B.C.A.' },
    { value: 'B.SC.', label: 'B.SC.' },
    { value: 'B.Tech', label: 'B.Tech' },
    { value: 'M.C.A.', label: 'M.C.A.' },
    { value: 'M.SC.', label: 'M.SC.' },
    { value: 'M.Tech', label: 'M.Tech' },
  ];

  const options1 = [
    { value: 'B.C.A.', label: 'B.C.A.' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [qualification, setQualification] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <React.Fragment>
      <Select
        defaultValue={qualification}
        onChange={setQualification}
        options={qualOptions}
      />
    </React.Fragment>
  );
};

export default ProPage;