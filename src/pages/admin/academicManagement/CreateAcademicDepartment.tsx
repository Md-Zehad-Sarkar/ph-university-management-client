import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAcademicSemesterSchema } from "../../../schemas/academicManagementValidation";
import PhSelect from "../../../components/form/PhSelect";

const nameOptions = [
  { name: "Academic Semester", value: "id" },
  { name: "Academic Semester 2", value: "id" },
];

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicDepartment = () => {
  const onSubmit = (data) => {
    // console.log(data);
    //need implement for get and create academic department and academic faculty
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm
          onSubmit={onSubmit}
          resolver={zodResolver(createAcademicSemesterSchema)}
        >
          <PhSelect label="Name" name="name" options={nameOptions} />
          <PhSelect
            label="Academic Faculty"
            name="academic faculty"
            options={yearOptions}
          />

          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
