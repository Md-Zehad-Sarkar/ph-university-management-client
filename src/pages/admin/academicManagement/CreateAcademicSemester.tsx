import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { monthOptions } from "../../../components/constants/Global";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAcademicSemesterSchema } from "../../../schemas/academicManagementValidation";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const currentYear = new Date().getFullYear();

const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [createAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const name = nameOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = (await createAcademicSemester(semesterData)) as TResponse;
      if (res?.error) {
        toast.error(res?.error.data.message, { id: toastId });
      } else {
        toast.success("semester create success", { id: toastId });
      }
    } catch (error) {
      toast.error("semester create failed", { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm
          onSubmit={onSubmit}
          resolver={zodResolver(createAcademicSemesterSchema)}
        >
          <PhSelect label="Name" name="name" options={nameOptions} />
          <PhSelect label="Year" name="year" options={yearOptions} />
          <PhSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PhSelect label="End Month" name="endMonth" options={monthOptions} />

          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
