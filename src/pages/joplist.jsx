import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setJops } from '../app/jopSlice'


const Joplist = () => {
    const state = useSelector((state) => state.jopSlice)
    console.log(state.jops)
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('http://localhost:3004/jops')
            .then((res) =>
                dispatch(setJops(res.data))
            );

    }, [])



    return (
        <>
            <h3 className="job-count"> {state.jops.length} İş BUlundu</h3>
            <section className="list-section">
                {!state.initialized ? (
                    <p>Loading....</p>
                ) : (
                    state.map((job) => (
                        <div key={job.id} className="job-card">
                            {/* kartın üst kısmı */}
                            <div className="head">
                                <div className="letter">
                                    <p>{job.company[0]}</p>
                                </div>
                                <div className="info">
                                    <p>{job.position}</p>
                                    <p>{job.company}</p>
                                </div>
                            </div>
                            {/* kartın alt kısmı */}
                            <div className="body">
                                <div className="field">
                                    <img src="/images/map.png" />
                                    <p>{job.location}</p>
                                </div>
                                <div className="field">
                                    <img src="/images/calendar.png" />
                                    <p>{job.date}</p>
                                </div>
                                <div className="field">
                                    <img src="/images/bag.png" />
                                    <p>{job.type}</p>
                                </div>

                                <div className="status">
                                    <p className={job.status}>{job.status}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </>
    );
};

export default Joplist
//{state.initialized && state.jops.map}//