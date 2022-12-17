import React, { useEffect } from 'react';

function UserDashboard() {
  useEffect(() => {
    document.getElementsByClassName('dashboard')[0].scrollIntoView();
  });
  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iste hic, reprehenderit
        ab nulla tempora aut ducimus asperiores obcaecati, dolorum fuga illum animi. Quidem mollitia
        totam illo ut ea natus.
      </p>
    </div>
  );
}

export default UserDashboard;
