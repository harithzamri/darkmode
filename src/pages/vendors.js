import React from "react";
import { Container } from "../components/Container";
import {
  FormControl,
  Input,
  FormLabel,
  Button,
  Box,
  Radio,
  Text,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import {
  CheckboxContainer,
  CheckboxControl,
  RadioGroupControl,
} from "formik-chakra-ui";
import axios from "axios";
import NavBar from "../components/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";

function Employee() {
  const router = useRouter();
  const toast = useToast();

  return (
    <Container height="100%">
      <NavBar />
      <Formik
        initialValues={{
          VendorsName: "",
          Temperature: "",
          PhoneNumber: "",
          Company: "",
          Symptom: [],
          Shift: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          axios
            .post("http://localhost:5000/employee/uploadEmployee", values)
            .then((response) => {
              if (response.data.success) {
                toast({
                  title: "Temperature has been submitted",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
                alert("data has been submitted");

                setSubmitting(false);
              }
            });
          router.push("/successPage");
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl isInvalid={false}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="VendorsName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.vendorsName}
              />
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel>Temperature</FormLabel>
              <Input
                type="text"
                name="Temperature"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.temperature}
              />
              <Text fontSize="xs" color="tomato">
                Your range of temperature must between 35.5 - 38.0
              </Text>
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="text"
                name="PhoneNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.PhoneNumber}
              />
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel>Company</FormLabel>
              <Input
                type="text"
                name="Company"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Company}
              />
            </FormControl>
            <Box d="flex" flexDirection="column">
              <CheckboxContainer name="Symptom" label="Symptom">
                <CheckboxControl name="Symptom" value="Healthy">
                  Healthy
                </CheckboxControl>
                <CheckboxControl name="Symptom" value="Fever">
                  Fever
                </CheckboxControl>
                <CheckboxControl name="Symptom" value="Cough">
                  Cough
                </CheckboxControl>
              </CheckboxContainer>
              <Input size="md" />
              <Text fontSize="xs" color="tomato">
                State history travel if you went to Redzone Area
              </Text>
            </Box>
            <Box marginTop="3px">
              <RadioGroupControl name="Shift" label="Shift">
                <Radio value="Morning">Morning</Radio>
                <Radio value="Night">Night</Radio>
              </RadioGroupControl>
            </Box>
            <Flex justifyContent="space-between" mt={2}>
              <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
                Submit
              </Button>
              <Link href="/">
                <Button colorScheme="teal">Back to Main Menu</Button>
              </Link>
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Employee;
