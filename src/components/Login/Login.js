import React from "react";
import {useState} from "react";
import {getToken} from "../../api/api";
import {connect} from "react-redux";
import {setIsAuthAction} from "../../redux/actions";

const Login = ({setIsAuth}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errLogin, setErrLogin] = useState(true);
  const [errPassword, setErrPassword] = useState(true);
  const [wrongErrorLogin, setWrongErrorLogin] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = event => {
    event.preventDefault();

    if (login.length === 0) {
      setErrLogin(false);
    }

    if (password.length === 0) {
      setErrPassword(false);
    }

    if (login.length !== 0 && password.length !== 0) {
      setLoading(true);
      getToken(login, password)
        .then(response => {
          localStorage.setItem("access", response.data.access);
          setIsAuth();
        })
        .catch(err => {
          if (err.response.status === 401) {
            setLogin("");
            setPassword("");
            setWrongErrorLogin("Не верные имя пользователя или пароль");
            setLoading(false);
          }
        })
    }
  }

  const changeLoginHandler = (event) => {
    setLogin(event.target.value);
    setErrLogin(true);
    setWrongErrorLogin("");
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
    setErrPassword(true);
    setWrongErrorLogin("");
  };

  return (
    <>
      <div className="card w-50 mx-auto mt-5">
        <div className="mt-3 text-danger text-center">{wrongErrorLogin}</div>
        <form className="card-body" onSubmit={submitHandler}>
          <div className={"mb-3"}>
            <label htmlFor="titleLogin">Логин</label>
            <input
              type="text"
              className={!errLogin ? "form-control border border-danger" : "form-control"}
              id="Login"
              value={login}
              onChange={changeLoginHandler}
            />
            <div className="text-danger">{!errLogin ? "Поле не может быть пустым" : ""}</div>
          </div>
          <div className="mb-3 error">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className={!errPassword ? "form-control border border-danger" : "form-control"}
              id="password"
              value={password}
              onChange={changePasswordHandler}
            />
            <div className="text-danger">{!errPassword ? "Поле не может быть пустым" : ""}</div>
          </div>
          <button disabled={loading} className="btn btn-primary" type="submit">
            Войти
            {loading &&
              <span className="spinner-border spinner-border-sm ms-3" role="status" aria-hidden="true"></span>
            }
          </button>
        </form>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsAuth: () => dispatch(setIsAuthAction())
  }
}

export default connect(null, mapDispatchToProps)(Login)
