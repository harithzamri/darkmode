import React from "react";
import { Container } from "../components/Container";
import {
  Image,
  FormControl,
  Input,
  FormLabel,
  Button,
  Box,
  Radio,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import {
  CheckboxContainer,
  CheckboxControl,
  RadioGroupControl,
} from "formik-chakra-ui";
import axios from "axios";

function Employee() {
  return (
    <Container height="100vh">
      <Image
        src="https://greatech-group.com/images/logo-greatech.png"
        alt="greatech dark mode"
        width="180px"
      />
      <Formik
        initialValues={{
          employeeId: "",
          temperature: "",
          symptom: [],
          shift: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("http://localhost:5000/employee/uploadEmployee", values)
            .then((response) => {
              if (response.data.success) {
                alert("data has been submitted");
                setSubmitting(false);
              }
            });

          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
            <FormControl isInvalid={false}>
              <FormLabel>Employee ID</FormLabel>
              <Input
                type="text"
                name="employeeId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.employeeId}
              />
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel>Temperature</FormLabel>
              <Input
                type="text"
                name="temperature"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.temperature}
              />
              <Text fontSize="xs" color="tomato">
                Your range of temperature must between 35.5 - 38.0
              </Text>
            </FormControl>
            <Box d="flex" flexDirection="column">
              <CheckboxContainer name="symptom" label="Symptom">
                <CheckboxControl name="symptom" value="Healthy">
                  Healthy
                </CheckboxControl>
                <CheckboxControl name="symptom" value="Fever">
                  Fever
                </CheckboxControl>
                <CheckboxControl name="symptom" value="Cough">
                  Cough
                </CheckboxControl>
              </CheckboxContainer>
              <Input size="md" />
              <Text fontSize="xs" color="tomato">
                State history travel if you went to Redzone Area
              </Text>
            </Box>
            <Box marginTop="3px">
              <RadioGroupControl name="shift" label="Shift">
                <Radio value="Morning">Morning</Radio>
                <Radio value="Night">Night</Radio>
              </RadioGroupControl>
            </Box>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
              width="100%"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Employee;
