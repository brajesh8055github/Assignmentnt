import { useState } from "react";
const AdminPage = () => {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    linkedin: "",
    emails: [""],
    phoneNumbers: [""],
    comments: "",
    periodicity: "2 weeks",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanies([...companies, formData]);
    setFormData({
      name: "",
      location: "",
      linkedin: "",
      emails: [""],
      phoneNumbers: [""],
      comments: "",
      periodicity: "2 weeks",
    });
  };

  const handleDelete = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Admin Dashboard
      </h1>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Add New Company
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Company Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="LinkedIn URL"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Add Company
        </button>
      </form>

      {/* Companies List Section */}
      <div className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Companies List
        </h2>
        {companies.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">LinkedIn Profile</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr
                    key={index}
                    className={`text-gray-700 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3 text-center">{company.name}</td>
                    <td className="px-4 py-3 text-center">{company.location}</td>
                    <td className="px-4 py-3 text-center">
                      <a
                        href={company.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View Profile
                      </a>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-700 text-center mt-4">No companies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
