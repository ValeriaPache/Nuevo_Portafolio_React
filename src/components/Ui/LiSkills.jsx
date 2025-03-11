import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJava,} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import '../Pages/Skills/Skills.css'

import { Askills } from "./Askills"; 

export const LiSkills = () => {
  return (
    <ul className="liSkills">
      <Askills className="liSkills" name={FaHtml5} title="Html" /> 
      <Askills name={FaCss3 } title="Css" /> 
      <Askills name={FaReact} title="React" /> 
      <Askills name={FaJava} title="Java" /> 
      <Askills name={IoLogoJavascript} title="JavaScript" /> 
      <Askills name={SiMongodb} title="MongoDB" /> 
      <Askills name={GrMysql} title="MySqlWorbeach" /> 
    </ul>
    
    
  );
};
