import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
function ManageUser({ props }) {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          <button>Table users</button>
        </div>
        <ModalCreateUser />
      </div>
    </div>
  );
}

export default ManageUser;
