import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: { userId: "A-0001", password: "admin123" },
  });

  const [login, { data, error }] = useLoginMutation();
  console.log("data=>", data);
  console.log("error=>", error);
  const onSubmit = (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    console.log(userInfo);
    login(userInfo);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'10px'}}>
      <div>
        <label htmlFor="id"></label>
        <input type="text" {...register("userId")} name="id" id="id" />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          type="text"
          {...register("password")}
          name="password"
          id="password"
        />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
