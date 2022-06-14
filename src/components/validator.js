// import React, {useEffect, useRef, useState} from 'react';
//
//
// function validate (event, name, value) {
//     const {name, value} = event.target;
//     return validateField(name, value);
// }
//
// const [values, setValues] = useState({});
// const [errors, setErrors] = useState({});
//
//
//  function validateField(name, value) {
//     let errorMessage = '';
//     switch (name) {
//         case 'user_name':
//             if (!value || value.length < 3 || value.length > 20){
//                 errorMessage = 'Name is required';
//             }else if(!/^[a-zA-Z]+$/.test(value)){
//                 errorMessage = 'Name must be letters only';
//             } else {
//                 errorMessage = '';
//             } break;
//         case 'user_email':
//             if (!value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
//                 errorMessage = 'Email is required';
//             } else {
//                 errorMessage = '';
//             }
//             break;
//         case 'message':
//             if (!value || value.length < 10 || value.length > 500){
//                 errorMessage = 'Message is required';
//             }
//             else {
//                 errorMessage = '';
//             } break;
//         default:
//             break;
//     }
//  }
//
//
