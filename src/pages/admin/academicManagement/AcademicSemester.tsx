import { useGetAllAcademicSemesterQuery } from "../../../redux/features/academicSemester.ts/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);
  console.log(data);
  return <div>academic semester</div>;
};

export default AcademicSemester;
