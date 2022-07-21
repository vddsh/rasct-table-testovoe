import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {StudentAction} from '../store/Students/students.slice';

const actions = {
 ...StudentAction
}

const useActions = () => {
 const dispatch = useDispatch()

 return bindActionCreators(actions, dispatch)
};

export default useActions;
