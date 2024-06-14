import { BsPersonCheckFill } from "react-icons/bs";
const AboutMe = () => {
  return (
    <section id="aboutme" className=" p-2 ">
      <h2 className="text-left flex items-center text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ">
        <BsPersonCheckFill />
        About me
      </h2>
      <div className="flex flex-col-reverse items-center md:flex-row text-gray-800 dark:text-blue-100 mt-10 p-2 ">
        <div className=" [&>p>strong]:text-yellow-300 dark:[&>p>strong]:text-yellow-200 [&>p>strong]:font-normal [&>p>strong]:font-mono  ">
          <p className="py-4">
            My name is Julian but my friends call me Juli. I started programming
            with simple courses on youtube, I was 24 years old. I'm
            currently&nbsp;
            <strong>part of the development team at Swiss Medical Group</strong>
            .
          </p>
          <p className="py-4">
            Some of my successes include&nbsp;
            <strong>
              collaborating with the development of user self-management apps at
              Swiss Medical Group
            </strong>
            . This was a great step forward in increasing productivity within
            the company.
          </p>
          <p className="py-4">
            As a web developer,&nbsp;
            <strong>
              I have high expectations of being able to obtain greater and more
              complex developments that continue to test me
            </strong>
            . My goal is to cover projects that have a direct impact on the
            people's lives improving them.
          </p>
        </div>
        <div className=" px-10  md:block min-w-max">
          <img className="rounded-xl" src="../images/me.jpg" alt="Me" />
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
