import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setJops } from '../app/jopslice'


const Joplist = () => {
    const state = useSelector((state) => state.jopSlice);
    console.log(state);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('http://localhost:3004/jops')
            .then((res) => dispatch(setJops(res.data)))

    }, [])
    return (
        <div>
            İŞ EKLE
        </div>
    )
}

export default Joplist
