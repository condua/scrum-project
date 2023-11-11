import {React,useEffect,useState} from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../scss/components/Exam.scss';
import Classlist from './Examlist';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Exam = () => {
    const [exam,setExam] = useState([
        {
            "_id": "6545ea237f4673794a050ec6",
            "name": "PPL",
            "password": "123",
            "createdAt": "2023-11-04T06:52:19.863Z",
            "updatedAt": "2023-11-04T06:52:19.863Z",
            "__v": 0
        },
        {
            "_id": "6545ea7827af628f0164c648",
            "name": "PPL",
            "password": "123",
            "createdAt": "2023-11-04T06:53:44.314Z",
            "updatedAt": "2023-11-04T06:53:44.314Z",
            "__v": 0
        },
        {
            "_id": "6545ea9ea33f20563ec61af9",
            "name": "PPL",
            "password": "123",
            "createdAt": "2023-11-04T06:54:22.702Z",
            "updatedAt": "2023-11-04T06:54:22.702Z",
            "__v": 0
        },
        {
            "_id": "6545eab3a33f20563ec61afb",
            "name": "db",
            "password": "123",
            "createdAt": "2023-11-04T06:54:43.910Z",
            "updatedAt": "2023-11-04T06:54:43.910Z",
            "__v": 0
        },
        {
            "_id": "6545ea237f4673794a050ec6",
            "name": "PPL",
            "password": "123",
            "createdAt": "2023-11-04T06:52:19.863Z",
            "updatedAt": "2023-11-04T06:52:19.863Z",
            "__v": 0
        },
        {
            "_id": "6545ea7827af628f0164c648",
            "name": "PPL",
            "password": "123",
            "createdAt": "2023-11-04T06:53:44.314Z",
            "updatedAt": "2023-11-04T06:53:44.314Z",
            "__v": 0
        },
        {
            "_id": "6545ea9ea33f20563ec61af9",
            "name": "PPL",
            "password": "123",
            "createdAt": "2023-11-04T06:54:22.702Z",
            "updatedAt": "2023-11-04T06:54:22.702Z",
            "__v": 0
        },
        {
            "_id": "6545eab3a33f20563ec61afb",
            "name": "db",
            "password": "123",
            "createdAt": "2023-11-04T06:54:43.910Z",
            "updatedAt": "2023-11-04T06:54:43.910Z",
            "__v": 0
        },
        {
            "_id": "6545ea237f4673794a050ec6",
            "name": "PPL",
            "password": "123",
            "createdAt": "2023-11-04T06:52:19.863Z",
            "updatedAt": "2023-11-04T06:52:19.863Z",
            "__v": 0
        },
        {
            "_id": "6545ea7827af628f0164c648",
            "name": "PPL",
            "password": "123",
            "createdAt": "2023-11-04T06:53:44.314Z",
            "updatedAt": "2023-11-04T06:53:44.314Z",
            "__v": 0
        },
        {
            "_id": "6545ea9ea33f20563ec61af9",
            "name": "PPL",
            "password": "123",
            "createdAt": "2023-11-04T06:54:22.702Z",
            "updatedAt": "2023-11-04T06:54:22.702Z",
            "__v": 0
        },
        {
            "_id": "6545eab3a33f20563ec61afb",
            "name": "db",
            "password": "123",
            "createdAt": "2023-11-04T06:54:43.910Z",
            "updatedAt": "2023-11-04T06:54:43.910Z",
            "__v": 0
        }
    ]);
    // useEffect(() => {
    //     const getExam = async () => {
    //         try{
    //             let data = await axios.get('http://localhost:8800/api/exam')
    //             console.log('data',data)
    //         }
    //         catch (err){
    //             console.log('err',err)
    //         }
    //         // const response = await 'http://localhost:8800/api/exam';
    //         // console.log('res',response)
    //         // if (response.isSuccess) {
    //         //     setExam(response.data);
    //         // }
    //     };
    //     getExam();
   
    // },[]);
    return (
        <div className='Exam-Container'>
            <div className='Exam-heading'><h2>Số lượng bài kiểm tra({exam.length})</h2></div>
            <div className='Exam-list'>
                <Classlist data={exam}/>
            </div>
            <div className='Exam-add'>
                <Button icon={<PlusOutlined />} type="primary">
                    <NavLink to='/classes/add'>Thêm bài thi</NavLink>
                </Button>
            </div>
        </div>
        
    );
};

export default Exam;