import React, { useState } from 'react'


import { Modal, Form, Input, DatePicker, InputNumber } from 'antd';
import GenderDropdown from '../../commons/dropdowns/GenderDropdown';
import TeamDropdown from '../../commons/dropdowns/TeamDropdown';
import { MaskedInput } from 'antd-mask-input';
import moment from 'moment';


const RegistrationPopup = ({ visible, onCreate, onCancel, data }) => {

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const onChangeCPF = (value) => {
        setCPF({ ...validateCPF(value), value })

    }
    const validateCPF = (e) => {
        let testCPF = e.target.value

        testCPF = testCPF.replace(/[^\d]+/g, "");
        if (testCPF == "") return { validateStatus: 'error', errorMsg: 'MUST BE A VALID CPF!' };
        // Banlist
        if (
            testCPF.length != 11 ||
            testCPF == "00000000000" ||
            testCPF == "11111111111" ||
            testCPF == "22222222222" ||
            testCPF == "33333333333" ||
            testCPF == "44444444444" ||
            testCPF == "55555555555" ||
            testCPF == "66666666666" ||
            testCPF == "77777777777" ||
            testCPF == "88888888888" ||
            testCPF == "99999999999"
        )
            return { validateStatus: 'error', errorMsg: 'MUST BE A VALID CPF!' };
        // Validate 1st digit
        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(testCPF.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(testCPF.charAt(9))) return { validateStatus: 'error', errorMsg: 'MUST BE A VALID CPF!' };
        // Validate 2nd digit
        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(testCPF.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(testCPF.charAt(10))) return { validateStatus: 'error', errorMsg: 'MUST BE A VALID CPF!' };
        return { validateStatus: 'SUCESS!', errorMsg: '' };
    }




    const [form] = Form.useForm();
    const [cpf, setCPF] = useState({
        value: "",
    });

    return (
        <Modal
            visible={visible}
            title="Create new employee"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                {...layout}
                form={form}
                initialValues={{
                    name: data?.name,
                    gender: data?.gender,
                    birthDate: moment(data?.birthDate, 'YYYY-MM-DD') || null,
                    customizeGender: data?.customizeGender,
                    email: data?.email,
                    teamID: data?.teamID,
                    cpf: data?.cpf,
                    startDate: moment(data?.startDate, 'YYYY-MM-DD') || null,
                }}
                name="control-hooks">
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="birthDate"
                    label="Birth Date"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Birth Date!",
                        }
                    ]}>
                    <DatePicker format="DD/MM/YYYY" />
                </Form.Item>
                <GenderDropdown />
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="cpf" label="CPF" validateStatus={cpf.validateStatus} help={cpf.errorMsg} rules={[{ required: true }]}>
                    <MaskedInput mask="111.111.111-11" onChange={onChangeCPF} />
                </Form.Item>
                <Form.Item name="startDate" label="Start Date" rules={[{ required: true }]}>
                    <DatePicker format="MM/YYYY" picker="month" />
                </Form.Item>
                <TeamDropdown />
            </Form>
        </Modal>


    )

};

export default RegistrationPopup;

