const Stats = () => {
  return (
    <div >
      <div className="stats shadow md:stats-horizontal stats-vertical ">
        <div className="stat place-items-center">
          <div className="stat-title">Clients</div>
          <div className="stat-value">150</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Events</div>
          <div className="stat-value text-green-500">2000</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registered Events</div>
          <div className="stat-value">20</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
