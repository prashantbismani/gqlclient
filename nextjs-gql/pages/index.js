import { useQuery, gql } from '@apollo/client';
import styles from '../styles/UsersList.module.css';

const ALL_USERS_QUERY = gql`
  query {
    getAllUsers {
      id
      email
      name
    }
  }
`;

const UsersList = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users List</h1>
      <ul className={styles.userList}>
        {data.getAllUsers.map((user) => (
          <li key={user.id} className={styles.userItem}>
            <strong>ID:</strong> {user.id} &nbsp; 
            <strong>Name:</strong> {user.name} &nbsp; 
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;