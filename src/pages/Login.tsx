import { Button, Row } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";

const Login = () => {
  const navigate = useNavigate();

  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };

  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("logging in");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      //extract user from jwt access token
      const user = verifyToken(res.data.accessToken) as TUser;

      //set user on redux local state
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("login success", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <PhForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PhInput type="text" name="userId" label="ID:" />
        <PhInput type={"text"} name={"password"} label={"Password:"} />
        <Button htmlType="submit">Login</Button>
      </PhForm>
    </Row>
  );
};

export default Login;
