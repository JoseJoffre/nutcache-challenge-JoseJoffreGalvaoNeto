import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

import GenderDropdown from '../../commons/dropdowns/GenderDropdown';

function RegistrationPopup() {
    const [open, setOpen] = React.useState(false)

    //formData
    const [form, setForm] = React.useState({ name: "", gender: "" })


    const onChange = (e, target) => {
        setForm({})

    }


    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Register Employee</Button>}
        >
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Group>
                        <Form.Input
                            label='Name'
                            placeholder='Insert name here'
                        />
                        <Form.Input
                            label='Birth Date'
                            placeholder='Insert name here'
                        />
                        <GenderDropdown
                            value={form.gender}
                        />
                    </Form.Group>
                    <Form.Input
                        label='Email'
                        placeholder='john@doe.com'
                    />
                    <Form.Input
                        label='CPF'
                        placeholder='Numbers only'
                    />
                    <Form.Input
                        label='Start Date'
                        placeholder='MM/YYYY'
                    />
                </Form>

            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Nope
                </Button>
                <Button
                    content="Yep, that's me"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default RegistrationPopup;