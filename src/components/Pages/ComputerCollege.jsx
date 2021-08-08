import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../Reuseable Components/Title/Title';
import Computer from '../../Images/computer.jpg'

const ComputerCollege = () => {
    const [colleges, setCollege] = useState([]);
    const [eng, setEng] = useState([]);
    const [art, setArt] = useState([]);
    const [icom, setIcom] = useState([]);
    useEffect (() => {
      loadIcom();
    }, []);
    const loadIcom = async () => {
      const result = await  axios.get("http://localhost:5000/colleges?degree=I.Com");
      setIcom(result.data);
    }
    useEffect(() => {
        loadArt();
      }, []);
    
      const loadArt = async () => {
        const result = await axios.get("http://localhost:5000/colleges?degree=Arts");
        setArt(result.data);
      };
    useEffect(() => {
        loadColleges();
      }, []);
    
      const loadColleges = async () => {
        const result = await axios.get("http://localhost:5000/colleges?degree=I.C.S");
        setCollege(result.data);
      };

      useEffect(() => {
        loadEng();
      }, []);
    
      const loadEng = async () => {
        const result = await axios.get("http://localhost:5000/colleges?degree=Pre-Engineering");
        setEng(result.data);
      };

    return ( 
        <div>
            <Title title="Colleges Related" sub="to Computer Science" bg={Computer} />
            <table class="table-auto ml-48">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Degree</th>
                        <th class="px-4 py-2">Fee per Year</th>
                        <th class="px-4 py-2">Rank</th>
                        <th class="px-4 py-2">Website/Address</th>
                    </tr>
                </thead>
                <tbody>
                    {colleges.map((college) => (
                    <tr>
                        <td class="border px-4 py-2">{college.name}</td>
                        <td class="border px-4 py-2">{college.degree}</td>
                        <td class="border px-4 py-2">{college.fee}</td>
                        <td class="border px-4 py-2">{college.rank}</td>
                        <td class="border px-4 py-2">{college.website}</td>
                    </tr>
                    ))}
                    {eng.map((Eng) => (
                    <tr>
                        <td class="border px-4 py-2">{Eng.name}</td>
                        <td class="border px-4 py-2">{Eng.degree}</td>
                        <td class="border px-4 py-2">{Eng.fee}</td>
                        <td class="border px-4 py-2">{Eng.rank}</td>
                        <td class="border px-4 py-2">{Eng.website}</td>
                    </tr>
                    ))}
                    {art.map((Art) => (
                    <tr>
                        <td class="border px-4 py-2">{Art.name}</td>
                        <td class="border px-4 py-2">{Art.degree}</td>
                        <td class="border px-4 py-2">{Art.fee}</td>
                        <td class="border px-4 py-2">{Art.rank}</td>
                        <td class="border px-4 py-2">{Art.website}</td>
                    </tr>
                    ))}
                    {icom.map((Icom) => (
                    <tr>
                        <td class="border px-4 py-2">{Icom.name}</td>
                        <td class="border px-4 py-2">{Icom.degree}</td>
                        <td class="border px-4 py-2">{Icom.fee}</td>
                        <td class="border px-4 py-2">{Icom.rank}</td>
                        <td class="border px-4 py-2">{Icom.website}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default ComputerCollege;