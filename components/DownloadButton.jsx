import { assets } from "../src/assets/assets";

const DownloadButton = () => {
  const handleDownload = async () => {
     window.open(
      'https://github.com/isahermano/Resume/raw/main/IsabellaHermanoResume.pdf',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <button 
      onClick={handleDownload}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    >
      Download Resume
    </button>
  );
};

export default DownloadButton;