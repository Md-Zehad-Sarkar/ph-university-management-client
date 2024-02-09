import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: { userId: "A-0001", password: "admin123" },
  });

  const [login, { error }] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();

    //extract user from jwt access token
    const user = verifyToken(res.data.accessToken);

    //set user on redux local state
    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
