import React from "react";
import NavigationAdmin from "../../components/admin/NavigationAdmin";
import { Link } from "react-router-dom";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <>
      <NavigationAdmin />
      <section className="content">
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
          link="/admin/parents"
        />
      </section>
    </>
  );
};

export default Dashboard;
