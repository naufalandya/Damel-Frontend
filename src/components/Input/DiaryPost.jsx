import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastStyles.css'; // Import file CSS khusus

const DiaryPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateDiary = async () => {
    const token = localStorage.getItem('token');
    
    if (!title || !content) {
      toast.warning("All fields are required.", { className: 'toast-dark', autoClose: 1000 });
      return;
    }    
    setLoading(true); // Set loading state to true

    try {
      const response = await axios.post('http://103.127.137.138:5901/api/v1/feature/diary', {
        title,
        content,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 201) {
        setTimeout(() => {
          toast.success("Your Diary has been created successfully.", { className: 'toast-dark', autoClose: 1000 });
          setLoading(false); // Set loading state to false
        }, 500);
        setTitle('');
        setContent('');
      } else {
        setTimeout(() => {
          toast.error("An error occurred while creating the Diary.", { className: 'toast-dark', autoClose: 1000 });
          setLoading(false); // Set loading state to false
        }, 500);
      }
    } catch (error) {
      console.error('Error creating Diary:', error);
      setTimeout(() => {
        toast.error("An error occurred while creating the Diary.", { className: 'toast-dark', autoClose: 1000 });
        setLoading(false); // Set loading state to false
      }, 500);
    }
  };

  return (
    <div style={{backgroundColor :'rgba(0,0,0,0)'}} className="min-h-screen flex items-center justify-center p-24">
      <div className="max-w-lg w-full bg-neutral-800 text-white rounded-lg shadow-lg p-8">
        <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Create Diary</h1>
          <p className="text-lg text-neutral-400 mb-8">Fill in the details below to create a diary.</p>
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
          <div className="pt-8">
            <button
              className={`w-full ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'} text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              onClick={handleCreateDiary}
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
                'Create Diary'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryPost;
