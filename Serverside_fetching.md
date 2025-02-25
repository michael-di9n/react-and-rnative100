# Server side rendering and additional routes information
NextJs also has more special routes such as the error.tsx and loading.tsx route which will display when the main page.tsx cannot be reached or is loading respectively.

The parralell rending route denoted with the @ symbol allows multiple routes to be loaded at the sime time this is usefull for loading multipage dash boards.

## Server side fetching
Serverside fetching improves the developer experience rather than writing a useEffect to fetch from a database we can query a database directly since the page will be ran on the serve

Further more there is Automatic request deduplication which describes caching data that is being fetched repeatetivly in nextjs - https://nextjs.org/docs/app/building-your-application/data-fetching/fetching

One of the significant things that nextjs is improved optimization by rendering static content or rednering parts of a page that can be deemed static (the user uses <Suspend> tag to imply a dynamic part of the webpage)
