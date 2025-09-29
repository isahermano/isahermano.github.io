const GitHubButton = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/isahermano', '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleGitHubClick}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    >
      View My GitHub
    </button>
  );
};

export default GitHubButton