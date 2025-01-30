import React from "react";

const Faq = () => {
  return (
    <section className="py-12 bg-gray-100 rounded-lg">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="collapse collapse-plus bg-white rounded-lg shadow">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-gray-800">
              Q: How do I create an assignment?
            </div>
            <div className="collapse-content p-4">
              <p className="text-gray-600">
                Click on the "Create Assignment" button, add your questions, and
                share it with your group.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-plus bg-white rounded-lg shadow">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium text-gray-800">
              Q: Can I grade my friends' assignments?
            </div>
            <div className="collapse-content p-4">
              <p className="text-gray-600">
                Yes! Once your friends submit their assignments, you can review
                and grade them.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-plus bg-white rounded-lg shadow">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium text-gray-800">
              Q: How do I join a study group?
            </div>
            <div className="collapse-content p-4">
              <p className="text-gray-600">
                Simply sign up, and you’ll be connected with all registered
                users as friends!
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-plus bg-white rounded-lg shadow">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium text-gray-800">
              Q: Is this platform free to use?
            </div>
            <div className="collapse-content p-4">
              <p className="text-gray-600">
                Yes, the application is completely free for all users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
