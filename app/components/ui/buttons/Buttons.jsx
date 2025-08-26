function Buttonsolid({ children }) {
  return (
    <button className="w-full text-white px-4 py-2 border bg-red-600 border-red-600 cursor-pointer font-raleway font-sm text-bolder">
      {children}
    </button>
  );
}
function Buttonfill({ children }) {
  return (
    <button className="w-full bg-btn text-white px-4 py-4 rounded cursor-pointer font-raleway">
      {children}
    </button>
  );
}
export { Buttonsolid, Buttonfill };
