Zetland Challenge - Reflections and Insights

React StrictMode and Rendering Duplication:
I made a deliberate choice to turn off React StrictMode during development due to its tendency to render components twice, causing redundant API calls. While I typically prefer keeping it on for its helpful warnings, the rendering issue took precedence in this scenario.

Project Overview:
I crafted a news application comprising a landing page and a dedicated news page. The app dynamically generates images using the Pexels API, leveraging topic tagging. The process involves fetching data from Newshacker, extracting titles, determining keywords, and querying the Pexels API accordingly. The information is presented only when all data has been successfully fetched, facilitated by the Promise.all method.

Focused Areas:
My primary emphasis in this project revolved around showcasing my proficiency in React structure, hook utilization, and data fetching. I intentionally kept styling, types, and animations to the basics. The design aspect was crucial to demonstrate my ability to translate a visual design into a fully functional application, highlighting attention to detail.

Time Constraints and Future Considerations:
Given more time, I would address the following areas:

Design System: Develop a comprehensive design system, potentially incorporating Tailwind (while I'm more comfortable with Styled components and Bootstrap).

Type Safety: Implement proper types throughout the codebase, minimizing the use of 'any' and ensuring robust type definitions.

Animations: Allocate time for incorporating animations to enhance the user interface's fluidity.

Test-Driven Development (TDD): In a larger project, I'd adopt TDD practices, writing unit and integration tests before the actual code implementation.

API keys: Stored more secure. 

Pexels Data Fetching Improvements: Enhance the keyword API or explore alternatives.
Implement a mechanism to filter out overly niche keywords by checking the number of available photos. If below a threshold, switch to a more general keyword.
Console warnings Largest Contentful Paint. 

Alternative Case Idea for Zetland:
To enhance Zetland's product, consider integrating two additional steps into the onboarding process:

Subject Adding:
Allow users to specify their interests, enabling a more personalized content experience.

Subject Flagging:
Provide users with the ability to flag or filter content based on subjects they want to avoid. This could lead to a more tailored news experience, catering to individual preferences and potentially attracting a segment tired of news dominated by certain themes, such as war.

This approach could set Zetland apart by offering a customized news experience, resonating with users who seek specific content and wish to avoid certain topics.