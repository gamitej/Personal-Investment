import "./Auth.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// icons
import { FaUserCircle } from "react-icons/fa";
// types
import { AppAuth } from "@/types/components.type";

const Auth = ({ isLoggedIn }: AppAuth) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  // =================== EVENT HANDLERS =================

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  if (!isLoggedIn) {
    navigate("/login");
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
        <form onSubmit={handleSubmit}>
          {/* username */}
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Username"
            onChange={handleInput}
          />
          {/* password */}
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleInput}
          />
          {/* submit */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
