console.log('Is this working?');

let viz;

//Add Share Link to Tableau Public in here
const url = "https://public.tableau.com/views/SpotifyDeepFocusplaylist-Tracksanalysis/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');
const options = {
    //hideTabs: true,
    height: "2600px",
    width: "1080px",
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
    }
};

//create a function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
}

// run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);
