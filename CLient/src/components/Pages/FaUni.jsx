import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Title from '../Reuseable Components/Title/Title';
import FA from '../../Images/fine.jpg'

const fa = () => {
    const [art, setArt] = useState([]);
    const [cfa, setcfa] = useState([]);
    const [social, setsocial] = useState([]);
    const [manag, setmanag] = useState([]);
    const [law, setlaw] = useState([]);
    const [religious, setreligious] = useState([]);
    const [language, setlanguage] = useState([]);
    const [media, setmedia] = useState([]);
    useEffect(() => {
        loadmedia();
    },[]);
    const loadmedia = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Media");
        setmedia(result.data);
    }
    useEffect(() => {
        loadlanguage();
    },[]);
    const loadlanguage = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Language");
        setlanguage(result.data);
    }
    useEffect(() => {
        loadreligious();
    },[]);
    const loadreligious = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Religious");
        setreligious(result.data);
    }
    useEffect(() => {
        loadlaw();
    }, []);
    const loadlaw = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Law");
        setlaw(result.data);

    }
    useEffect(() => {
        loadmanag();
    }, []);
    const loadmanag = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Management");
        setmanag(result.data);
    }
    useEffect(() => {
        loadsocial();
    }, []);
    const loadsocial = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Social");
        setsocial(result.data);
    }
    useEffect (() => {
      loadcfa();
    }, []);
    const loadcfa = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Commerce");
        setcfa(result.data);
      };
    useEffect(() => {
        loadArt();
      }, []);
    
      const loadArt = async () => {
        const result = await axios.get("http://localhost:5000/universities?department=Arts");
        setArt(result.data);
      };
    return ( 
        <div>
            <Title title="Universities & Degrees" sub="Related to Fine Arts" bg ={FA} />
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
                    {art.map((Art) => (
                    <tr>
                        <td class="border px-4 py-2">{Art.name}</td>
                        <td class="border px-4 py-2">{Art.degree}</td>
                        <td class="border px-4 py-2">{Art.fee}</td>
                        <td class="border px-4 py-2">{Art.rank}</td>
                        <td class="border px-4 py-2">{Art.website}</td>
                    </tr>
                    ))}
                    {social.map((social) => (
                    <tr>
                        <td class="border px-4 py-2">{social.name}</td>
                        <td class="border px-4 py-2">{social.degree}</td>
                        <td class="border px-4 py-2">{social.fee}</td>
                        <td class="border px-4 py-2">{social.rank}</td>
                        <td class="border px-4 py-2">{social.website}</td>
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
 
export default fa;