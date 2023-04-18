import React from 'react'

const Filter = () => {
    return (
        <section className='filter-sec add-sec'>
            <h2>Arama Formu</h2>
            <div className='inputs'>
                <div className='input-field'>
                    <label>Şirket İsmi:</label>
                    <input type='text' />
                </div>
                <div className='input-field'>
                    <label>Durum:</label>
                    <select>
                        <option value="Hepsi" hidden>Hepsi</option>
                        <option value="Mülakat">Mülakat</option>
                        <option value="Reddedildi">Reddedildi</option>
                        <option value="Devam Ediyor">Devam Ediyor</option>
                    </select>
                </div>
                <div className='input-field'>
                    <label>Şirket İsmi:</label>
                    <select>
                        <option value="Önce Yeni">En Yeni</option>
                        <option value="Önce Eski">En Eski</option>
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                    </select>
                </div>
                <button>filtreleri temizle</button>
            </div>
        </section>
    )
}

export default Filter;
