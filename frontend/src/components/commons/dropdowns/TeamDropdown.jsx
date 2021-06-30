import React from 'react';
import { Form } from 'semantic-ui-react';

const TeamOptions = [
    { key: 0, value: 'NONE', text: 'None' },
    { key: 1, value: 'MOBILE', text: 'Mobile' },
    { key: 2, value: 'FRONTEND', text: 'Frontend' },
    { key: 3, value: 'BACKEND', text: 'Backend' },
]

const TeamDropdown = props => (

    <Form.Dropdown
        placeholder='Select Team'
        search
        selection
        label='Team'
        value={props.value}
        options={TeamOptions}
    />
)

export default TeamDropdown;
