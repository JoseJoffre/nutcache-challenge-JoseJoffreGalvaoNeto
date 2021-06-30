import React from 'react';
import { Form } from 'semantic-ui-react';
/*SO/IEC 5218 Information technology — Codes for the representation of human sexes is an international standard that defines a representation 
of human sexes through a language - neutral single - digit code.It can be used in information systems such as database applications.
The four codes specified in ISO / IEC 5218 are:
*/
const genderOptions = [
    { key: 0, value: 'NOT_KNOW', text: 'Not known' },
    { key: 1, value: 'MALE', text: 'Male' },
    { key: 2, value: 'FEMALE', text: 'Female' },
    { key: 3, value: 'PREFER_NOT_TO_SAY', text: 'Prefer not to say' },
    { key: 4, value: 'OTHER', text: 'Other' },
]

const GenderDropdown = props => (

    <Form.Dropdown
        placeholder='Select Gender'
        search
        selection
        label='Gender'
        value={props.value}
        options={genderOptions}
    />
)

export default GenderDropdown;
