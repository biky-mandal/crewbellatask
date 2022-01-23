import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './profile.css';


const Profile = () => {
    const params = useParams();
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        const fetchFunc = async () => {
          const response = await fetch(`https://py.crewbella.com/user/api/profile/${params.name}`);
          const data = await response.json();
          setFetchedData(data);
        }
    
        fetchFunc();
      },[params.name])
    
      console.log(fetchedData);
    return(
        <div className='profile-div'>
            <div className='bio-div'>
                <div className='cover'><img src={fetchedData ? fetchedData.basic.cover : '#'}/></div>
                <div className='profile-pic'><img src={fetchedData ? fetchedData.basic.image_hd : '#'}/></div>
                <h2>{fetchedData ? fetchedData.basic.fullname : '#'}</h2>
                <div className='lbl-div'>
                    <label> <span>followings:</span> {fetchedData ? fetchedData.basic.followings : '#'}</label>
                    <label> <span>DOB:</span> {fetchedData ? fetchedData.basic.dob : '#'}</label>
                </div>
            </div>

            <div className='crew-div'>
                <h2>Blogs</h2>
                <label className='sub-lbl-main'>
                    {fetchedData ? 
                        fetchedData.blogs.length === 0 ? 
                            'NO CONTENT' : 'LOADING...'
                        : null
                    }
                </label>
            </div>

            <div className='client-div'>
                <h2>Client Posting</h2>
                <div className='client-posting-div'>
                    {fetchedData ? 
                        fetchedData.client_postings.map(post => {
                            return(
                                <div className='post-card'>
                                    <label> <span>Job Type: </span>{post.job_type}</label>
                                    <label> <span>Profession: </span>{post.profession}</label>
                                    <label> <span>Description: </span>{post.description}</label>
                                    <label> <span>Location: </span>{post.location}</label>
                                    <label> <span>Experience: </span>{post.experience} years</label>
                                    <label> <span>Skills: </span>{post.skills}</label>
                                    <label> <span>Time Period: </span>{post.time_period}</label>
                                    <label> <span>Time Starts: </span>{post.time_start}</label>
                                    <label> <span>Openings: </span>{post.openings}</label>
                                    <label> <span>Budget: </span>{post.budget} {post.budget_cc}</label>
                                </div>
                            )
                        }) 
                    : null}
                </div>
            </div>

            <div className='crew-div'>
                <h2>Crew Posting</h2>
                <label className='sub-lbl-main'>
                    {fetchedData ? 
                        fetchedData.crew_postings.length === 0 ? 
                            'NO CONTENT' : 'LOADING...'
                        : null
                    }
                </label>
            </div>


            <div className='client-div'>
                <h2>Events</h2>
                <div className='client-posting-div'>
                    {fetchedData ? 
                        fetchedData.events.map(event => {
                            return(
                                <div className='post-card'>
                                    <img src={event.thumbnail}/>
                                    <label> {event.theme}</label>
                                </div>
                            )
                        }) 
                    : null}
                </div>
            </div>

            <div className='client-div'>
                <h2>Locations</h2>
                <div className='client-posting-div'>
                    {fetchedData ? 
                        fetchedData.locations.map(loc => {
                            return(
                                <div className='post-card'>
                                     <label> <span>Country: </span>{loc.country}</label>
                                    <label> <span>State: </span>{loc.state}</label>
                                    <label> <span>City: </span>{loc.city}</label>
                                    <label> <span>Zip Code: </span>{loc.zip_code}</label>
                                </div>
                            )
                        }) 
                    : null}
                </div>
            </div>


            <div className='client-div'>
                <h2>Portfolio</h2>
                <div className='client-posting-div'>
                    {fetchedData ? 
                        fetchedData.portfolio.map(port => {
                            return(
                                <div className='post-card'>
                                    {port.images.map(img => {
                                        return <img src={img.image}/>
                                    })}
                                    <label> <span>Position: </span>{port.position}</label>
                                    <label> <span>Project Name: </span>{port.project_name}</label>
                                    <label> <span>Description: </span>{port.description}</label>
                                    <label> <span>Start: </span>{port.started_time}</label>
                                    <label> <span>End: </span>{port.ended_time}</label>
                                </div>
                            )
                        }) 
                    : null}
                </div>
            </div>

            <div className='client-div'>
                <h2>Professions</h2>
                <div className='client-posting-div'>
                    {fetchedData ? 
                        fetchedData.professions.map(prof => {
                            return(
                                <div className='post-card'>
                                    <label> <span>Title: </span>{prof.title}</label>
                                    <label> <span>Experience: </span>{prof.experience}</label>
                                    <label> <span>Available : </span>{prof.for_quickbook ? 'YES': 'NO'}</label>
                                    <label>Quick Book Details:</label>
                                    <div className='sub-div-prof'>
                                        <label>Active: {prof.quickbook_details ? prof.quickbook_details.is_active ? 'YES': 'NO' : 'Does not Exist'}</label>
                                        <label>Flexible: {prof.quickbook_details ? prof.quickbook_details.is_flexible ? 'YES': 'NO' : 'Does not Exist'}</label>
                                        <label>Rate: {prof.quickbook_details ? `${prof.quickbook_details.rate_amount}:${prof.quickbook_details.rate_currency}` : 'Does not Exist'}</label>
                                        <label>Duration: {prof.quickbook_details ? prof.quickbook_details.rate_duration : 'Does not Exist'}</label>
                                    </div>
                                </div>
                            )
                        }) 
                    : null}
                </div>
            </div>


            <div className='client-div'>
                <h2>Questions</h2>
                <div className='client-posting-div'>
                    {fetchedData ? 
                        fetchedData.questions.map(q => {
                            return(
                                <div className='post-card'>
                                    <label> <span>Q: </span>{q.title} ?</label>
                                    <label> <span>Answer: </span>{q.answer.description}</label>
                                </div>
                            )
                        }) 
                    : null}
                </div>
            </div>


            <div className='crew-div'>
                <h2>Skills</h2>
                <label className='sub-lbl-main'>
                    {fetchedData ? 
                        fetchedData.skills.length === 0 ? 
                            'NO CONTENT' : 'LOADING...'
                        : null
                    }
                </label>
            </div>

            <div className='crew-div'>
                <h2>Social Hubs</h2>
                <label className='sub-lbl-main'>
                    {fetchedData ? 
                        fetchedData.social_hubs.length === 0 ? 
                            'NO CONTENT' : 'LOADING...'
                        : null
                    }
                </label>
            </div>

            <hr/>
            <div className='crew-div'>
                <label className='sub-lbl-main'>Developed By BIKY MANDAL</label>
            </div>
        </div>
    );
}

export default Profile;