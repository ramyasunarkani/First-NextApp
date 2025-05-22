'use client';

import { useParams } from "next/navigation";
const developers = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];
const DetailPage = () => {
  const params=useParams();
  const id=params.aboutusid;
  const developer=developers.find(dev=>dev.id==id);
  return (
    <div>
    {developer ? (
      <>
        <h2>Name: {developer.name}</h2>
        <p>Role: {developer.role}</p>
      </>
    ) : (
      <p>Developer doesn't exist</p>
    )}
  </div>
  )
}

export default DetailPage
