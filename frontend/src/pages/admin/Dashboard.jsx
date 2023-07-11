import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import DashboardCard from "../../components/admin/DashboardCard";
import { Link } from "react-router-dom";
import "styles/admin/_dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <NavigationAdmin />
      <main>
        <div className="cards">
          <DashboardCard
            title="Blog"
            text="Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.ibero et velit interdum, ac aliquet odio mattis. Class "
            link="/admin/blog"
          />
          <DashboardCard
            title="FAQ"
            text="Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.ibero et velit interdum, ac aliquet odio mattis. Class "
            link="/admin/FAQ"
          />
          <DashboardCard
            title="Espace parents"
            text="Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.ibero et velit interdum, ac aliquet odio mattis. Class "
            link="/admin/actualites"
          />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
