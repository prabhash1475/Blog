import React, { useState } from "react";
import "./styles.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    category: "Technology",
    title: "",
    blogger_name: "",
    image: "",
    description: "",
  });
  const [filterCategory, setFilterCategory] = useState("All");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.title.length < 3 ||
      formData.blogger_name.length < 3 ||
      formData.description.length < 3
    ) {
      alert("All fields must be at least 3 characters long.");
      return;
    }

    setBlogs([...blogs, { ...formData, id: blogs.length + 1 }]);

    setFormData({
      category: "Technology",
      title: "",
      blogger_name: "",
      image: "",
      description: "",
    });
  };

  const filteredBlogs =
    filterCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === filterCategory);

  return (
    <div className="container">
      <h1>Create a Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Entertainment">Entertainment</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Business">Business</option>
            <option value="Health">Health</option>
            <option value="Science">Science</option>
          </select>
        </label>
        <br />

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            minLength="3"
          />
        </label>
        <br />

        <label>
          Blogger Name:
          <input
            type="text"
            name="blogger_name"
            value={formData.blogger_name}
            onChange={handleChange}
            required
            minLength="3"
          />
        </label>
        <br />

        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            minLength="3"
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

      <div className="filter-section">
        <h2>All Blogs</h2>
        <label>
          Filter by Category:
          <select onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Business">Business</option>
            <option value="Health">Health</option>
            <option value="Science">Science</option>
          </select>
        </label>
      </div>

      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <h3>
              {blog.title} - <span>{blog.category}</span>
            </h3>
            <p>by {blog.blogger_name}</p>
            <img src={blog.image} alt={blog.title} />
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
