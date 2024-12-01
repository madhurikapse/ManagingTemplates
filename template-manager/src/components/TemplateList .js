import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TemplateList() {
  const [templates, setTemplates] = useState([]);
  const [tab, setTab] = useState('library');

  useEffect(() => {
    axios.get('/api/templates')
      .then(response => setTemplates(response.data))
      .catch(error => console.error('Error fetching templates:', error));
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setTab('library')}>Template Library</button>
        <button onClick={() => setTab('saved')}>Saved Templates</button>
      </div>
      <div>
        {templates
          .filter(template => template.type === tab)
          .map(template => (
            <div key={template.id} className="template-card">
              <h3>{template.name}</h3>
              <p>Created on: {new Date(template.created_at).toLocaleDateString()}</p>
              <Link to={`/editor/${template.id}`}>Edit Template</Link>
            </div>
          ))}
      </div>
      <button>
        <Link to="/editor">Create Template</Link>
      </button>
    </div>
  );
}

export default TemplateList;
