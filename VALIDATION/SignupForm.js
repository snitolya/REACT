import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
 
export default function SignupForm () {
 
       const validationsSchema= yup.object().shape({
        name: yup.string()
        .typeError('Only letters')
        .required('Required')
        .max(10, `Must be 10 letters or less`)
        .min(3, 'Must be 3 letters or more'),

        userName: yup.string()
        .typeError('Only letters')
        .required('Required')
        .max(10, `Must be 10 letters or less`)
        .min(3, 'Must be 3 letters or more'),

        email: yup.string()
        .email('Write the correct email')
        .required('Required'),

        password: yup.string()
        .min(5, 'Must be more than 5 letters ')
        .required('Required'),

        confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'The passwords are different!')
        .required('Required'),

        message: yup.string()
        .min(10, 'Must be more than 10 letters')
        .required('Required'),
   })

    return (
        <div>
          <Formik
          initialValues={{
            name: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            message: ''
        }}
            validateOnBlur //валидироваться будет когда переходим на следующее поле 
            onSubmit={(values) => {console.log(values)}}  // метод , который вызывает функцию во время отправки формы
            validationsSchema={validationsSchema}
        >
        {/* // touched - показывает  взаимодействовали ли мы с полем ранее 
        handleChange - вызывается каждый раз когда мы меняем значение формы
        handleBlur - вызывается в тот момент когда мы уходим с какого-то поля 
        isValid - валидна форма в данны момент или нет 
        handleSubmit - привязываем к кнопке и он вызывает ф-цию onSubmit 
        dirty - изменялись ли когда значения в форме*/}
        {({ values, errors, touched, handleChange , handleBlur , isValid , handleSubmit , dirty })=>(
            <div className={'form'}>
            <p>
            <label htmlFor={'name'}>Name</label><br/>
            <input 
            className={'input'}
            type={'text'}
            name={'name'}
            placeholder={'Name'}
            onChange={handleChange}
            onBlur={handleBlur} //вызываем значение этого инпута 
            value={values.name}
          />
            </p>
            {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}

            <p>
            <label htmlFor={'userName'}>Userame</label><br />
            <input 
            className={'input'}
            type={'text'}
            name={'userName'}
            placeholder={'Username'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
          />
            </p>

            {touched.userName && errors.userName && <p className={'error'}>{errors.userName}</p>}


            <p>
            <label htmlFor={'email'}>Email</label><br />
            <input 
            className={'input'}
            type={'text'}
            name={'email'}
            placeholder={'Email'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
            </p>

            {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}





            <p>
            <label htmlFor={'password'}>Password</label><br />
            <input 
            className={'input'}
            type={'password'}
            name={'password'}
            placeholder={'Password'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
            </p>

            {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}


            <p>
            <label htmlFor={'confirmPassword'}>Confirm Password</label><br />
            <input 
            className={'input'}
            type={'password'}
            name={'confirmPassword'}
            placeholder={'Confirm Password'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
            </p>

            {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}



            <p>
            <label htmlFor={'message'}>Message</label><br />
            <input 
            className={'input'}
            type={'text'}
            name={'message'}
            placeholder={'Message'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
            </p>
            {touched.message && errors.message && <p className={'error'}>{errors.message}</p>}


            

            <button
            className='btn form-control btn-primary'
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={'submit'}
            >Send</button>
            </div>)}
  
                  
            </Formik>
        </div>
    );
};