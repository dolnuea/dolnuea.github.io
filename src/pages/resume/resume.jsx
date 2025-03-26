import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResumePDF from '../../../public/assets/documents/Dolunay_Dagci_Resume_Latex.pdf';
import SectionBg from "../../assets/section_bg.gif";

export default function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Resume | Dolunay Dagci";
  }, []);

  return (
    <div className="resume flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Responsive PDF Viewer */}
      <div className="w-full max-w-5xl flex-1">
        <iframe
          src={ResumePDF} 
          title="Dolunay's Resume"
          className="w-full h-[100vh] md:h-[100vh] border-0 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
