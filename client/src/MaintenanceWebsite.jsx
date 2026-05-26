import { useMemo, useState } from "react";

export default function MaintenanceWebsite() {
  const [search, setSearch] = useState("");

  const [jobs, setJobs] = useState([
    {
      machine: "Pad Printing #01",
      issue: "ลมตก",
      status: "กำลังซ่อม",
      tech: "ช่างเอก",
      priority: "ด่วน",
    },
  ]);

  const [repairForm, setRepairForm] = useState({
    machine: "",
    issue: "",
    priority: "ปกติ",
  });

  const addRepairJob = () => {
    const newJob = {
      machine: repairForm.machine,
      issue: repairForm.issue,
      priority: repairForm.priority,
      status: "รอดำเนินการ",
      tech: "-",
    };

    setJobs([newJob, ...jobs]);

    setRepairForm({
      machine: "",
      issue: "",
      priority: "ปกติ",
    });
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.machine
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        job.issue
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [jobs, search]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        <div className="bg-blue-700 text-white p-6 rounded-3xl shadow-lg">
          <h1 className="text-3xl font-bold">
            ระบบช่างซ่อมบำรุง
          </h1>

          <p className="opacity-80">
            Maintenance Management System
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-5">
          <input
            type="text"
            placeholder="ค้นหาเครื่องจักร"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-2xl px-4 py-3"
          />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-5">
            รายการแจ้งซ่อม
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">เครื่องจักร</th>
                <th className="p-3 text-left">อาการ</th>
                <th className="p-3 text-left">สถานะ</th>
                <th className="p-3 text-left">ช่าง</th>
              </tr>
            </thead>

            <tbody>
              {filteredJobs.map((job, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{job.machine}</td>
                  <td className="p-3">{job.issue}</td>
                  <td className="p-3">{job.status}</td>
                  <td className="p-3">{job.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-5">
            แจ้งซ่อม
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="ชื่อเครื่องจักร"
              value={repairForm.machine}
              onChange={(e) =>
                setRepairForm({
                  ...repairForm,
                  machine: e.target.value,
                })
              }
              className="w-full border rounded-2xl px-4 py-3"
            />

            <textarea
              placeholder="อาการเสีย"
              value={repairForm.issue}
              onChange={(e) =>
                setRepairForm({
                  ...repairForm,
                  issue: e.target.value,
                })
              }
              className="w-full border rounded-2xl px-4 py-3 h-32"
            />

            <button
              onClick={addRepairJob}
              className="bg-red-600 text-white px-6 py-3 rounded-2xl"
            >
              ส่งแจ้งซ่อม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
