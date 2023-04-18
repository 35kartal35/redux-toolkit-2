import React from 'react'
import { useDispatch } from 'react-redux'
import { handleInputChange, handleReset, handleSortChange, handleStatusChange } from '../app/jopSlice';


const Filter = () => {
    const dispatch = useDispatch();
    const onSearchChange = (e) => {
        dispatch(handleInputChange(e.target.value))
    }

    const onStatusChange = (e) => {
        dispatch(handleStatusChange(e.target.value))
    }

    const onShortChange = (e) => {
        dispatch(handleSortChange(e.target.value))
    }

    //filtreleri temizle

    const onResetButton = () => {
        dispatch(handleReset());

    }
    return (
        <section className='filter-sec add-sec'>
            <h2>Arama Formu</h2>
            <div className='inputs'>
                <div className='input-field'>
                    <label>Şirket İsmi:</label>
                    <input type='text' onChange={(e) => onSearchChange(e)} />
                </div>
                <div className='input-field'>
                    <label>Durum:</label>
                    <select onChange={(e) => onStatusChange(e)}>
                        <option value="Hepsi" hidden>
                            Hepsi</option>
                        <option value="Mülakat">Mülakat</option>
                        <option value="Reddedildi">Reddedildi</option>
                        <option value="Devam Ediyor">Devam Ediyor</option>
                    </select>
                </div>
                <div className='input-field'>
                    <label>Şirket İsmi:</label>
                    <select onChange={(e) => onShortChange(e)}>
                        <option value="Önce Yeni">En Yeni</option>
                        <option value="Önce Eski">En Eski</option>
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                    </select>
                </div>
                <button onClick={onResetButton}>filtreleri temizle</button>
            </div>
        </section>
    );
};

export default Filter;
