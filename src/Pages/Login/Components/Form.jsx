import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import {
  Avatar,
  Button,
  Stack,
} from "@mui/material";

import styles from "./login.module.css";
import { setTokens } from "../../../Helpers/auth";
import { axiosInstance } from "../../../Helpers/axiosInstance";
import { login } from "../../../store/Slices/authSlice";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
 const Larissa = useState('Larissa')
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });

    console.log(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      username: state.username,
      password: state.password,
    };
    console.log(userData)
    await axiosInstance
      .post("user/login",userData
      )
      .then((resp) => {     
        const { data } = resp;
        console.log(data)
        setTokens(data.message.token);
        dispatch(
          login({
            accessToken: data.message.token,
            status: resp.status,
          })
        );
      }) 
      .catch(({ response }) => {
        console.log(response.data.message);
      });
  };

  const handleSubmitFile = (event) => {
    event.preventDefault();
    let uploadPhoto = new FormData();
    uploadPhoto.append("userPhoto", file);
    uploadPhoto.append("id", 1);
    axios.post("http://3.132.245.255:1234/user/uploadPhoto",uploadPhoto).then(
      (res) => {
        console.log(res.data.data);
        setUrl(res.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleChangeForm = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  return (
    <>
      <div className={styles.todo}>
        <div className={styles.formulario}>
          <div className={styles.contenedor}>
            <div className={styles.iconPagina}>
              <img src="src/assets/img/IconSsp.png" />
            </div>
            <div className={styles.titulo}>
              <h1>SSP</h1>
            </div>
          </div>
          <div className={styles.subtit}>
            <h2>Inicia Sesión con tu cuenta</h2>
          </div>
          <div className={styles.image}>
            <Stack direction="row">
              <label htmlFor="upload-photo">
                <Avatar
                  alt="Remy Sharp"
                  src={'/'+file}
                  sx={{ width: 80, height: 80 }}
                >
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={handleChangeForm}
                  />
                </Avatar>{" "}
              </label>
              <Stack direction="column">
                <Button
                  variant="contained"
                  component="label"
                  sx={{ height: 40, marginLeft: 2, marginTop: 3 }}
                  onClick={handleSubmitFile}
                >
                  Subir imagen
                </Button>
              </Stack>
            </Stack>
          </div>
          <div className={styles.input}>
            <TextField
              name="username"
              variant="outlined"
              color="primary"
              label="Correo electrónico"
              sx={{
                width: "43%",
                background: " #D6C6FC",
                borderRadius: "5px",
              }}
              value={state.username}
              onChange={handleChange}
            ></TextField>
          </div>
          <div className={styles.input}>
            <TextField
              type="password"
              name="password"
              variant="outlined"
              color="primary"
              label="Contraseña"
              value={state.password}
              onChange={handleChange}
              sx={{
                width: "43%",
                background: " #D6C6FC",
                borderRadius: "5px",
              }}
            ></TextField>
          </div>
          <div className={styles.btnIniciar}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              sx={{ borderRadius: 2, width: "42%", height: 50 }}
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
        <div className={styles.container}>
          <img src="src/assets/img/doctor.png" />
        </div>
      </div>
    </>
  );
};

export default Form;
