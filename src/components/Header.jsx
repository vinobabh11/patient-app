import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "./DropDown";
import question from '../assets/question.svg'
import notification from "../assets/notification.svg"
import logout from "../assets/logout.svg"
import profile from "../assets/profile.svg"

const Header = () => {
  const history = useNavigate();

  console.log()

  return (
    <nav className="bg-white text-black px-4 flex flex-wrap" style={{ width: '100%' }}>
      <div className="container mx-auto flex justify-between items-center" style={{ width: '55%' }}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? 'text-black py-5 border-b-2 border-secondary'
              : 'px-4 py-2'
          }
        >Dashboard</NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-black py-5 border-b-2 border-secondary'
              : 'px-4 py-2'
          } to="/register-patient">Patient Register</NavLink>
        <Dropdown title="Patient Data" items={[{opt:"Data 1", to:'/patient-data'}, {opt:"Data 2", to:"/patient-data"}]} />
        <Dropdown title="Operation Theater" items={[{opt:"OT 1", to:'/patient-data'}, {opt:"OT 2", to:"/patient-data"}]} />
        <Dropdown title="Reports" items={[{opt:"Report 1", to:'/patient-data'}, {opt:"Report 2", to:"/patient-data"}]} />
      </div>
      <div className="flex flex-wrap justify-between items-center" style={{ width: '15%' }}>
        <div className="cursor-pointer"><img src={question} alt="question" /></div>
        <div className="cursor-pointer"><img src={notification} alt="notification" /></div>
        <div className="cursor-pointer"><img src={profile} alt="profile" /></div>
        <div className="cursor-pointer" onClick={()=> history('/')}><img src={logout} alt="logout" /></div>
      </div>
    </nav>
  );
};

export default Header;
