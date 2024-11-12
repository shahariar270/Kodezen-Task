
const Sidebar = () => {
  return (
    <div className="kzui-sidebar">
      <div className="kzui-sidebar-das">
        <img src="/side2.png" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="kzui-sidebar-das">
        <img src="/side1.png" alt="" />
        <span>Academy LMS</span>
      </div>
      
      <div className="kzui-sidebar-item kzui-tc">Analytics</div>
      <hr />

      <div className="kzui-sidebar-item">Course</div>
      <div className="kzui-sidebar-item">Lessons</div>
      <div className="kzui-sidebar-item">Quizzes</div>
      <div className="kzui-sidebar-item">Meeting</div>
      <div className="kzui-sidebar-item">Tutor Booking</div>
      <div className="kzui-sidebar-item">Assignment</div>
      <hr />
      <div className="kzui-sidebar-item">Announcement</div>
      <div className="kzui-sidebar-item">Question & Answer</div>
      <div className="kzui-sidebar-item">Withdraw Requests</div>
      <div className="kzui-sidebar-item">Instructors</div>
      <div className="kzui-sidebar-item">Students</div>
      <div className="kzui-sidebar-item kzui-yellow">Add-ons</div>
      <div className="kzui-sidebar-item ">Tools</div>
      <hr />
      <div className="kzui-sidebar-item">Settings</div>
    </div>
  );
};

export default Sidebar;
