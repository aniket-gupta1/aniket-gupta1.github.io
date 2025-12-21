// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV last updated on November 29th, 2025",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-we-are-starting-our-field-campaign-in-svalbard-today-to-study-and-quantify-glacier-melts-checkout-the-project-here",
          title: 'We are starting our Field Campaign in Svalbard today to study and quantify...',
          description: "",
          section: "News",},{id: "news-i-am-attending-the-elite-summer-school-in-robotics-and-entrepreneurship-in-denmark-for-3-weeks",
          title: 'I am attending the Elite Summer School in Robotics and Entrepreneurship in Denmark...',
          description: "",
          section: "News",},{id: "news-tada-our-poster-presentation-on-detecting-change-on-marine-terminating-glaciers-on-short-time-scales-a-uav-based-field-campaign-in-svalbard-won-the-best-poster-award-at-icra-2025-workshop-on-robotics-for-environmental-and-climate-assessment",
          title: ':tada: Our poster presentation on Detecting Change on Marine Terminating Glaciers on Short...',
          description: "",
          section: "News",},{id: "news-tada-our-paper-a-system-for-multi-view-mapping-of-dynamic-scenes-using-time-synchronized-uavs-is-accepted-to-iros-2025-as-an-oral-presentation",
          title: ':tada: Our paper A System for Multi-View Mapping of Dynamic Scenes Using Time-Synchronized...',
          description: "",
          section: "News",},{id: "news-tada-our-paper-neuflow-v2-push-high-efficiency-optical-flow-to-the-limit-is-accepted-to-iros-2025-as-an-oral-presentation",
          title: ':tada: Our paper NeuFlow v2: Push High-Efficiency Optical Flow To the Limit is...',
          description: "",
          section: "News",},{id: "news-i-ll-be-in-hangzhou-china-for-iros-2025-see-you-there",
          title: 'I’ll be in Hangzhou, China for IROS 2025. See you there.',
          description: "",
          section: "News",},{id: "news-tada-our-paper-snap-towards-segmenting-anything-in-any-point-cloud-is-accepted-to-3dv-2026-as-an-oral-presentation",
          title: ':tada: Our paper SNAP: Towards Segmenting Anything in Any Point Cloud is accepted...',
          description: "",
          section: "News",},{id: "news-i-m-excited-to-announce-that-i-ve-joined-merl-as-a-research-intern-working-with-pedro-miraldo",
          title: 'I’m excited to announce that I’ve joined MERL as a Research Intern, working...',
          description: "",
          section: "News",},{id: "projects-iaf-mehar-baba-prize-competition",
          title: 'IAF Mehar Baba Prize Competition',
          description: "Swarm drones for long-range, BVLOS search and rescue missions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IAF_Mehar_Baba/";
            },},{id: "projects-neuroam",
          title: 'NeuROAM',
          description: "A large scale, multi-robot dataset to push the limits of current mapping systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NeuROAM/";
            },},{id: "projects-svalbard-expedition",
          title: 'Svalbard Expedition',
          description: "An expedition to the Arctic to understand and quantify glacier melt with modern computer vision.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Svalbard_expedition/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%70%74%61.%61%6E%69%6B@%6E%6F%72%74%68%65%61%73%74%65%72%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aniket-gupta1", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aniket-gupta1", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rsUOq0AAAAJ", "_blank");
        },
      },];
