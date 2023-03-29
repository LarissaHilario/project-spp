import * as React from "react";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import styles from "./login.module.css";
import { setTokens } from '../../../Helpers/auth';
import { axiosInstance } from '../../../Helpers/axiosInstance';
import { login } from '../../../store/Slices/authSlice';
import { border, borderRadius } from "@mui/system";
import { Avatar, Button, Fab, FilledInput, FormControl, InputLabel, OutlinedInput, Stack } from "@mui/material";

const Form = () => {
  const [file, setFile] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleSubmit = async e => {
    e.preventDefault();
    const { username, password } = e.target;
    await axiosInstance
      .post('login/', {
        username: username.value,
        password: password.value,
      })
      .then(resp => {
        const { data } = resp;
        setTokens(data.token);
        dispatch(
          login({
            accessToken: data.token,
            status: resp.status,
          })
        );
      })
      .catch(({ response }) => {
       console.log(error)
      });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmitFile = (event) => {
    event.preventDefault();
    let formdata = new FormData();
    formdata.append("file", file);
    axios.post("http://3.19.59.225:8080/playlist/upload/photo", formdata).then(
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
                  src={file}
                  sx={{ width: 80, height: 80 }}
                >
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />
                </Avatar>{" "}
              </label>
              <Stack direction="column">
                <Button
                  variant="contained"
                  component="label"
                  sx={{ height: 40, marginLeft: 2, marginTop: 3 }}
                  onClick={handleSubmit}
                >
                  Subir imagen
                </Button>
              </Stack>
            </Stack>
          </div>
          <div className={styles.input}>
            <TextField
              variant="outlined"
              color="primary"
              label="Correo electrónico"
              sx={{
                width: "43%",
                background: " #D6C6FC",
                borderRadius: "5px",
              }}
            ></TextField>
          </div>
          <div className={styles.input}>
        
          <TextField
              variant="outlined"
              color="primary"
              label="Correo electrónico"
              sx={{
                width: "43%",
                background: " #D6C6FC",
                borderRadius: "5px",
              }}
            ></TextField>
                
             
             
          </div>
          <div className={styles.btnIniciar}>
            <Button
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
