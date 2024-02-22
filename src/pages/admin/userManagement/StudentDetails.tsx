import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();
  return <div>student details of id {studentId}</div>;
};

export default StudentDetails;
