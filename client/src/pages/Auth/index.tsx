import "./Auth.scss";
// libs
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// icons
import { FaUserCircle } from "react-icons/fa";
// types
import { AppAuth } from "@/types/components.type";

const Auth = ({ isLoggedIn }: AppAuth) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => console.log(data);
  if (isLoggedIn) {
    navigate("/");
  }

  /**
   * TSX
   */
  return (
    <div className="auth">
      <div className="container">
        <p>
          <FaUserCircle />
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* username */}
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Username"
            {...register("username", { required: true, minLength: 4 })}
          />
          {errors.username && errors.username.type === "required" && (
            <span className="errorMsg">Username is required.</span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span className="errorMsg">Username is not valid.</span>
          )}
          {/* password */}
          <input
            type="text"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <span className="errorMsg">Password is required.</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="errorMsg">Password is not valid.</span>
          )}
          {/* submit */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
