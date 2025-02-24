# Starting a next Js application 
We can use the shortcut 
`npx create-next-app@latest` to automatically create our project. It will contain lots of files such as the typescript, globalcss but we just need to know that
everything about our application will be in the src or app folder.


Things about nextjs - 
1. Serverside components: All components will be rendered serverside this allows for faster load times (and SEO), backend access such as the file system
2. Client side requirement are thing that interface with the page such as state in react, click, event listeners these will trigger changes to the DOM are will be rendered on the client side
3. The App directory uses file-system routing meaning the FOLDER structure determines navigation in the application
  1. The two essential files are page.tsx which denotes the FOLDER as accessible through file baed routing and layout.tsx which define a common render layout
2. Public Folder to hold static images and fonts which can be references using the base url (/)

https://nextjs.org/docs/app/getting-started/project-structure 
good resource for the layout
