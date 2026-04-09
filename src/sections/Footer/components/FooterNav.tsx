import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterNav = () => {
  return (
    <nav
      aria-label="footer navigation"
      className="box-border caret-transparent"
    >
      <ul className="box-border caret-transparent gap-x-[normal] block list-none gap-y-[normal] w-auto my-5 pl-0 md:gap-x-6 md:flex md:gap-y-6 md:w-full">
        <FooterColumn
          title="People"
          titleUrl="https://www.bechtel.com/people/"
          hasSubMenu={true}
          subMenuItems={[
            {
              text: "Vision, Values & Commitments",
              url: "https://www.bechtel.com/people/vision-values-commitments/",
            },
            {
              text: "Leadership",
              url: "https://www.bechtel.com/people/leadership/",
            },
            {
              text: "bechtel.org",
              url: "https://www.bechtel.com/people/bechtel-org/",
            },
          ]}
        />
        <FooterColumn
          title="Projects"
          titleUrl="https://www.bechtel.com/projects/"
          hasSubMenu={true}
          subMenuItems={[
            {
              text: "View More Projects",
              url: "https://www.bechtel.com/projects/?s=",
            },
            {
              text: "Markets",
              url: "https://www.bechtel.com/projects/#market",
            },
            {
              text: "Regions",
              url: "https://www.bechtel.com/projects/#region",
            },
          ]}
        />
        <FooterColumn
          title="Approach"
          titleUrl="https://www.bechtel.com/approach/"
          hasSubMenu={true}
          subMenuItems={[
            { text: "Safety", url: "https://www.bechtel.com/approach/#safety" },
            { text: "Services", url: "https://www.bechtel.com/services/" },
            { text: "Ethics", url: "https://www.bechtel.com/approach/ethics/" },
            { text: "More", url: "https://www.bechtel.com/approach/" },
          ]}
        />
        <FooterColumn
          title="Careers"
          titleUrl="https://www.bechtel.com/careers/"
          hasSubMenu={true}
          subMenuItems={[
            {
              text: "Why Bechtel",
              url: "https://www.bechtel.com/careers/#whybechtel",
            },
            {
              text: "Career Opportunities",
              url: "https://www.bechtel.com/careers/#careers",
            },
            {
              text: "Life at Bechtel",
              url: "https://www.bechtel.com/careers/#life",
            },
          ]}
        />
        <FooterColumn
          title=""
          titleUrl=""
          hasSubMenu={false}
          mainMenuItems={[
            { text: "History", url: "https://waateekaa.com/" },
            { text: "Contact", url: "https://www.bechtel.com/contact/" },
            { text: "Media", url: "https://www.bechtel.com/media/" },
            { text: "Blog", url: "https://www.bechtel.com/media/blog/" },
            { text: "Suppliers", url: "https://www.bechtel.com/supplier/" },
            {
              text: "Impact Reports",
              url: "https://www.bechtel.com/annual-reports/",
            },
          ]}
        />
      </ul>
    </nav>
  );
};
