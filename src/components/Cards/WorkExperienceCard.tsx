interface WORK_EXPERIENCE_INFO_TYPES {
  category: string;
  role: string;
  period: string;
  description: string;
}
/* definir bien el type/interface */
const WORK_EXPERIENCE_INFO: WORK_EXPERIENCE_INFO_TYPES = {
  category: `health`,
  role: `Front end developer`,
  period: `NOV 1, 2021 - PRESENT`,
  description: `DAR UNA DESCRIPCION - Technical content author tasked with creating interactive real-world tutorials, focused on topics like Next.js, TypeScript, React.`,
};

const WorkExperienceCard = () => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md border border-gray-400 p-6">
        <p className="text-2xl font-bold text-left">Educative</p>
        <p className="text-lg text-left text-gray-600 mt-2">
          Project Author | DEC 5, 2023 - PRESENT
        </p>
        <p className="text-left text-gray-700 mt-2">
          Technical content author tasked with creating interactive real-world
          tutorials, focused on topics like Next.js, TypeScript, React.
        </p>
      </div>
    </>
  );
};
export default WorkExperienceCard;
