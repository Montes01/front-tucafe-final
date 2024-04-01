
import ResumenActividad from './ResumenActividad';
import EstadisticasClave from './EstadisticasClave';


import './Dashboard.css'

const Dashboard = () => {
  return (
    

    <div className="dashboard">
      
      <div className="dashboard-section">
        <ResumenActividad />
      </div>
      <div className="dashboard-section">
        <EstadisticasClave />
      </div>
      
    </div>
    
  );
};

export default Dashboard;
