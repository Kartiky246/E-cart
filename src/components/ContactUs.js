// Install styled-components first: npm install styled-components
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   setFormData({name:'',email:'',message:''})
  };

  return (
    <Container>
      <Header>Contact Us</Header>
      <Description>
        Welcome to our e-commerce platform. If you have any questions or concerns, please feel free to reach out to us using the form below.
      </Description>
      <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Label>Message:</Label>
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
