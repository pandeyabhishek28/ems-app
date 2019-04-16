This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
/_..................................................................................................._/

Overview:-
The idea was to divide a page mainly into three component:-

1. Header: Responsible for the top section of the page.
2. Container: Responsible for the middle section or as name state contain everything that requires for the page(so it may have multiple components in it).
3. Ribbon: Responsible for the bottom section of the page.
   Each of these can be a group of the component.

Dependencies:
@progress/kendo-react-grid
@progress/kendo-data-query
@progress/kendo-react-inputs
@progress/kendo-react-intl
@progress/kendo-react-dropdowns
@progress/kendo-react-dateinputs
@progress/kendo-theme-default
bootstrap

/_..................................................................................................._/

Experience:-

I do have measure the time from starting an initial page request to finished rendering and as a user, I have some observations/opinion regarding the grid. Initially, it was taking some time, but with the help of sync, pagination and wait spinner it starts very quickly. On my system, if I open a new tab and paste the "http: //localhost: 3000/" and click/enter go then it was taking 6 seconds (It will be shorter on your machine) to render everything.

As per user perspective, it's feel good to interact with a grid that is having the row hovering, Column resizing, frozen column, pagination, scrolling, alternate row color features but there should be a search box with an auto-fill dropdown to make it more user -friendly to look/search for records.

Things, that require to improve the user experience :

1. Globalization support(Kendo-Intl).

2. The auto-fill search box on top of the grid.

3. Column filter & Column Chooser

4. An option to choose a page size.

Challenges encountered and how they were overcome:-

1. Pagination was coming vertically:- This was due to CSS files.

2. Unhandled Rejection (SyntaxError) "Unexpected token < in JSON at position 0 : By using Import (import employees from "../testData/employeeData.json";)" :- I was able to read the JSON file but that was taking too much time so I started using the fetch method but the data file was into src folder and fetch method was returning the index.html file in response. To resolve this I have moved the data files into the public folder.

3. Moving state to higher/up level:- Propagating the props value, have faced undefined error

4. Adding async method:- I have used componentDidMount and props propagation.

Help from Web:-

https://programmingwithmosh.com/react/react-tutorial-beginners/
https://getbootstrap.com/docs/4.3/layout/grid/
https://www.telerik.com/kendo-react-ui/getting-started/#toc-adding-the-styles
https://flaviocopes.com/fetch-api/
https://www.generatedata.com/
https://medium.com/ag-grid/learn-to-customize-react-grid-in-less-than-10-minutes-2ce6845646bb
