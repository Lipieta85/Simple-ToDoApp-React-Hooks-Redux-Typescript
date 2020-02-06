import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';

interface Props {}

const AddTodoForm: React.FC<Props & InjectedFormProps<{}, Props>> = (
    props: any,
) => {
    const { handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    style={Input}
                />
            </div>
            <AddBtn type="submit">Add</AddBtn>
        </Form>
    );
};

const form = reduxForm<{}, Props>({
    form: 'name',
})(AddTodoForm);

export default connect(null)(form);

const Form = styled.form`
    display: flex;
    justify-content: center;
`;

const AddBtn = styled.button`
    color: #2569ef;
    font-size: 1em;
    margin-right: 5px;
    padding: 0.05em 0.5em;
    border: 2px solid #2569ef;
    border-radius: 3px;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
        background-color: #2569ef;
        color: #fff;
    }
`;

const Input = {
    height: '30px',
};
