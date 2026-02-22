import "./styles.css";
import { useState } from "react";

export default function App() {
  // -------------------- State --------------------
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    gender: "",
    subjects: [],
  });

  const [list, setList] = useState([]);

  console.log(list);

  // -------------------- Handle Input Change --------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedSubjects = checked
          ? [...prev.subjects, value]
          : prev.subjects.filter((item) => item !== value);

        return {
          ...prev,
          subjects: updatedSubjects,
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // -------------------- Handle Submit --------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      ...formData,
    };

    setList((prev) => [...prev, newUser]);

    // Reset form
    setFormData({
      name: "",
      mobile: "",
      address: "",
      gender: "",
      subjects: [],
    });
  };

  // -------------------- JSX --------------------
  return (
    <div className="App">
      <h1>Student Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Mobile */}
        <input
          type="number"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        {/* Gender */}
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
        </div>

        {/* Subjects */}
        <div>
          <label>
            <input
              type="checkbox"
              value="maths"
              checked={formData.subjects.includes("maths")}
              onChange={handleChange}
            />
            Maths
          </label>

          <label>
            <input
              type="checkbox"
              value="english"
              checked={formData.subjects.includes("english")}
              onChange={handleChange}
            />
            English
          </label>

          <label>
            <input
              type="checkbox"
              value="social"
              checked={formData.subjects.includes("social")}
              onChange={handleChange}
            />
            Social Science
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
