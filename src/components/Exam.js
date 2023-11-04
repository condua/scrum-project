import {React,useEffect,useState} from 'react';
import '../scss/components/Exam.scss'
import Classlist from './Examlist'

const Exam = () => {
    const [exam,setExam] = useState([]);
    useEffect(() => {
        const getExam = async () => {
            const response = await 'http://localhost:8800/api/exam';
            if (response.isSuccess) {
                setExam(response.data);
            }
        };
        getExam();
   
    },[]);
    return (
        <div className='Exam-Container'>
            <div className='Exam-heading'><h2>Số lượng bài kiểm tra({exam.length})</h2></div>
            <div className='Exam-list'>
                <Classlist data={exam}/>
            </div>
            <div className='Exam-add'>
                <button> Thêm lớp học</button>
            </div>
        </div>
    );
};

export default Exam;