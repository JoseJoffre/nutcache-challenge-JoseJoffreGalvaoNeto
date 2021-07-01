import React from 'react';

import { Form, Select } from 'antd';
const { Option } = Select;
;
const TeamDropdown = props => (

    <Form.Item
        name='teamID'
        label='Team'
    >
        <Select
            placeholder='Select Team'
            allowClear
        >
            <Option value={null}>None</Option>
            <Option value={1}>Frontend</Option>
            <Option value={2}>Backend</Option>
            <Option value={3}>Mobile</Option>
        </Select>
    </Form.Item>
)


export default TeamDropdown;
