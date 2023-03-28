import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getCharacterDetail, cleanDetail} from '../redux/actions/actions';

const useCharacter = ()=>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const character = useSelector((state)=>state.characterDetail.payload);

    useEffect(() => {
        dispatch(getCharacterDetail(id));
    
        return ()=>{
          dispatch(cleanDetail())
        }
        }, [id]);

    return character;

}

export default useCharacter;