import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
  const [topics, setTopics] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    estimatedTime: "",
    descrition: ""
  })
  const navigate = useNavigate();
  const showTopics = async () => {
    try {
      const topics: any = await Axios.get("http://localhost:8000/topics");
      setTopics(topics.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    showTopics();
  }, []);
  const editTopic = async (id: string) => {
    try {
      await Axios.put(`http://localhost:8000/topics/${id}`, {
        title: "newTitle",
        timeEstimate: "new hours",
        description: "its a cool description"
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTopic = async (id: string) => {
    try {
      const topic: string = await Axios.delete(`http://localhost:8000/topics/${id}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: any) => {
    await Axios.post("http://localhost:8000/topics/create", {
        title: formData.title,
        timeEstimate: formData.estimatedTime,
        description: formData.descrition
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={(e) => setFormData({...formData, title: e.target.value})} value={formData.title}/>
          </div>
          <div className="input-group">
            <label htmlFor="estimatedTime">Estimated Time</label>
            <input type="text" name="estimatedTime" onChange={(e) => setFormData({...formData, estimatedTime: e.target.value})}  value={formData.estimatedTime}/>
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <input type="text" name="description" onChange={(e) => setFormData({...formData, descrition: e.target.value})} value={formData.descrition}/>
          </div>
          <input type="submit" />
        </form>
      {topics.length > 0 && (
        <ul>
          {topics.map((topic) => (
            <li key={topic._id}>
              {topic.title}
              <button onClick={() => editTopic(topic._id)}>edit</button>
              <button onClick={() => deleteTopic(topic._id)}>delete</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
