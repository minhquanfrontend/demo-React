import ModalCreateUser from "./ModalCreateUser";

function ManageUser({ props }) {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          <button>
            Table users
            <ModalCreateUser />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
