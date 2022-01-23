import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {

  const [name, setName] = useState();

  const navigate = useNavigate();
  
  const gotoProfile = () => {
    if(name){
        navigate(`/profile/${name}`);
    }else{
        alert('Enter Name!')
    }
  }

  return (
    <div className="Home">
      <label className='label-1'>Enter Name <span>'chiragbalani'</span> on the box and then Clicked on the Button</label>
      <input 
        className='input-box'
        type="text" 
        name='fullName' 
        placeholder='Enter FullName' 
        value={name} 
        onChange={e => setName(e.target.value)}
      />

      <button className='goto-btn' onClick={gotoProfile}>GOTO PROFILE</button>
    </div>
  );
}

export default Home;
