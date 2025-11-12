import React, { useState } from "react";
import Modal from "../ui/Modal";
import Input from "../ui/Input";

interface Props {
  onClose?: () => void;
  onCreate?: (workspaceName: string) => Promise<void> | void;
}

const CreateWorkspace = ({ onClose, onCreate }: Props) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!workspaceName.trim()) {
      setError("Workspace name is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
     
      if (onCreate) await onCreate(workspaceName.trim());

      //  Close modal after success
      onClose?.();
    } catch (err) {
      setError("Failed to create workspace. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-900 rounded-2xl p-8 w-[500px] space-y-5"
      >
        <h2 className="text-2xl font-semibold">Create New Workspace</h2>

        <Input
          name="workspaceName"
          label="Workspace Name"
          placeholder="e.g. Marketing, Design, Product,Managing"
          bgClass="bg-gray-100"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-end space-x-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-5 py-2.5 rounded-lg text-white transition-all ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateWorkspace;
