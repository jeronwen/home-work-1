import React from "react";

const Tab = () => {
  const tabsData = [
    {
      id: 1,
      title: "Сколько всего мест в доме?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expeditaeum provident totam!",
    },
    {
      id: 2,
      title: "Самая дорогая квартира?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga deserunt aliquid voluptatum ad, molestiae dicta officiis animi ummollitia, reiciendis a cum ratione veritatis cupiditate voluptatem.Consectetur, exercitationem magnam.",
    },
    {
      id: 3,
      title: "Могу ли я отменить бронирование?",
      description:
        "Да, вы можете отменить забронированную квартиру в течение 3 дней.",
    },
    {
      id: 4,
      title: "Можно ли купить квартиру?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi itaque ratione voluptatem dolores iusto aperiam adipisci incidunt perspiciatis ullam! Repellat accusamus rerum excepturi minus delectus? Consequatur libero nemo alias.",
    },
  ];
  const [activeId, setActiveId] = React.useState();

  const activateTab = (event) => {
    setActiveId(event.target.id);
  };

  let setActiveTab = (id) => {
    if (activeId == id) {
      return "tab active";
    } else {
      return "tab";
    }
  };

  return tabsData.map((tabData) => (
    <div key={tabData.id} className={setActiveTab(tabData.id)}>
      <input id="tab-one" type="checkbox" className="tabs" />
      <label id={tabData.id} onClick={activateTab} for="tab-one">
        {tabData.title}
      </label>
      <div className="tab-content">
        <p>{tabData.description}</p>
      </div>
    </div>
  ));
};

function App() {
  return (
    <div class="app-container">
      <h1 class="app-title">FAQ</h1>
      <div class="app-tabs">
        <Tab />
      </div>
    </div>
  );
}

export default App;
