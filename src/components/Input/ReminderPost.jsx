import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ReminderPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [deadlineTime, setDeadlineTime] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()


  const toast = useToast();

  const handleCreateReminder = async () => {

    if (!title || !content || !deadlineDate || !deadlineTime) {
      toast({
        title: "All fields are required.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const deadlineDateTime = new Date(`${deadlineDate}T${deadlineTime}`);

    setLoading(true);

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'https://damel-backend-production.up.railway.app/api/v1/feature/reminders',
        {
          title,
          content,
          deadline_time: deadlineDateTime.toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response)

      if (response.status === 201) {
        toast({
          title: "Your reminder has been created successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setLoading(false);
        setTitle('');
        setContent('');
        setDeadlineDate('');
        setDeadlineTime('');
        navigate("/activity")
      } else {
        toast({
          title: "An error occurred while creating the reminder.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setLoading(false);
      }
    } catch (error) {
      console.error('Error creating reminder:', error);
      toast({
        title: "An error occurred while creating the reminder.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-24">
      <div className="max-w-lg w-full bg-neutral-800 text-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Create Reminder</h1>
          <p className="text-lg text-neutral-400 mb-8">Fill in the details below to create a reminder.</p>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-neutral-400">Title</label>
            <input
              id="title"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-neutral-700 bg-neutral-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-neutral-400">Content</label>
            <textarea
              id="content"
              className="mt-1 block w-full px-3 py-2 border border-neutral-700 bg-neutral-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="deadlineDate" className="block text-sm font-medium text-neutral-400">Deadline Date</label>
            <input
              id="deadlineDate"
              type="date"
              className="mt-1 block w-full px-3 py-2 border border-neutral-700 bg-neutral-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
              value={deadlineDate}
              onChange={(e) => setDeadlineDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="deadlineTime" className="block text-sm font-medium text-neutral-400">Deadline Time</label>
            <input
              id="deadlineTime"
              type="time"
              className="mt-1 block w-full px-3 py-2 border border-neutral-700 bg-neutral-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
              value={deadlineTime}
              onChange={(e) => setDeadlineTime(e.target.value)}
            />
          </div>
          <div className="pt-8">
            <button
              className={`w-full ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'} text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              onClick={handleCreateReminder}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mx-auto text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'Create Reminder'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderPost;
