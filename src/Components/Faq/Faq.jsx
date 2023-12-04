const FAQ = () => {
  return (
    <div>
      <div>
        <div className="collapse collapse-arrow bg-[#1B9C85]">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium text-white">
          What the first step of the home buying process?
          </div>
          <div className="collapse-content">
            <p className="text-white">
            First, you need to know how much you can borrow. Knowing how much home you can afford narrows down online home searching to suitable properties, thus no time is wasted considering homes that are not within your budget. (Pre-approvals also help prevent disappointment caused by falling in love unaffordable homes.)
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border-2 border-[#1B9C85]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How long does it take to buy a home?
          </div>
          <div className="collapse-content">
            <p>
            From start (searching online) to finish (closing escrow), buying a home takes about 10 to 12 weeks. Once a home is selected an the offer is accepted, the average time to complete the escrow period on a home is 30 to 45 days (under normal market conditions). Though, well-prepared home buyers who pay cash have been known to purchase properties faster than that.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#1B9C85]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-white">
          What is a buyer’s market?
          </div>
          <div className="collapse-content">
            <p className="text-white">
            A buyer’s market is characterized by declining home prices and reduced demand. Several factors may affect long-term and short-term buyer demand, like: Economic disruption - a big employer shuts down operations, laying off their workforce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
