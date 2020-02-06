import React from 'react';

export default function StateSelector(props) {
  const options = [
    'AL', 'AK', 'AZ', 'AR', 'CA',
    'CO', 'CT', 'DC', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA',
    'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO',
    'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH',
    'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT',
    'VA', 'WA', 'WV', 'WI', 'WY'
  ];
  const dropDownOptions = options.map((ele, index) => {
    return <option value={ele} key={index}>{ele}</option>;
  });
  return (
    <select name="state" className="form-control px-0">
      {dropDownOptions}
    </select>
  );
}
