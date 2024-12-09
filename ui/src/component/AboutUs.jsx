import React from 'react';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    imageUrl: 'logo512.png',
    bio: 'Alice is a full-stack developer with over 5 years of experience in React and Node.js.',
  },
  {
    name: 'Bob Smith',
    role: 'UI/UX Designer',
    imageUrl: 'logo512.png',
    bio: 'Bob specializes in user experience design and has worked on numerous projects to improve user interfaces.',
  },
  // Add more team members as needed
];

function AboutUs() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Us</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={cardStyle}>
            <img
              src={member.imageUrl}
              alt={member.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h5 style={{ margin: '0.5rem 0' }}>{member.name}</h5>
              <p style={{ color: 'gray', margin: '0.5rem 0' }}>{member.role}</p>
              <p style={{ color: 'gray', fontSize: '0.9rem' }}>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  width: '300px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: 'white',
};

export default AboutUs;
