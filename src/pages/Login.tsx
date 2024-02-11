import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: { userId: "A-0001", password: "admin123" },
  });

  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  // const onSubmit = async (data: FieldValues) => {
  //   const toastId = toast.loading("logging in");
  //   try {
  //     const userInfo = {
  //       id: data.userId,
  //       password: data.password,
  //     };

  //     const res = await login(userInfo).unwrap();

  //     //extract user from jwt access token
  //     const user = verifyToken(res.data.accessToken) as TUser;

  //     //set user on redux local state
  //     dispatch(setUser({ user: user, token: res.data.accessToken }));
  //     toast.success("login success", { id: toastId, duration: 2000 });
  //     navigate(`/${user.role}/dashboard`);
  //   } catch (error) {
  //     toast.error("something went wrong", { id: toastId, duration: 2000 });
  //   }
  // };

  return (
    <PhForm onSubmit={handleSubmit(onSubmit)}>
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
    </PhForm>
  );
};

export default Login;
