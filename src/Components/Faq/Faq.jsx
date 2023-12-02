const FAQ = () => {
  return (
    <div>
      <div>
        <div className="collapse collapse-arrow bg-[#59CE8F]">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium text-white">
          How can I list services on the marketplace?
          </div>
          <div className="collapse-content">
            <p className="text-white">
            To list your services on our marketplace, simply sign up for an account and navigate to your dashboard. From there, you can create a new listing, providing details such as product description, images, pricing, and any other relevant information. Once submitted, our team will review the listing to ensure it meets our guidelines, and upon approval, your products or services will be live on the marketplace for potential buyers to discover.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border-2 border-[#59CE8F]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How does the payment process work for transactions on the marketplace?
          </div>
          <div className="collapse-content">
            <p>
            Our marketplace facilitates secure and convenient transactions. When a buyer decides to purchase a product or service, they can proceed to the checkout process. We provide various payment options, including credit/debit cards and other secure payment methods. The payment is securely processed through our platform, and once the transaction is completed, the funds are transferred to the seller's account, minus any applicable fees. Our payment system is designed to ensure a seamless and protected buying and selling experience for all users.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#59CE8F]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-white">
          What measures are in place to ensure the safety and reliability of transactions?
          </div>
          <div className="collapse-content">
            <p className="text-white">
            We prioritize the safety and reliability of transactions on our marketplace. We implement robust security measures, including encryption for sensitive data, to protect user information. Additionally, our platform includes a rating and review system, allowing buyers to provide feedback on their experiences with sellers. This helps build trust within the community and enables users to make informed decisions when choosing products or services. If any issues arise, our customer support team is available to assist and resolve disputes, ensuring a positive experience for all users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
