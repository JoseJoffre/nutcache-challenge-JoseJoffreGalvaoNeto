import React from 'react';
/*SO/IEC 5218 Information technology — Codes for the representation of human sexes is an international standard that defines a representation 
of human sexes through a language - neutral single - digit code.It can be used in information systems such as database applications.
The four codes specified in ISO / IEC 5218 are:
*/
import { Form, Select } from 'antd';
const { Option } = Select;
;

const GenderDropdown = props => {

    return (
        <Form.Item
            name='gender'
            label='Gender'
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Select
                placeholder='Select Gender'
                allowClear
            >
                <Option value='not known'>Not known</Option>
                <Option value='male'>Male</Option>
                <Option value='female'>Female</Option>
                <Option value='prefer not to say'>Prefer Not to say</Option>
                <Option value='other'>Other</Option>
            </Select>
        </Form.Item>
    )
};

export default GenderDropdown;
