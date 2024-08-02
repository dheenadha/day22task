import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from "./Header";
import Heading from "./Heading";
import Card from "./Card";
function App() {
  const cards = [
    {
      plan: "FREE",
      price: 0,
      features: [
        {
          name: "Singer User",
          enable : true
        },
        {
          name: "50 GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Project",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        }, {
          name: " Unlimited Private Projects",
          enable : false
        },
        {
          name: "Dedicated Phone Support",
          enable : false
        },
        {
          name: "Free Subdomain",
          enable : false
        },
        {
          name: "Monthly Status Reports",
          enable : false
        },
      ],
    },
    {
      plan: "PLUS",
      price: 9,
      features: [
        {
          name: "Singer User",
          enable : true
        },
        {
          name: "50 GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Project",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        }, {
          name: " Unlimited Private Projects",
          enable : true
        },
        {
          name: "Dedicated Phone Support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly Status Reports",
          enable : false
        },
      ],
    },
    {
      plan: "PRO",
      price: 40,
      features: [
        {
          name: "Singer User",
          enable : true
        },
        {
          name: "50 GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Project",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        }, {
          name: " Unlimited Private Projects",
          enable : true
        },
        {
          name: "Dedicated Phone Support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly Status Reports",
          enable : true
        },
      ],
    },
  ];
  return (
    <div className="container">
     
      <Heading />
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
