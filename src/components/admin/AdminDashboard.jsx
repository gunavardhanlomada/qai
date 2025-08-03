import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apicall from '../../../Endpoint';
import '../../styles/admin.css';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const res = await axios.get(`${apicall}/api/contacts/getdetails`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add "Bearer " prefix
        },
      });

      setContacts(res.data);
    } catch (error) {
      console.error('Failed to fetch contacts', error);
      alert(error.response?.data?.message || 'Unauthorized or server error');
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Contact Requests</h1>
      {loading ? (
        <p>Loading...</p>
      ) : contacts.length === 0 ? (
        <p>No contact messages found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Status</th>
              <th>Received At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneno}</td>
                <td>{contact.Subject}</td>
                <td>{contact.message}</td>
                <td>{contact.status}</td>
                <td>{new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
