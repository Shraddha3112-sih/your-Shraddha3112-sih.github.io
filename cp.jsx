const Contact = () => (
    <div className="p-10 bg-white rounded-xl shadow-sm text-center">
      <h1 className="text-4xl font-bold text-red-500">✉️ Contact Us</h1>
      <form className="mt-4 flex flex-col gap-3 max-w-xs mx-auto">
        <input type="email" placeholder="Email Address" className="p-2 border rounded" />
        <textarea placeholder="Your Message" className="p-2 border rounded"></textarea>
        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Send Message</button>
      </form>
    </div>
  );