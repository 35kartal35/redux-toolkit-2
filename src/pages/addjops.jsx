
import React from 'react'

const Addjops = () => {


    return (
        <section className="add-sec">
            <h2>Yeni İş Ekle</h2>

            <div className="inputs">
                <div className="input-field">
                    <label>Pozisyon</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Şirket</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Lokasyon</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Pozisyon</label>
                    <select>
                        <option value="">Mülakat</option>
                        <option value="">Devam Ediyor</option>
                        <option value="">Reddedildi</option>
                    </select>
                </div>

                <div className="input-field">
                    <label>Pozisyon</label>
                    <select>
                        <option value="">Tam Zaman</option>
                        <option value="">Yarı Zaman</option>
                        <option value="">Uzaktan</option>
                        <option value="">Staj</option>
                    </select>
                </div>

                <button>Ekle</button>
            </div>
        </section>
    )
}

export default Addjops
