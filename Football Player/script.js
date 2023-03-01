let players = [
  {
    id: 1,
    title: "Eden Hazard",
    category: "levelone",
    bid: 200,
    img: "https://th.bing.com/th/id/OIP.u96RA4WhqZkFRtbdVVqQTAHaE7?pid=ImgDet&rs=1",
    desc: `Eden Michael Walter Hazard (born 7 January 1991) is a Belgian professional footballer who plays as a winger or attacking midfielder for La Liga club Real Madrid. Known for his creativity, dribbling, passing and vision, Hazard is considered one of the best players of his generation. `,
  },
  {
    id: 2,
    title: "Cristiano Ronaldo",
    category: "levelone",
    bid: 400,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg",
    desc: `Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Professional League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards `,
  },
  {
    id: 3,
    title: "Lionel Andres Messi",
    category: "levelone",
    bid: 400,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    desc: `Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d'Or awards`,
  },
  {
    id: 4,
    title: "Neymar da Silva Santos Júnior",
    category: "leveltwo",
    bid: 200,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/220px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg",
    desc: `Neymar da Silva Santos Júnior (born 5 February 1992), known as Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team. A prolific goalscorer and renowned playmaker, he is regarded as one of the best players in the world`,
  },
  {
    id: 5,
    title: "Antoine Griezmann",
    category: "leveltwo",
    bid: 150,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/FRA-ARG_%2810%29_%28cropped%29.jpg/220px-FRA-ARG_%2810%29_%28cropped%29.jpg",
    desc: `Antoine Griezmann (French pronunciation: ​[ɑ̃twan ɡʁijɛzman];[4] born 21 March 1991) is a French professional footballer who plays as a forward for La Liga club Atlético Madrid and the France national team. A versatile player, he is known for his attacking, passing and supportive defence, and has played as an attacking midfielder, winger, and striker in his career.`,
  },
  {
    id: 6,
    title: "Fernando José Torres Sanz",
    category: "leveltwo",
    bid: 100,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Fernando_Torres_2017.jpg/220px-Fernando_Torres_2017.jpg",
    desc: `Fernando José Torres Sanz (Spanish pronunciation: [feɾˈnando ˈtores]; born 20 March 1984) is a Spanish football manager and former player who played as a striker. He is the current manager of Atlético Madrid Juvenil A`,
  },
  {
    id: 7,
    title: "Marcelo Vieira da Silva Júnior",
    category: "leveltwo",
    bid: 180,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bra-Cos_%286%29.jpg/220px-Bra-Cos_%286%29.jpg",
    desc: `Marcelo Vieira da Silva Júnior (born 12 May 1988), known as Marcelo, is a Brazilian professional footballer who plays as a left-back for Campeonato Brasileiro Série A club Fluminense. Known for his offensive capabilities, trickery, and technical qualities, Marcelo is often regarded as one of the greatest left-backs of all time.`,
  },
  {
    id: 9,
    title: "Karim Mostafa Benzema",
    category: "leveltwo",
    bid: 400,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/220px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg",
    desc: `Karim Mostafa Benzema (born 19 December 1987) is a French professional footballer who plays as a striker for and captains La Liga club Real Madrid. A creative and prolific forward, Benzema is regarded as one of the best strikers of all time.[4][5][6] He is Real Madrid's all-time second-highest goalscorer and top assist provider.`,
  },
  {
    id: 10,
    title: "José Diogo Dalot Teixeira",
    category: "levelthree",
    bid: 70,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Diogo_Dalot_2022_%28cropped%29.jpg/220px-Diogo_Dalot_2022_%28cropped%29.jpg",
    desc: `José Diogo Dalot Teixeira (Portuguese pronunciation: [diˈoɡu dɐˈlo];[3] born 18 March 1999) is a Portuguese professional footballer who plays as a right-back for Premier League club Manchester United and the Portugal national team.`,
  },
  {
    id: 11,
    title: "Bruno Miguel Borges Fernandes",
    category: "levelfour",
    bid: 90,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bruno_Fernandes_Portugal%2C_2018.jpg/220px-Bruno_Fernandes_Portugal%2C_2018.jpg",
    desc: `Bruno Miguel Borges Fernandes (European Portuguese: [ˈbɾunu fɨɾˈnɐ̃dɨʃ]; born 8 September 1994) is a Portuguese professional footballer who plays as an attacking midfielder for Premier League club Manchester United and the Portugal national team.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(players);
});

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget.dataset);
    const category = e.target.dataset.id;
    const playerCategory = players.filter(function (playerDetail) {
      // console.log(menuItem.category);
      console.log(playerDetail.category === category);
      if (playerDetail.category === category) {
        return playerDetail;
      }
    });
    if (category === "all") {
      diplayMenuItems(players);
    } else {
      diplayMenuItems(playerCategory);
    }
  });
});

function diplayMenuItems(players) {
  console.log(players);
  let displayMenu = players.map(function (player) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${player.img} alt=${player.title} class="photo" />
          <div class="item-info">
            <header>
              <h4 class="price">$${player.bid}m</h4>
            </header>
            <p class="item-text">
              ${player.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
