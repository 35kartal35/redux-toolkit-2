
import React, { useState } from 'react'


const Addjops = () => {

    const [formState, setFormState] = useState({
        id: +(new Date().getTime()),
        position: "",
        company: "",
        location: "",
        status: "Mülakat",
        type: "Tam Zaman",
        date: new Date().toLocaleDateString(),
    })

    const handleSubmit = () => {
        console.log('>>handlesubmit', formState)
    }

    return (
        <section className="add-sec">
            <h2>Yeni İş Ekle</h2>

            <div className="inputs">
                <div className="input-field">
                    <label>Pozisyon</label>
                    <input type="text" onChange={(e) => setFormState({ ...formState, position: e.target.value })} />
                </div>

                <div className="input-field">
                    <label>Şirket</label>
                    <input type="text" onChange={(e) => setFormState({ ...formState, company: e.target.value })} />
                </div>

                <div className="input-field">
                    <label>Lokasyon</label>
                    <input type="text" onChange={(e) => setFormState({ ...formState, location: e.target.value })} />
                </div>

                <div className="input-field">
                    <label>Durum</label>
                    <select onChange={(e) => setFormState({ ...formState, status: e.target.value })} >
                        <option value="Mülakat">Mülakat</option>
                        <option value="Devam Ediyor">Devam Ediyor</option>
                        <option value="Reddedildi">Reddedildi</option>
                    </select>
                </div>

                <div className="input-field">
                    <label>tür</label>
                    <select onChange={(e) => setFormState({ ...formState, type: e.target.value })}>
                        <option value="Tam Zaman">Tam Zaman</option>
                        <option value="Yarı Zaman">Yarı Zaman</option>
                        <option value="Uzaktan">Uzaktan</option>
                        <option value="Staj">Staj</option>
                    </select>
                </div>

                <button onClick={handleSubmit}>Ekle</button>
            </div>
        </section>
    )
}

export default Addjops
