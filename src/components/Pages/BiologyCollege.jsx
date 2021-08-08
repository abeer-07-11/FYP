import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../Reuseable Components/Title/Title';
import Bio from '../../Images/biology.jpg';

const BiologicalScience = () => {
    const [colleges, setCollege] = useState([]);
    useEffect(() => {
        loadColleges();
      }, []);
    
      const loadColleges = async () => {
        const result = await axios.get("http://localhost:5000/colleges");
        setCollege(result.data);
      };

    return (   
        <div>
            <Title title="Colleges Related" sub="to Biological Science" bg={Bio} />
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
                </tbody>
            </table>
        </div>
     );
}
 
export default BiologicalScience;