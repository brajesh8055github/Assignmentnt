import { useState } from "react";

const DashboardPage = () => {
  const [companies, setCompanies] = useState([
    {
      name: "Company A",
      lastCommunications: ["LinkedIn Post", "Email", "Phone Call"],
      nextCommunication: { method: "Email", date: "2024-12-28" },
      overdue: false,
    },
    {
      name: "Company B",
      lastCommunications: ["Email", "LinkedIn Message"],
      nextCommunication: { method: "Phone Call", date: "2024-12-29" },
      overdue: true,
    },
    {
      name: "Company C",
      lastCommunications: ["LinkedIn Message", "Meeting"],
      nextCommunication: { method: "Meeting", date: "2025-01-05" },
      overdue: false,
    },
    {
      name: "Company D",
      lastCommunications: ["Email", "Phone Call", "LinkedIn Post"],
      nextCommunication: { method: "LinkedIn Post", date: "2024-12-30" },
      overdue: true,
    },
  ]);

  const [newCompany, setNewCompany] = useState({
    name: "",
    lastCommunications: "",
    nextCommunicationMethod: "LinkedIn Post",
    nextCommunicationDate: "",
  });

  const communicationMethods = ["LinkedIn Post", "LinkedIn Message", "Email", "Phone Call", "Meeting", "Other"];

  const handleAddCompany = () => {
    if (
      newCompany.name &&
      newCompany.lastCommunications &&
      newCompany.nextCommunicationDate
    ) {
      setCompanies((prevCompanies) => [
        ...prevCompanies,
        {
          name: newCompany.name,
          lastCommunications: newCompany.lastCommunications.split(",").map((c) => c.trim()),
          nextCommunication: {
            method: newCompany.nextCommunicationMethod,
            date: newCompany.nextCommunicationDate,
          },
          overdue: false,
        },
      ]);
      setNewCompany({
        name: "",
        lastCommunications: "",
        nextCommunicationMethod: "LinkedIn Post",
        nextCommunicationDate: "",
      });
    } else {
      alert("Please fill out all fields before scheduling a meeting.");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Company Communication Dashboard
      </h1>

      {/* Input Section */}
      <div className="mb-6 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Schedule a New Meeting</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Company Name"
            value={newCompany.name}
            onChange={(e) =>
              setNewCompany({ ...newCompany, name: e.target.value })
            }
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Communications (comma-separated)"
            value={newCompany.lastCommunications}
            onChange={(e) =>
              setNewCompany({
                ...newCompany,
                lastCommunications: e.target.value,
              })
            }
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newCompany.nextCommunicationMethod}
            onChange={(e) =>
              setNewCompany({
                ...newCompany,
                nextCommunicationMethod: e.target.value,
              })
            }
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {communicationMethods.map((method, i) => (
              <option key={i} value={method}>
                {method}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={newCompany.nextCommunicationDate}
            onChange={(e) =>
              setNewCompany({
                ...newCompany,
                nextCommunicationDate: e.target.value,
              })
            }
            className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleAddCompany}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded shadow-lg transition duration-300"
        >
          Schedule Meeting
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3">Company Name</th>
              <th className="px-6 py-3">Last Communications</th>
              <th className="px-6 py-3">Communication Method</th>
              <th className="px-6 py-3">Next Communication</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr
                key={index}
                className={`text-gray-800 ${
                  company.overdue ? "bg-red-200" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="border px-6 py-3">{company.name}</td>
                <td className="border px-6 py-3">
                  {company.lastCommunications.join(", ")}
                </td>
                <td className="border px-6 py-3">
                  {company.nextCommunication.method}
                </td>
                <td className="border px-6 py-3">
                  {new Date(company.nextCommunication.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
