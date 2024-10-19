import React,{ useEffect, useState } from "react";
import SwiperSelection from "./ui/SwiperSelection";
import { SiJavascript } from "react-icons/si";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import LikeButton from "./ui/LikeButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PropTypes from 'prop-types';
import SlideSection from "./SlideSection";

export default function TagArea() {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle sliding section open/close
  const toggleSlideSection = () => {
    setIsSlideOpen(!isSlideOpen);
    setIsFullScreen(false);
  };

  // Toggle full-screen mode
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Handle scroll event to adjust the sliding section's top position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);  // If the page is scrolled down
      } else {
        setIsScrolled(false); // Reset when at the top of the page
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex transition-all duration-500">
      <div
        className={`transition-all duration-500 ease-in-out ${isSlideOpen ? (isFullScreen ? 'w-0' : 'w-1/2') : 'w-full'}`}
      >
        <div className="mt-5">
          <SwiperSelection />
          <AllNotesSection toggleSlideSection={toggleSlideSection} />
        </div>
      </div>

      {/* Sliding Section */}
      {isSlideOpen && (
        <SlideSection
          isFullScreen={isFullScreen}
          toggleFullScreen={toggleFullScreen}
          isScrolled={isScrolled}
          closeSlideSection={() => setIsSlideOpen(false)}
        />
      )}
    </div>
  );
}
function AllNotesSection({ toggleSlideSection }: { toggleSlideSection: () => void }) {
  const notes = Array(5).fill(null);
  

  return (
    <div className="mt-5 flex flex-wrap gap-4 dark:bg-gray-800 p-3 transition-colors duration-300">
      {notes.map((_, index) => (
         <SingleNote key={index} note={{ title: 'Sample Note', creationDate: 'Today', tags: ['JavaScript'], description: 'Sample description', code: 'console.log("Hello World")', isFavorite: true, language: 'javascript' }} toggleSlideSection={toggleSlideSection} />
      ))}
    </div>
  );
}

function SingleNote({ note, toggleSlideSection }: { note: SingleNoteType; toggleSlideSection: () => void }) {
  const { title, creationDate, tags, description, code, isFavorite, language } = note;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="max-sm:w-full w-[378px] rounded-md py-4 bg-white shadow-lg dark:bg-black transition-colors duration-300">
      <NoteHeader title={title} isFavorite={isFavorite} toggleSlideSection={toggleSlideSection} />
      <NoteDate creationDate={creationDate} />
      <NoteTags tags={tags} />
      <NoteDescription description={description} />
      <CodeBlock language={language} code={code} isDarkMode={isDarkMode} />
      <NoteFooter language={language} />
    </div>
  );
}
SingleNote.propTypes = {
  note: PropTypes.object.isRequired,
  toggleSlideSection: PropTypes.func.isRequired,
};

function NoteHeader({ title, isFavorite, toggleSlideSection }) {
  return (
    <div className="flex justify-between mx-4">
      <span
        className="font-bold text-lg w-[87%] text-gray-800 dark:text-white cursor-pointer hover:text-purple dark:hover:text-purple"
        onClick={toggleSlideSection}
        aria-label="Toggle Note Slide Section"
      >
        {title}
      </span>
      {isFavorite && <LikeButton />}
    </div>
  );
}

function NoteTags({ tags }: { tags: string[] }) {
  return (
    <div className="text-slate-500 text-[11px] mx-4 flex-wrap flex gap-1 mt-4">
      {tags.map((tag, index) => (
        <span key={index} className="bg-purple text-white p-1 rounded-md px-2">
          {tag}
        </span>
      ))}
    </div>
  );
}

function NoteDate({ creationDate }: { creationDate: string }) {
  return (
    <div className="text-slate-500 text-[11px] flex gap-1 font-light mx-4 mt-1">
      <span>{creationDate}</span>
    </div>
  );
}

function NoteDescription({ description }: { description: string }) {
  return (
    <div className="text-slate-600 text-[13px] mt-4 mx-4 pb-2 dark:text-gray-300">
      {description}
    </div>
  );
}

interface CodeBlockProps {
  language: string;
  isDarkMode: boolean;
  code : string;
}

const CodeBlock : React.FC<CodeBlockProps> = ({ language, code, isDarkMode }) => {
  return (
    <div className="rounded-lg mx-4 mt-4 pb-1">
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? atomOneDark : atomOneLight}
        wrapLongLines={true}
        customStyle={{
          borderRadius: "12px",
          fontSize: "13px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};




function NoteFooter({ language }: { language: string }) {
  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      <div className="flex gap-1 items-center">
        <SiJavascript size={15} className="mc-[2px]" />
        {language}
      </div>
      <DeleteOutlineIcon sx={{ fontSize: 20 }} className="cursor-pointer" />
    </div>
  );
}

// Define SingleNoteType for props type checking
type SingleNoteType = {
  title: string;
  creationDate: string;
  tags: string[];
  description: string;
  code: string;
  isFavorite: boolean;
  language: string;
};