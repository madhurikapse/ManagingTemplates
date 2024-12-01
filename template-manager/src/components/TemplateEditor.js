import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TemplateEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [template, setTemplate] = useState({ name: '', content: '', type: 'user-created' });

  useEffect(() => {
    if (id) {
      axios.get(`/api/templates/${id}`)
        .then(response => setTemplate(response.data))
        .catch(error => console.error('Error fetching template:', error));
    }
  }, [id]);

  const handleSave = () => {
    if (id) {
      axios.put(`http://localhost:8000/api/templates/${id}`,template)
        .then(() => navigate('/'))
        .catch(error => console.error('Error updating template:', error));
    } else {
      axios.post('http://localhost:8000/api/templates',template)
        .then(() => navigate('/'))
        .catch(error => console.error('Error saving template:', error));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={template.name}
        onChange={(e) => setTemplate({ ...template, name: e.target.value })}
        placeholder="Template Name"
      />
      <textarea
        value={template.content}
        onChange={(e) => setTemplate({ ...template, content: e.target.value })}
        placeholder="Template Content"
      />
      <div>
        <button onClick={handleSave}>Save Template</button>
        <button onClick={() => navigate('/')}>Back to List</button>
      </div>
    </div>
  );
}

export default TemplateEditor;
