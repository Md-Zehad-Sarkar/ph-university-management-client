import { useGetAllAcademicSemesterQuery } from "../../../redux/features/academicSemester.ts/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);

  return <div>academic semester</div>;
};

export default AcademicSemester;
