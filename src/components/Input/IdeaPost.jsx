import { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Textarea,
  Input,
  useToast,
} from '@chakra-ui/react';

const IdeaPost = () => {
  const toast = useToast();
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState('LEARN');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreatePost = async () => {
    const token = localStorage.getItem('token');
    
    if (!text || tags.length === 0 || !category) {
      toast({
        title: 'Warning',
        description: 'All fields are required.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (category !== 'LEARN' && category !== 'SPEECH') {
      toast({
        title: 'Error',
        description: "Category must be either 'LEARN' or 'SPEECH'.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (image && !['image/jpeg', 'image/png', 'image/gif'].includes(image.type)) {
      toast({
        title: 'Error',
        description: 'Only image files (JPEG, PNG, GIF) are allowed.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('text', text);
    formData.append('tags', JSON.stringify(tags));
    formData.append('category', category);
    if (image) {
      formData.append('image_link', image);
    }

    try {
      const response = await axios.post('http://localhost:5901/api/v1/feature/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 201) {
        toast({
          title: 'Success',
          description: 'Your Post has been created successfully.',
          status: 'success',
          duration: 1000,
          isClosable: true,
        });
        setLoading(false);
        setText('');
        setTags([]);
        setCategory('LEARN');
        setImage(null);
      } else {
        toast({
          title: 'Error',
          description: 'An error occurred while creating the Post.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        setLoading(false);
      }
    } catch (error) {
      console.error('Error creating Post:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while creating the Post.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTagsChange = (e) => {
    // Split tags input into an array
    const tagsArray = e.target.value.split(',').map(tag => tag.trim());
    setTags(tagsArray);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-24">
      <div className="max-w-lg w-full bg-neutral-800 text-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">What idea you want to share today?</h1>
          <p className="text-lg text-gray-400 mb-8">Fill in the details below to create a Post.</p>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="text" className="block text-sm font-medium text-gray-400">Text</label>
            <Textarea
              id="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white resize-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-400">Tags</label>
            <Input
              id="tags"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
              value={tags.join(', ')}
              onChange={handleTagsChange}
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-1">Category</label>
            <select
              id="category"
              style={ { border : '1px solid white'}}
              className="block w-full px-3 py-2 border bg-neutral-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="bg-gray-600 text-white" value="LEARN">LEARN</option>
              <option className="bg-gray-600 text-white" value="SPEECH">SPEECH</option>
            </select>

          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-400">Upload Image</label>
            <Input
              id="image"
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
            <Button
              type="button"
              onClick={() => document.getElementById('image').click()}
              colorScheme="dark"
              className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-neutral-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
            >
              Choose File
            </Button>
            {image && <p className="mt-2 text-sm text-gray-400">{image.name}</p>}
          </div>
          <div className="pt-0">
            <Button
              className={`w-full ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'} text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              onClick={handleCreatePost}
              disabled={loading}
              colorScheme="blue"
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
                'Create Post'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaPost;
