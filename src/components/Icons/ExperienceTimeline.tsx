import { Button, Timeline } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
export function ExperienceTimeline() {
  const customTheme: CustomFlowbiteTheme = {
    timeline: {
      root: {
        direction: {
          horizontal: "sm:flex",
          vertical: "relative border-l border-gray-200 dark:border-gray-700",
        },
      },
      item: {
        root: {
          horizontal: "relative mb-6 sm:mb-0",
          vertical: "mb-10 ml-6",
        },
        content: {
          root: {
            base: "mt-3 sm:pr-8",
          },
          body: {
            base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
          },
          time: {
            base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
          },
          title: {
            base: "text-lg font-semibold text-gray-900 dark:text-white",
          },
        },
        point: {
          horizontal: "flex items-center",
          line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
          marker: {
            base: {
              horizontal:
                "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
              vertical:
                "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
            },
            icon: {
              base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
              wrapper:
                "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900",
            },
          },
          vertical: "",
        },
      },
    },
  };
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Timeline /* className="flex flex-col  text-gray-100 p-4 border  bg-slate-100 m-2" */
      >
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
            <Button /* className="bg-red-500 hover:bg-red-600" */>
              Learn More
              {/* <HiArrowNarrowRight className="ml-2 h-3 w-3" /> */}
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </Flowbite>
  );
}
