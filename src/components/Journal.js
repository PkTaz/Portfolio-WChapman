import React, { useState } from 'react';
import '../styles/Journal.css';
import { FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Journal = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const journalPosts = [
    {
      id: 1,
      title: "The Design Philosophy Behind This Site",
      date: "April 2, 2025",
      excerpt: "Why I chose this aesthetic direction and how it evolved from an initially flat design.",
      content: `
        <p>I've always been drawn to filmmaking. There's something about how A24 films use darkness and contrast to tell stories that hits different. My original portfolio design was flat, uninspired, and didn't leverage modern technologies. It lacked the depth I wanted to convey.</p>
        
        <p>A24's approach to film – the bold typography, minimalism, and those perfectly timed moments of contrast – that's the feeling I wanted to capture here. Not just another dev portfolio, but something with a bit of cinematic weight to it.</p>
        
        <p>The dark theme isn't just aesthetic either. It's about focus. When you strip away all the noise and unnecessary elements, you're left with what matters – the work. The content. The story I'm trying to tell. My previous approach simply didn't achieve this level of focus.</p>
        
        <p>This site is as much about my filmmaking sensibilities as it is about my coding skills. Both require attention to detail, an understanding of pacing, and knowing when to be bold versus when to pull back. The depth and dimension in this version finally expresses that duality properly.</p>
      `
    }
  ];

  const togglePost = (id) => {
    if (expandedPost === id) {
      setExpandedPost(null);
    } else {
      setExpandedPost(id);
    }
  };

  return (
    <div className="journal-container">
      <div className="journal-header">
        <span className="mono-label">05/</span>
        <h1>Journal</h1>
      </div>
      
      <div className="journal-intro">
        <p>
          A collection of thoughts, insights, and reflections on design, development, and the creative process.
          These writings document my journey and approach to creating digital experiences.
        </p>
      </div>
      
      <div className="journal-grid">
        {journalPosts.map(post => (
          <div key={post.id} className="journal-post">
            <div className="post-header">
              <div className="post-date">
                <FaCalendarAlt className="date-icon" />
                <span>{post.date}</span>
              </div>
              <h2 className="post-title">{post.title}</h2>
            </div>
            
            <div className="post-excerpt">
              <p>{post.excerpt}</p>
            </div>
            
            <div className="post-actions">
              <button 
                className="read-more-btn" 
                onClick={() => togglePost(post.id)}
              >
                {expandedPost === post.id ? (
                  <>Read Less <FaChevronUp className="chevron-icon" /></>
                ) : (
                  <>Read More <FaChevronDown className="chevron-icon" /></>
                )}
              </button>
            </div>
            
            {expandedPost === post.id && (
              <div className="post-content">
                <div className="content-divider"></div>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal; 