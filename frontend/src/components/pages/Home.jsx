import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";

import "./Home.less";

import RegistrationPopup from "../modal/people/RegistrationPopup";
import { createEmployees } from "../../redux/actions/employees";
import EmployeeTable from "../commons/tables/EmployeeTable";



const Home = props => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        dispatch(createEmployees(values));
        setVisible(false);
    };


    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                New Employee
            </Button>
            <RegistrationPopup
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
            <EmployeeTable />
        </div>
    );
    /* const [form] = Form.useForm();
 
     const dispatch = useDispatch();
     const onFinish = (values) => {
         console.log(values);
         dispatch(createEmployees(values));
     };
 
     return (
         <div className="Home">
             <div className="buttons">
                 <Form {...layout} name="control-hooks" onFinish={onFinish}>
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
                         label="Birth Date"
                         rules={[
                             {
                                 required: true,
                                 message: "Please input your Birth Date!",
                             }
                         ]}>
                         <DatePicker />
                     </Form.Item>
                     <GenderDropdown></GenderDropdown>
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
                     <Form.Item name='cpf' label="CPF" rules={[{ required: true }]}>
                         <Input></Input>
                     </Form.Item>
                     <Form.Item name='startDate' label="Start Date" rules={[{ required: true }]}>
                         <Input></Input>
                     </Form.Item>
                     <TeamDropdown></TeamDropdown>
                     <Form.Item>
                         <Button htmlType="submit">Submit</Button>
                     </Form.Item>
                 </Form>
             </div>
         </div >
     )*/
}

export default Home;