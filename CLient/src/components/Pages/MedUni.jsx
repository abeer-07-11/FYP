import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Title from '../Reuseable Components/Title/Title';
import Medical_BG from '../../Images/medical.jpeg';

const CsUni = () => {
    const [mu, setmu] = useState([]);
    const [art, setArt] = useState([]);
    const [cfa, setcfa] = useState([]);
    const [manag, setmanag] = useState([]);
    const [law, setlaw] = useState([]);
    const [religious, setreligious] = useState([]);
    const [language, setlanguage] = useState([]);
    const [media, setmedia] = useState([]);
    
    useEffect(() => {
        loadmedia();
    },[]);
    const loadmedia = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=media");
        setmedia(result.data);
    }
    useEffect(() => {
        loadlanguage();
    },[]);
    const loadlanguage = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Languages");
        setlanguage(result.data);
    }
    useEffect(() => {
        loadreligious();
    },[]);
    const loadreligious = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=religious");
        setreligious(result.data);
    }
    useEffect(() => {
        loadlaw();
    }, []);
    const loadlaw = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=law");
        setlaw(result.data);

    }
    useEffect(() => {
        loadmanag();
    }, []);
    const loadmanag = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Sciences");
        setmanag(result.data);
    }
    useEffect (() => {
      loadcfa();
    }, []);
    const loadcfa = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=commerce");
        setcfa(result.data);
      };
    useEffect(() => {
        loadArt();
      }, []);
    
      const loadArt = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=arts");
        setArt(result.data);
      };

      useEffect(() => {
        loadmu();
      }, []);
    
      const loadmu = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=medical");
        setmu(result.data);
      };

    return ( 
        <div>
            <Title title="Universities & Degrees" sub="Related to Medical Science" bg={Medical_BG} />
            <table class="table-auto ml-12">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Degree</th>
                        <th class="px-4 py-2">Fee per Semester</th>
                        <th class="px-4 py-2">Rank</th>
                        <th class="px-4 py-2">Website/Address</th>
                    </tr>
                </thead>
                <tbody>
                    {mu.map((mu) => (
                    <tr>
                        <td class="border px-4 py-2">{mu.name}</td>
                        <td class="border px-4 py-2">{mu.degree}</td>
                        <td class="border px-4 py-2">{mu.fee}</td>
                        <td class="border px-4 py-2">{mu.rank}</td>
                        <td class="border px-4 py-2">{mu.website}</td>
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
                    {cfa.map((cfa) => (
                    <tr>
                        <td class="border px-4 py-2">{cfa.name}</td>
                        <td class="border px-4 py-2">{cfa.degree}</td>
                        <td class="border px-4 py-2">{cfa.fee}</td>
                        <td class="border px-4 py-2">{cfa.rank}</td>
                        <td class="border px-4 py-2">{cfa.website}</td>
                    </tr>
                    ))}
                    {manag.map((manag) => (
                    <tr>
                        <td class="border px-4 py-2">{manag.name}</td>
                        <td class="border px-4 py-2">{manag.degree}</td>
                        <td class="border px-4 py-2">{manag.fee}</td>
                        <td class="border px-4 py-2">{manag.rank}</td>
                        <td class="border px-4 py-2">{manag.website}</td>
                    </tr>
                    ))}
                    {law.map((law) => (
                    <tr>
                        <td class="border px-4 py-2">{law.name}</td>
                        <td class="border px-4 py-2">{law.degree}</td>
                        <td class="border px-4 py-2">{law.fee}</td>
                        <td class="border px-4 py-2">{law.rank}</td>
                        <td class="border px-4 py-2">{law.website}</td>
                    </tr>
                    ))}
                    {religious.map((religious) => (
                    <tr>
                        <td class="border px-4 py-2">{religious.name}</td>
                        <td class="border px-4 py-2">{religious.degree}</td>
                        <td class="border px-4 py-2">{religious.fee}</td>
                        <td class="border px-4 py-2">{religious.rank}</td>
                        <td class="border px-4 py-2">{religious.website}</td>
                    </tr>
                    ))}
                    {language.map((language) => (
                    <tr>
                        <td class="border px-4 py-2">{language.name}</td>
                        <td class="border px-4 py-2">{language.degree}</td>
                        <td class="border px-4 py-2">{language.fee}</td>
                        <td class="border px-4 py-2">{language.rank}</td>
                        <td class="border px-4 py-2">{language.website}</td>
                    </tr>
                    ))}
                    {media.map((media) => (
                    <tr>
                        <td class="border px-4 py-2">{media.name}</td>
                        <td class="border px-4 py-2">{media.degree}</td>
                        <td class="border px-4 py-2">{media.fee}</td>
                        <td class="border px-4 py-2">{media.rank}</td>
                        <td class="border px-4 py-2">{media.website}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default CsUni;