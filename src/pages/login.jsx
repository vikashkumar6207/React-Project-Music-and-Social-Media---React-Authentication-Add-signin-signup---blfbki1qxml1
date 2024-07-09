import React, { useLayoutEffect } from 'react'
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../provider/UserProvider";
import CSS from '@/styles/Login.module.css'
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils';
const Login = () => {
 
 
  

  
    const contextData = useContext(UserContext);
    const {nameHandler, tokenHandler} = contextData;
  
    const router = useRouter()
  
    console.log("contextData",contextData, "contextData");
  
    const [loginState, setLoginState] = useState({
      email: "",
      password: "",
  
    });
  
  
    function submitForm(){
      async function callAPI(){
        const url = "https://academics.newtonschool.co/api/v1/user/login"
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("projectId", "l2uaz7omaxbe");
  
        const raw = JSON.stringify({
            email: loginState.email,
            password: loginState.password,
            appType: "music",
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        }
        const response = await fetch(url, requestOptions)
        const data = await response.json();
        const token = data?.token;
        const name = data?.data.user.name;
  
        tokenHandler(token);
        nameHandler(name);
  
        console.log("data login", data);
    }
    callAPI();
    router.push('/')
    }
    
  
  
    function formHandler(e, key) {
      const val = e.target.value;
  
      setLoginState((old) => {
        return {
          ...old,
          [key]: val,
        };
      });
    }
  
    return (
      <>
        <form className={CSS.formContainer} onSubmit={(e) => {
          e.preventDefault();
          submitForm();
          console.log("get the state", loginState);
        }}>
          <div className={CSS.from_group}>
            <label className={CSS.form_label}>Name :</label><br/>
            <input type="text" className={CSS.input_fild}/>
  
            <label htmlFor="exampleInputEmail1" className={CSS.form_label}>
              Email :
            </label><br/>
            <input
              type="email"
              className={CSS.input_fild}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => formHandler(e, "email")}
            />
            <label htmlFor="exampleInputPassword1" className={CSS.form_label}>
              Password
            </label>
            <br/>
            <input
              type="password"
              className={CSS.input_fild}
              id="exampleInputPassword1"
              onChange={(e) => formHandler(e, "password")}
            />            
           <br/>
         
        
          <button type="submit" className={CSS.btn_primary}>
            Sign Up
          </button>
          </div>
        </form>
      </>
    );
  
}

export default Login