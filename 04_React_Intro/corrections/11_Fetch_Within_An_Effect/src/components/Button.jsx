
function Button({url, setUrl, text}) {
  return (
    <button
      disabled={url ? false : true}
      onClick={() => setUrl(url)}
      className={`px-4 py-2 rounded ${url ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
    >
      {text}
    </button>
  );
}

export default Button