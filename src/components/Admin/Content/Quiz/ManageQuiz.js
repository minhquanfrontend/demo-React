import Select from "react-select";
import "./ManageQuiz.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { FcPlus } from "react-icons/fc";
import Accordion from "react-bootstrap/Accordion";

import { postCreateNewQuiz } from "../../../../services/apiService";
import TableQuiz from "./TableQuiz";
const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("EASY");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const handleChangeFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    } else {
      setPreviewImage("");
    }
  };
  const handleSubmitQuiz = async () => {
    //Validate
    if (!name || !description) {
      toast.error("Name/Description is required");
      return;
    }
    let res = await postCreateNewQuiz(description, name, type?.value, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setImage(null);
      setPreviewImage("");
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manage Quizzes</Accordion.Header>
          <Accordion.Body>
            <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new quiz</legend>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    placeholder="your quiz name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label>Description</label>
                </div>
                <div className="my-3">
                  <Select
                    value={type}
                    // onChange={this.handleChange}
                    defaultValue={type}
                    onChange={setType}
                    options={options}
                    placeholder={type}
                  />
                </div>
                <div className="more-actions form-group">
                  <label
                    className="form-label label-upload"
                    htmlFor="labelUpload"
                  >
                    <FcPlus />
                    Upload File Images
                  </label>
                  <input
                    type="file"
                    hidden
                    id="labelUpload"
                    className="form-control"
                    onChange={(e) => handleChangeFile(e)}
                  />
                  <div className="col-md-12 img-preview">
                    {previewImage ? (
                      <img src={previewImage} />
                    ) : (
                      <span>Preview Images</span>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    onClick={() => handleSubmitQuiz()}
                    className="btn btn-warning"
                  >
                    Save
                  </button>
                </div>
              </fieldset>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="list-detail">
        <TableQuiz />
      </div>
    </div>
  );
};

export default ManageQuiz;
