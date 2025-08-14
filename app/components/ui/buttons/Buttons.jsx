function Buttonsolid({ children }) {
  return (
    <button className="w-full text-red-600 px-4 py-2 border border-red-600 cursor-pointer font-raleway">
      {children}
    </button>
  );
}
function Buttonfill({ children }) {
  return (
    <button className="w-full bg-btn text-red-600 px-4 py-4 rounded cursor-pointer font-raleway">
      {children}
    </button>
  );
}
export { Buttonsolid, Buttonfill };
