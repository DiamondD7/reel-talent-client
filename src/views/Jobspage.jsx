import "../styles/jobspagestyles.css";
const Jobspage = () => {
  return (
    <div className="jobs-page-container">
      <table>
        <thead>
          <th>Casting ID:</th>
          <th>Casting Manager</th>
          <th>Title</th>
          <th>Role</th>
          <th>Status</th>
          <th>Applied Date</th>
          <th>Decision Date</th>
        </thead>

        <tbody>
          <tr>
            <td>731231231543318</td>
            <td>Aaron Sierra</td>
            <td>Kabayan</td>
            <td>Johnson</td>
            <td style={{ color: "orange" }}>Pending</td>
            <td>10/10/26</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>73128978746518</td>
            <td>Aaron Sierra</td>
            <td>Lion & Drum</td>
            <td>Lion</td>
            <td style={{ color: "limegreen" }}>Accepted</td>
            <td>27/07/26</td>
            <td>13/10/26</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Jobspage;
