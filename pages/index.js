import React from 'react';
import DataTable from '../components/DataTable';
import Chat from '../components/Chat'; // Adjust the path as per your actual file location
import axios from 'axios';

const HomePage = ({ initialData }) => {
  // You can replace these with actual users from your data
  const users = ['Nathen49', 'Gaston43', 'Shaina3'];

  const handleUserSelect = (user) => {
    console.log(`User selected: ${user}`);
    // Implement your logic here when a user is selected
  };

  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold mb-2">Stonks Frontend Assignment</h1> {/* Reduced bottom margin */}
      <h1 className="mb-4">by Alan Nhan</h1> {/* Added bottom margin */}
      <DataTable initialData={initialData} />
      <Chat /> {/* Include Chat component */}
      {/* <UserTagging users={users} onUserSelect={handleUserSelect} /> */}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('https://665621609f970b3b36c4625e.mockapi.io/users');
  return { props: { initialData: response.data } };
}

export default HomePage;
