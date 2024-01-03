
const parent = React.createElement("div",{},

React.createElement("div",{id:"parent"} , [      
 React.createElement('h1' ,{id :1} ,'hello world'),
 React.createElement('h2' ,{id :2} ,'hello hii'),
]),

React.createElement("div",{id:"parent"} , [      
    React.createElement('h1' ,{id :1} ,'hello world'),
    React.createElement('h2' ,{id :2} ,'hello hii'),
   ])
)

const root1 = ReactDOM.createRoot(document.getElementById("root"))
        
root1.render(parent);



   console.log(parent)